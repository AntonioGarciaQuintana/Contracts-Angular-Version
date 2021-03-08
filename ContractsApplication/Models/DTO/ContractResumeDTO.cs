using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ContractsApplication.Models.DTO
{
    public class ContractResumeDTO
    {
        public string NameContract { get; set; }
        public double Percentage { get; set; }
        public double TotalWather { get; set; }
        public double TotalContract { get; set; }
    }
}