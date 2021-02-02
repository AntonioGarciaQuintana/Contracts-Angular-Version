using Newtonsoft.Json.Converters;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ContractsApplication.Util
{
    public class CustomDateTimeConverter: IsoDateTimeConverter
    {
        public CustomDateTimeConverter()
        {
            base.DateTimeFormat = "dd/MM/yyyy";
        }
    }
}