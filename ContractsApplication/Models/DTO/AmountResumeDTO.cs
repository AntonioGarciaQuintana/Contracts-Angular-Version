using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ContractsApplication.Models.DTO
{
    public class AmountResumeDTO
    {
        public double TotalPayment { get; set; }
        public double TotalRestremaining { get; set; }

        public AmountResumeDTO(double totalPayment, double totalRestremaining) {
            this.TotalPayment = totalPayment;
            this.TotalRestremaining = totalRestremaining;
        }

    }
}