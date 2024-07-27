namespace Accounting_assistant.Models
{
    public class PowerBill
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public double Kwh { get; set; }
        public double PricePerKwh { get; set; }
        public double Amount { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime DueDate { get; set; }
        public Boolean PaymentStatus { get; set; }

    }
}
