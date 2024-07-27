using Accounting_assistant.Context;
using Accounting_assistant.Models;
using Microsoft.EntityFrameworkCore;

namespace Accounting_assistant.Repositories
{
    public class WaterBillRepository: IWaterBillRepository
    {
        private readonly WaterBillContext _context;

        public WaterBillRepository(WaterBillContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<WaterBill>> GetAllWaterBillsAsync()       //wording!
        {
            return await _context.WaterBills.ToListAsync();
        }

        public async Task<WaterBill> GetWaterBillByIdAsync(int id)       
        {
            return await _context.WaterBills.FindAsync(id);
        }

        public async Task AddWaterBillAsync(WaterBill waterBill)     //wording!
        {
            _context.WaterBills.Add(waterBill);
            await _context.SaveChangesAsync();
        }               

        public async Task<List<WaterBill>> GetWaterBillByMouthAsync(string month)
        {
            //return _context.WaterBills.FirstOrDefault(waterBill => waterBill.StartDate.ToString() == month);   
            if (!int.TryParse(month, out int monthInt) || monthInt < 1 || monthInt > 12)
            {
                throw new ArgumentException("Invalid month: must be between 1 and 12.");
            }
            var bills = await _context.WaterBills
                                      .Where(waterBill => waterBill.StartDate.Month == monthInt)
                                      .ToListAsync();
            return bills;
        }

        public async Task UpdateWaterBillAsync(WaterBill waterBill)
        {
            _context.Entry(waterBill).State = EntityState.Modified;
            await _context.SaveChangesAsync();
        }

        public async Task DeleteWaterBillAsync(int id)      //wording!
        {
            var WaterBillToDelete = await _context.WaterBills.FindAsync(id);
            if (WaterBillToDelete != null)
            {
                _context.WaterBills.Remove(WaterBillToDelete);
                await _context.SaveChangesAsync();
            }
        }

        public async Task<bool> WaterBillExistsAsync(long id)
        {
            return await _context.WaterBills.AnyAsync(e => e.Id == id);
        }

        public async Task<bool> WaterBillIsPaidAsync(int id)
        {
            var waterBill = await _context.WaterBills.FindAsync(id);
            return waterBill.PaymentStatus;
        }

        public async Task<double> WaterBillAmountAsync(int id)
        {
            var waterBill = await _context.WaterBills.FindAsync(id);
            return Math.Round(waterBill.Amount, 2);
        }

        public async Task<double> WaterBillTotalBalanceAsync()
        {
            double totalAmount = await _context.WaterBills.SumAsync(waterBill => waterBill.Amount);
            return Math.Round(totalAmount, 2);
        }
    }
}
