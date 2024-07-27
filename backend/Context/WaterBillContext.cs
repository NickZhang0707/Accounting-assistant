using System.Security.Cryptography.X509Certificates;
using Accounting_assistant.Models;
using Microsoft.EntityFrameworkCore;

namespace Accounting_assistant.Context
{
    public class WaterBillContext : DbContext
    {
        public WaterBillContext(DbContextOptions<WaterBillContext> options)
            : base(options)
        {
        }
        public DbSet<WaterBill> WaterBills { get; set; } = null!;
    }
}
