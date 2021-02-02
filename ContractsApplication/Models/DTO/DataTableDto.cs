using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ContractsApplication.Models.DTO
{
    public class DataTableDto<T>
    {
        public int TotalElements { get; set; }
        public List<T> Data { get; set; }
    }
}