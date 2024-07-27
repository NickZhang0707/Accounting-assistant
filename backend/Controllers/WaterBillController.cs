using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Accounting_assistant.Models;
using Accounting_assistant.Repositories;


namespace Accounting_assistant.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class WaterBillController : ControllerBase
    {
        private readonly IWaterBillRepository _waterBillRepository;

        public WaterBillController(IWaterBillRepository waterBillRepository)
        {
            _waterBillRepository = waterBillRepository;
        }

        //GET all water bills
        [HttpGet]       
        public async Task<ActionResult<IEnumerable<WaterBill>>> GetAllWaterBills()
        {   
            var _waterBills = await _waterBillRepository.GetAllWaterBillsAsync();
            return Ok(_waterBills);
        }

        //GET water bill by id
        [HttpGet("id/{id}")]       
        public async Task<ActionResult<WaterBill>> GetWaterBillById(int id)
        {
            var waterBill = await _waterBillRepository.GetWaterBillByIdAsync(id);
            if (waterBill == null)
            {
                return NotFound();
            }
            return Ok(waterBill);
        }

        //GET water bill by month
        [HttpGet("month/{month}")]
        public async Task<ActionResult<List<WaterBill>>> GetWaterBillByMonth(int month)
        {   
            if (month < 1 || month > 12)
            {
                return BadRequest();
            }
            string monthString = month.ToString();
            var waterBill = await _waterBillRepository.GetWaterBillByMouthAsync(monthString); 
            if (waterBill == null)
            {
                return NotFound();
            }
            return Ok(waterBill);
        }

        //POST water bill
        [HttpPost]      
        public async Task<ActionResult<WaterBill>> AddWaterBill(WaterBill waterBill)
        {
            await _waterBillRepository.AddWaterBillAsync(waterBill);
            return CreatedAtAction(nameof(GetWaterBillById), new { id = waterBill.Id }, waterBill);
        }

        //PULL water bill
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateWaterBill(int id, WaterBill waterBill)
        {
            if (id != waterBill.Id)
            {
                return BadRequest();
            }
            try
            {
                await _waterBillRepository.UpdateWaterBillAsync(waterBill);
            }
            catch (DbUpdateConcurrencyException)
            {
                if (! await _waterBillRepository.WaterBillExistsAsync(id))
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

        //DELETE water bill
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteWaterBill(int id)
        {
            var waterBill =  _waterBillRepository.GetWaterBillByIdAsync(id);
            if (_waterBillRepository.GetWaterBillByIdAsync(id) == null)
            {
                return NotFound();
            }
            await _waterBillRepository.DeleteWaterBillAsync(id);
            return NoContent();
        }

        //GET water bill payment status
        [HttpGet("paymentStatus/{id}")]
        public async Task<ActionResult<bool>> GetWaterBillPaymentStatus(int id)
        {
            var waterBill = await _waterBillRepository.GetWaterBillByIdAsync(id);
            if (waterBill == null)
            {
                return NotFound();
            }
            return Ok(waterBill.PaymentStatus);
        }

        //GET water bill amount
        [HttpGet("amount/{id}")]
        public async Task<ActionResult<double>> GetWaterBillAmount(int id)
        {
            var waterBill = await _waterBillRepository.GetWaterBillByIdAsync(id);
            if (waterBill == null)
            {
                return NotFound();
            }
            return Ok(waterBill.Amount);
        }

        //GET total balance
        [HttpGet("totalBalance")]
        public async Task<ActionResult<double>> GetTotalBalance()
        {
            var totalBalance = await _waterBillRepository.WaterBillTotalBalanceAsync();
            return Ok(totalBalance);
        }
       
    }
}
