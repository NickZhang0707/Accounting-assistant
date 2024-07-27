using Accounting_assistant.Models;

namespace Accounting_assistant.Repositories
{
    public interface IWaterBillRepository
    {
        Task<IEnumerable<WaterBill>> GetAllWaterBillsAsync();

        Task<List<WaterBill>> GetWaterBillByMouthAsync(string mouth);

        Task<WaterBill> GetWaterBillByIdAsync(int id);

        Task AddWaterBillAsync(WaterBill waterBill);

        Task UpdateWaterBillAsync(WaterBill waterBill);

        Task DeleteWaterBillAsync(int id);

        Task<bool> WaterBillExistsAsync(long id);

        Task<bool> WaterBillIsPaidAsync(int id);
        
        Task<double> WaterBillAmountAsync(int id);

        Task<double> WaterBillTotalBalanceAsync();
    }
}
