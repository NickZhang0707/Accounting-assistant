using System.Security.Cryptography.X509Certificates;
using Accounting_assistant.Models;
using Microsoft.EntityFrameworkCore;

namespace Accounting_assistant.Context
{
    public class PowerBillContext : DbContext
    {
        public PowerBillContext(DbContextOptions<PowerBillContext> options)
            : base(options)
        {
        }
        public DbSet<PowerBill> PowerBills { get; set; } = null!;
    }
}
