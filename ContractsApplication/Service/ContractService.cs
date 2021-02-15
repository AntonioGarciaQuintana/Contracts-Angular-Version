using ContractsApplication.Models;
using ContractsApplication.Models.DTO;
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
            var contract = UnitOfWork.GetRepository<Contracts>().GetAll().FirstOrDefault(c=> c.Id == id);
            contract.IsDelete = true;
            contract.LastUpdate = DateTime.Now;
            UnitOfWork.GetRepository<Contracts>().Update(contract);
            UnitOfWork.SaveChanges();

        }

        public IList<Contracts> GetAllContracts()
        {
            return UnitOfWork.GetRepository<Contracts>().GetAll().ToList();
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

        public void SaveImageContract(ImageContract imageContract)
        {
            var contract = GetContractById(imageContract.IdContract);

            var image = new ImageContract();
            image.Name = imageContract.Name;
            image.Base = imageContract.Base;

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
            else {
                contract.CreationDate = DateTime.Now;
                contract.LastUpdate = DateTime.Now;
                UnitOfWork.GetRepository<Contracts>().Add(contract);
            }

            UnitOfWork.SaveChanges();
        }
    }
}
