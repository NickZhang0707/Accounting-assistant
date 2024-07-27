using Accounting_assistant.Context;
using Accounting_assistant.Models;
using Microsoft.EntityFrameworkCore;

namespace Accounting_assistant.Repositories
{
    public class PowerBillRepository: IPowerBillRepository
    {
        private readonly PowerBillContext _context;

        public PowerBillRepository(PowerBillContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<PowerBill>> GetAllPowerBillsAsync()       //wording!
        {
            return await _context.PowerBills.ToListAsync();
        }

        public async Task<PowerBill> GetPowerBillByIdAsync(int id)
        {
            return await _context.PowerBills.FindAsync(id);
        }

        public async Task AddPowerBillAsync(PowerBill powerBill)     //wording!
        {
            _context.PowerBills.Add(powerBill);
            await _context.SaveChangesAsync();
        }

        public async Task<List<PowerBill>> GetPowerBillByMouthAsync(string month)
        {
            //return _context.WaterBills.FirstOrDefault(waterBill => waterBill.StartDate.ToString() == month);   
            if (!int.TryParse(month, out int monthInt) || monthInt < 1 || monthInt > 12)
            {
                throw new ArgumentException("Invalid month: must be between 1 and 12.");
            }
            var bills = await _context.PowerBills
                                      .Where(powerBill => powerBill.StartDate.Month == monthInt)
                                      .ToListAsync();
            return bills;
        }

        public async Task UpdatePowerBillAsync(PowerBill powerBill)
        {
            _context.Entry(powerBill).State = EntityState.Modified;
            await _context.SaveChangesAsync();
        }

        public async Task DeletePowerBillAsync(int id)      //wording!
        {
            var PowerBillToDelete = await _context.PowerBills.FindAsync(id);
            if (PowerBillToDelete != null)
            {
                _context.PowerBills.Remove(PowerBillToDelete);
                await _context.SaveChangesAsync();
            }
        }

        public async Task<bool> PowerBillExistsAsync(long id)
        {
            return await _context.PowerBills.AnyAsync(e => e.Id == id);
        }

        public async Task<bool> PowerBillIsPaidAsync(int id)
        {
            var powerBill = await _context.PowerBills.FindAsync(id);
            return powerBill.PaymentStatus;
        }

        public async Task<double> PowerBillAmountAsync(int id)
        {
            var powerBill = await _context.PowerBills.FindAsync(id);
            return Math.Round(powerBill.Amount, 2);
        }

        public async Task<double> PowerBillTotalBalanceAsync()
        {
            double totalAmount = await _context.PowerBills.SumAsync(powerBill => powerBill.Amount);
            return Math.Round(totalAmount, 2);
        }
    }
}
