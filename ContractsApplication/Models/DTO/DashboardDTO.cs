using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ContractsApplication.Models.DTO
{
    public class DashboardDTO
    {
        public int TotalContract { get; set; }
        public int TotalActiveContract { get; set; }
        public int TotalPaymentWaterContract { get; set; }
        public int TotalPaymentContract { get; set; }
        public double TotalPaymentWaterCost { get; set; }
        public double TotalPaymentConstractCost { get; set; }
        public List<ContractResumeDTO> ContractList { get; set; }
    }
}