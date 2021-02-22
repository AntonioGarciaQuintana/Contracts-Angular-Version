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
    [Table("tblContracts")]
    public class Contracts
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }

        [Required(ErrorMessage ="Please enter the Name")]
        [StringLength(150)]
        public string Name { get; set; }

        [Required(ErrorMessage ="Please enter the Acres")]
        [StringLength(50, ErrorMessage ="The Acres must be less than {1} characters.")]
        public string Acres { get; set; }

        [Required(ErrorMessage ="Please enter the Amount")]
        public double Amount { get; set; }

        [StringLength(200, ErrorMessage = "The Location must be less than {1} characters.")]
        public string Location { get; set; }

        [Required(ErrorMessage ="Please enter the Start Date")]
        [DataType(DataType.Date)]
        [JsonConverter(typeof(JsonDateConverter))]
        public DateTime StartDate { get; set; }

        [Required(ErrorMessage ="Please enter the End Date")]
        [DataType(DataType.Date)]
        [JsonConverter(typeof(JsonDateConverter))]
        public DateTime EndDate { get; set; }

        [StringLength(50, ErrorMessage = "The Phone must be less than {1} characters.")]
        public string Phone { get; set; }

        [StringLength(500, ErrorMessage = "The Description must be less than {1} characters.")]
        public string Description { get; set; }

        [DataType(DataType.Date)]
        [JsonConverter(typeof(JsonDateConverter))]
        public DateTime CreationDate { get; set; }

        [DataType(DataType.Date)]
        [JsonConverter(typeof(JsonDateConverter))]
        public DateTime LastUpdate { get; set; }
        public virtual List<ImageContract> Images { get; set; }
        public virtual List<Payment> Payments { get; set; }
        public bool IsDelete { get; set; }
    }
}