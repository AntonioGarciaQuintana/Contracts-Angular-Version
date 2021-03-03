using ContractsApplication.Models.Enums;
using ContractsApplication.Util;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace ContractsApplication.Models
{
    public class Payment
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }

        [StringLength(150)]
        public string Name { get; set; }
        public PaymentTypeEnum Type { get; set; }
        public PaymentMethodEnum Method { get; set; }
        public double Amount { get; set; }

        [DataType(DataType.Date)]
        [JsonConverter(typeof(JsonDateConverter))]
        public DateTime Date { get; set; }

        [StringLength(100)]
        public string Bank { get; set; }

        [StringLength(100)]
        public string NoCheck { get; set; }

        public string NameImage { get; set; }
        public string Base { get; set; }

        [StringLength(500)]
        public string Description { get; set; }
        public virtual Contracts Contract { get; set; }
        public int IdContract { get; set; }

        [DataType(DataType.Date)]
        [JsonConverter(typeof(JsonDateConverter))]
        public DateTime CreationDate { get; set; }

        [DataType(DataType.Date)]
        [JsonConverter(typeof(JsonDateConverter))]
        public DateTime LastUpdate { get; set; }

        public bool isDelete { get; set; }
    }

}