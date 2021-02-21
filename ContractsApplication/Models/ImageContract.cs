using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace ContractsApplication.Models
{
    public class ImageContract
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }

        public string Name { get; set; }
        public string Base { get; set; }
        public bool IsDeelte { get; set; }
        public virtual Contracts Contract { get; set; }
        public int IdContract { get; set; }

    }
}