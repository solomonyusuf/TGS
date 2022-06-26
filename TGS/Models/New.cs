using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace TGS.Models
{
    public class New
    {
        [Key]
        [Required]
        public Guid id { get; set; }
        [StringLength(200)]
        public string ImgPath { get; set; }
        [StringLength(20)]
        public string Title { get; set; }
        [StringLength(225)]
        public string Body { get; set; }
        [StringLength(50)]
        [DataType(DataType.DateTime)]
        public string TimeStamp { get; set; }
    }
}
