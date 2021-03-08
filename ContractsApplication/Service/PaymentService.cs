using ContractsApplication.Models;
using ContractsApplication.Models.DTO;
using ContractsApplication.Models.Enums;
using ContractsApplication.Repository;
using ContractsApplication.Service.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ContractsApplication.Service
{
    public class PaymentService : IPaymentService
    {
        private readonly IUnitOfWork UnitOfWork;

        public PaymentService(IUnitOfWork unitWork) {
            this.UnitOfWork = unitWork;
        }

        public void DeletePayment(int idPayment)
        {
          var paymentBD =  UnitOfWork.GetRepository<Payment>().GetAll().FirstOrDefault(c => c.Id == idPayment);
            paymentBD.isDelete = true;
            paymentBD.LastUpdate = DateTime.Now;
            UnitOfWork.GetRepository<Payment>().Update(paymentBD);
            UnitOfWork.SaveChanges();
        }

        public List<Payment> GetAllPaymentContract(int idContract, PaymentTypeEnum type)
        {
            var paymentList = UnitOfWork.GetRepository<Payment>().GetAll().Where(s => s.Type == type && s.IdContract == idContract && s.isDelete == false).ToList();
            return paymentList;
        }

        public AmountResumeDTO GetAmountResumeByContract(int idContract, PaymentTypeEnum type)
        {
            var payments = UnitOfWork.GetRepository<Payment>().GetAll().Where(s => s.IdContract == idContract && s.Type == type).ToList();

            var contract = UnitOfWork.GetRepository<Contracts>().GetAll().FirstOrDefault(s => s.Id == idContract);

            var amountResume = new AmountResumeDTO(0,0);

            foreach (Payment payment in payments) {
                amountResume.TotalPayment += payment.Amount;
            }
            amountResume.TotalRestremaining = contract.Amount - amountResume.TotalPayment;

            return amountResume;
        }

        public DashboardDTO GetInfoDashboard()
        {
            var dashboard = new DashboardDTO();
             var contractsList = UnitOfWork.GetRepository<Contracts>().GetAll().ToList();
            var paymentsList = UnitOfWork.GetRepository<Payment>().GetAll().Where(s => s.isDelete == false).ToList();

            dashboard.TotalContract = contractsList.Count;
            dashboard.TotalActiveContract = contractsList.Where(s => s.IsDelete == false).Count();
            dashboard.TotalPaymentContract = paymentsList.Where(p => p.Type == PaymentTypeEnum.Contract && p.isDelete == false).Count();
            dashboard.TotalPaymentWaterContract = paymentsList.Where(p => p.Type == PaymentTypeEnum.Water && p.isDelete == false).Count();

            double totalContract = 0.0;
            paymentsList.Where(p => p.Type == PaymentTypeEnum.Contract && p.isDelete == false).ToList().ForEach(c => {
                totalContract += c.Amount;
            });
            dashboard.TotalPaymentConstractCost = totalContract;

            double totalWater = 0.0;
            paymentsList.Where(p => p.Type == PaymentTypeEnum.Water && p.isDelete == false).ToList().ForEach(c => {
                totalWater += c.Amount;
            });
            dashboard.TotalPaymentWaterCost = totalWater;


            dashboard.ContractList = GetContractResume(contractsList, paymentsList);

            return dashboard;
        }

        public List<ContractResumeDTO> GetContractResume(List<Contracts> contracts, List<Payment> payments)
        {
            var ret = new List<ContractResumeDTO>();

            contracts.Where(c=>c.IsDelete == false).ToList().ForEach(c =>
            {
                var contratResum = new ContractResumeDTO();
                contratResum.NameContract = c.Name;

                double totalContract =0.0;
                double totalWater = 0.0;

                payments.Where(p=> p.IdContract == c.Id ).ToList().ForEach(s =>
                {
                    if (s.Type == PaymentTypeEnum.Contract)
                    {
                        totalContract += s.Amount;
                    }
                    if (s.Type == PaymentTypeEnum.Water)
                    {
                        totalWater += s.Amount;
                    }
                });

                contratResum.TotalWather = totalWater;
                contratResum.TotalContract = totalContract;
                contratResum.Percentage = Math.Round((100 - (Math.Round((((c.Amount - totalContract)/ c.Amount) * 100),2))),0);

                // add to list
                ret.Add(contratResum);
            });


            return ret;
        }

        public void SaveOrUpdatePayment(Payment payment)
        {
            if (payment.Id > 0)
            {
                var paymentBD = UnitOfWork.GetRepository<Payment>().GetAll().FirstOrDefault(c => c.Id == payment.Id);
                paymentBD.LastUpdate = DateTime.Now;
                paymentBD.Name = payment.Name;
                paymentBD.Type = payment.Type;
                paymentBD.Method = payment.Method;
                paymentBD.Date = payment.Date;
                paymentBD.Bank = payment.Bank;
                paymentBD.NoCheck = payment.NoCheck;
                paymentBD.NameImage = payment.NameImage;
                paymentBD.Base = payment.Base;
                paymentBD.Description = payment.Description;
                paymentBD.IdContract = payment.IdContract;
                paymentBD.Amount = payment.Amount;
                UnitOfWork.GetRepository<Payment>().Update(paymentBD);

            }
            else {
                payment.CreationDate = DateTime.Now;
                payment.LastUpdate = DateTime.Now;
                UnitOfWork.GetRepository<Payment>().Add(payment);
            }

            UnitOfWork.SaveChanges();
        }
    }
}