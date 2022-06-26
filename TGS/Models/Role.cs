using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace TGS.Models
{
    public class Role:IdentityRole
    {
       public ICollection<ApplicationUser> Users { get; set; }    
        [DataType(DataType.DateTime)]
        public DateTime TimeStamp { get; set; }
        public Role()
        {
            Users = new Collection<ApplicationUser>();    
            TimeStamp = DateTime.Now;
        }

    }
}
