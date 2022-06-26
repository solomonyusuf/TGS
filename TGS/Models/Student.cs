using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace TGS.Models
{
    public class Student
    {
        [Key]
        [Required]
        public int StudentId { get; set; }
        [StringLength(200)]
        public string ImgPath { get; set; }
        [StringLength(30)]
        public string FirstName { get; set; }
        [StringLength(20)]
        public string LastName { get; set; }
        [StringLength(20)]
        public string MiddleName { get; set; }
        [StringLength(20)]
        public string Class { get; set; }
        [StringLength(20)]
        public string Status { get; set; }
        [StringLength(10)]
        public string Sex { get; set; }
        [StringLength(20)]
        public string DOB { get; set; }
        [StringLength(10)]
        public string OriginState { get; set; }
        public ICollection<ParentInfo> Parent { get; }
        public ICollection<Result> Results { get; }
        public int TotalResult { get; }
        public DateTime TimeStamp { get; set; }


        public Student()
        {
            Parent = new Collection<ParentInfo>();
            Results = new Collection<Result>();
            TotalResult = Results.Count;
            TimeStamp = DateTime.Now;
        }
    }
}
