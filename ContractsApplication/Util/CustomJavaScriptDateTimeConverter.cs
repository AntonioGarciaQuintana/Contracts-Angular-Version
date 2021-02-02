using Newtonsoft.Json;
using Newtonsoft.Json.Converters;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ContractsApplication.Util
{
    public class CustomJavaScriptDateTimeConverter : JavaScriptDateTimeConverter
    {
        public override void WriteJson(JsonWriter writer, object value, JsonSerializer serializer)
        {
            var js = new JsonSerializer() { DateFormatHandling = DateFormatHandling.MicrosoftDateFormat };
            js.Serialize(writer, value);
        }
    }
}