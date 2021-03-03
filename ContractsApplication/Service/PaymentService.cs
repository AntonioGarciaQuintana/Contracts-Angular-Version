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

        public List<Payment> GetAllPaymentContract(int idContract, PaymentTypeEnum type)
        {
            var paymentList = UnitOfWork.GetRepository<Payment>().GetAll().Where(s => s.Type == type && s.IdContract == idContract).ToList();
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