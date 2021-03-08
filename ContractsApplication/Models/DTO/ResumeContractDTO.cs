using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ContractsApplication.Models.DTO
{
    public class ResumeContractDTO
    {
        public double TotalPaymentContract { get; set; }
        public double TotalWaterPayment { get; set; }

        public List<string> BarListYear { get; set; }
        public List<DataChartDTO> DataBarChart { get; set; }

    }
}