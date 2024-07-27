using Accounting_assistant.Models;

namespace Accounting_assistant.Repositories
{
    public interface IPowerBillRepository
    {
        Task<IEnumerable<PowerBill>> GetAllPowerBillsAsync();

        Task<List<PowerBill>> GetPowerBillByMouthAsync(string mouth);

        Task<PowerBill> GetPowerBillByIdAsync(int id);

        Task AddPowerBillAsync(PowerBill powerBill);

        Task UpdatePowerBillAsync(PowerBill powerBill);

        Task DeletePowerBillAsync(int id);

        Task<bool> PowerBillExistsAsync(long id);

        Task<bool> PowerBillIsPaidAsync(int id);

        Task<double> PowerBillAmountAsync(int id);

        Task<double> PowerBillTotalBalanceAsync();
    }
}
