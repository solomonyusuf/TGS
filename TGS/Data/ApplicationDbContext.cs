using TGS.Models;
using IdentityServer4.EntityFramework.Options;
using Microsoft.AspNetCore.ApiAuthorization.IdentityServer;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TGS.Data
{
    public class ApplicationDbContext : ApiAuthorizationDbContext<ApplicationUser>
    {
        public DbSet<Student> Students { get; set; }
        public DbSet<New> News { get; set; }
        public DbSet<Staff> Staffs { get; set; }
        public DbSet<Contact> Contacts { get; set; }
        public DbSet<Role> Role { get; set; }

        public ApplicationDbContext(
            DbContextOptions options,
            IOptions<OperationalStoreOptions> operationalStoreOptions) : base(options, operationalStoreOptions)
        {
        }

        public DbSet<TGS.Models.ParentInfo> ParentInfo { get; set; }

        public DbSet<TGS.Models.Result> Result { get; set; }
        public DbSet<TGS.Models.UserRole> UserRole { get; set; }

        public DbSet<TGS.Models.Subject> Subject { get; set; }
    }
}
