using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ContractsApplication.Models.DTO
{
    public class DataChartDTO
    {
        public List<double> data { get; set; }
        public string label { get; set; }

        public DataChartDTO(string _label) {
            this.label = _label;
            this.data = new List<double>();
        }
    }
}