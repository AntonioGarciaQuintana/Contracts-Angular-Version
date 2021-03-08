using ContractsApplication.Models;
using ContractsApplication.Models.DTO;
using ContractsApplication.Models.Enums;
using ContractsApplication.Repository;
using ContractsApplication.Service.Interfaces;
using System;
using System.Collections.Generic;
using System.Diagnostics.Contracts;
using System.Linq;
using System.Linq.Expressions;
using System.Web;

namespace ContractsApplication.Service
{
    public class ContractService : IContractService
    {

        private readonly IUnitOfWork UnitOfWork;

        public ContractService(IUnitOfWork unitWork)
        {
            UnitOfWork = unitWork;
        }

        public void DeleteContract(int id)
        {
            var contract = UnitOfWork.GetRepository<Contracts>().GetAll().FirstOrDefault(c => c.Id == id);
            contract.IsDelete = true;
            contract.LastUpdate = DateTime.Now;
            UnitOfWork.GetRepository<Contracts>().Update(contract);
            UnitOfWork.SaveChanges();

        }

        public void DeleteImageContract(int idImage)
        {
            var ImageContract = UnitOfWork.GetRepository<ImageContract>().GetAll().FirstOrDefault(c => c.Id == idImage);
            if (ImageContract != null)
            {
                ImageContract.IsDeelte = true;
                UnitOfWork.GetRepository<ImageContract>().Update(ImageContract);
                UnitOfWork.SaveChanges();
            }

        }

        public IList<Contracts> GetAllContracts()
        {
            return UnitOfWork.GetRepository<Contracts>().GetAll().ToList();
        }

        public List<ImageContract> GetAllImagesContract(int idContract)
        {
            var imageList = UnitOfWork.GetRepository<ImageContract>().GetAll().Where(c => c.IdContract == idContract && c.IsDeelte == false).ToList();
           
            return imageList;
        }

        public Contracts GetContractById(int id)
        {
            return UnitOfWork.GetRepository<Contracts>().GetAll().FirstOrDefault(c => c.Id == id);
        }

        public DataTableDto<Contracts> GetPages(int page, int size, string sort, string search)
        {
            var dataTable = new DataTableDto<Contracts>();
            var contractList = UnitOfWork.GetRepository<Contracts>().GetAll()
                .Where(x => (x.Id.ToString().Contains(search) || x.Name.Contains(search)) && x.IsDelete == false).ToList();
            var total = contractList.Count();
            dataTable.TotalElements = total;
            dataTable.Data = contractList.Skip(page).Take(size).ToList();
            return dataTable;
        }

        public ResumeContractDTO GetResumeContract(int idContrat)
        {
            var paymentList = UnitOfWork.GetRepository<Payment>().GetAll().Where(s => s.isDelete == false && s.IdContract == idContrat).OrderBy(d => d.Date).ToList();
            var resume = new ResumeContractDTO();
            resume.BarListYear = new List<string>();
            paymentList.ForEach(s =>
            {
                if (s.Type == PaymentTypeEnum.Contract) {
                    resume.TotalPaymentContract += s.Amount;
                }

                if (s.Type == PaymentTypeEnum.Water) {
                    resume.TotalWaterPayment += s.Amount;
                }

                if (s.Date != null) {
                    if (!resume.BarListYear.Contains((s.Date.Year + "")))
                    {
                        resume.BarListYear.Add(s.Date.Year + "");
                    }
                }
                
            });

            resume.DataBarChart = GetDataChartBart(resume.BarListYear, paymentList);

            return resume;
        }

        public List<DataChartDTO> GetDataChartBart(List<string> years, List<Payment> payments) {
            var dataPaymentDTO = new DataChartDTO("Abonos al contrato");
            var dataWaterDTO = new DataChartDTO("Pagos de agua");
            years.ForEach(d =>
            {
                double totalValuePaymentByYear = 0.0;
                double totalValuewaterByYear = 0.0;
                payments.ForEach(s =>
                {
                    if ((s.Date.Year + "") == d && s.Type == PaymentTypeEnum.Contract) {
                        totalValuePaymentByYear += s.Amount;
                    }
                    if ((s.Date.Year + "") == d && s.Type == PaymentTypeEnum.Water)
                    {
                        totalValuewaterByYear += s.Amount;
                    }
                });
                dataPaymentDTO.data.Add(totalValuePaymentByYear);
                dataWaterDTO.data.Add(totalValuewaterByYear);
            });
            List<DataChartDTO> ret = new List<DataChartDTO>();
            ret.Add(dataPaymentDTO);
            ret.Add(dataWaterDTO);

            return ret;
        }

        public void SaveImageContract(ImageContract imageContract)
        {
            var contract = GetContractById(imageContract.IdContract);

            var image = new ImageContract();
            image.Name = imageContract.Name;
            image.Base = imageContract.Base;
            image.IdContract = contract.Id;

            if (contract.Images == null)
            {
                contract.Images = new List<ImageContract>();
            }

            contract.LastUpdate = DateTime.Now;
            contract.Images.Add(image);
            UnitOfWork.GetRepository<Contracts>().Update(contract);
            UnitOfWork.SaveChanges();
        }

        public void SaveOrUpdateContract(Contracts contract)
        {
            if (contract.Id > 0)
            {
                var contractBD = UnitOfWork.GetRepository<Contracts>().GetAll().FirstOrDefault(c => c.Id == contract.Id);
                contractBD.LastUpdate = DateTime.Now;
                contractBD.Name = contract.Name;
                contractBD.Acres = contract.Acres;
                contractBD.Amount = contract.Amount;
                contractBD.Location = contract.Location;
                contractBD.StartDate = contract.StartDate;
                contractBD.EndDate = contract.EndDate;
                contractBD.Phone = contract.Phone;
                contractBD.Description = contract.Description;
                UnitOfWork.GetRepository<Contracts>().Update(contractBD);
            }
            else
            {
                contract.CreationDate = DateTime.Now;
                contract.LastUpdate = DateTime.Now;
                UnitOfWork.GetRepository<Contracts>().Add(contract);
            }

            UnitOfWork.SaveChanges();
        }
    }
}
