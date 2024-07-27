using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Accounting_assistant.Models;
using Accounting_assistant.Repositories;


namespace Accounting_assistant.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PowerBillController : ControllerBase
    {
        private readonly IPowerBillRepository _powerBillRepository;

        public PowerBillController(IPowerBillRepository powerBillRepository)
        {
            _powerBillRepository = powerBillRepository;
        }

        //GET all power bills
        [HttpGet]
        public async Task<ActionResult<IEnumerable<PowerBill>>> GetAllPowerBills()
        {
            var _powerBills = await _powerBillRepository.GetAllPowerBillsAsync();
            return Ok(_powerBills);
        }

        //GET power bill by id
        [HttpGet("id/{id}")]
        public async Task<ActionResult<PowerBill>> GetPowerBillById(int id)
        {
            var powerBill = await _powerBillRepository.GetPowerBillByIdAsync(id);
            if (powerBill == null)
            {
                return NotFound();
            }
            return Ok(powerBill);
        }

        //GET power bill by month
        [HttpGet("month/{month}")]
        public async Task<ActionResult<List<PowerBill>>> GetPowerBillByMonth(int month)
        {
            if (month < 1 || month > 12)
            {
                return BadRequest();
            }
            string monthString = month.ToString();
            var powerBill = await _powerBillRepository.GetPowerBillByMouthAsync(monthString);
            if (powerBill == null)
            {
                return NotFound();
            }
            return Ok(powerBill);
        }

        //POST power bill
        [HttpPost]
        public async Task<ActionResult<PowerBill>> AddPowerBill(PowerBill powerBill)
        {
            await _powerBillRepository.AddPowerBillAsync(powerBill);
            return CreatedAtAction(nameof(GetPowerBillById), new { id = powerBill.Id }, powerBill);
        }

        //PULL power bill
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdatePowerBill(int id, PowerBill powerBill)
        {
            if (id != powerBill.Id)
            {
                return BadRequest();
            }
            try
            {
                await _powerBillRepository.UpdatePowerBillAsync(powerBill);
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!await _powerBillRepository.PowerBillExistsAsync(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }
            return NoContent();
        }

        //DELETE power bill
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeletePowerBill(int id)
        {
            var powerBill = _powerBillRepository.GetPowerBillByIdAsync(id);
            if (_powerBillRepository.GetPowerBillByIdAsync(id) == null)
            {
                return NotFound();
            }
            await _powerBillRepository.DeletePowerBillAsync(id);
            return NoContent();
        }

        //GET power bill payment status
        [HttpGet("paymentStatus/{id}")]
        public async Task<ActionResult<bool>> GetPowerBillPaymentStatus(int id)
        {
            var powerBill = await _powerBillRepository.GetPowerBillByIdAsync(id);
            if (powerBill == null)
            {
                return NotFound();
            }
            return Ok(powerBill.PaymentStatus);
        }

        //GET power bill amount
        [HttpGet("amount/{id}")]
        public async Task<ActionResult<double>> GetPowerBillAmount(int id)
        {
            var powerBill = await _powerBillRepository.GetPowerBillByIdAsync(id);
            if (powerBill == null)
            {
                return NotFound();
            }
            return Ok(powerBill.Amount);
        }

        //GET total balance
        [HttpGet("totalBalance")]
        public async Task<ActionResult<double>> GetTotalBalance()
        {
            var totalBalance = await _powerBillRepository.PowerBillTotalBalanceAsync();
            return Ok(totalBalance);
        }
    }
}
