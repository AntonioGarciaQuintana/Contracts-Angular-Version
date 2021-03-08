using ContractsApplication.Models;
using ContractsApplication.Models.DTO;
using ContractsApplication.Models.Enums;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ContractsApplication.Service.Interfaces
{
    public interface IPaymentService
    {
        void SaveOrUpdatePayment(Payment paymet);

        List<Payment> GetAllPaymentContract(int idContract, PaymentTypeEnum type);

        AmountResumeDTO GetAmountResumeByContract(int idContract, PaymentTypeEnum type);

        void DeletePayment(int idPayment);

        DashboardDTO GetInfoDashboard();
    }
}
