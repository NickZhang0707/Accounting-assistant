namespace Accounting_assistant.Models
{
    public class PetrolBill
    {
        public int Id { get; set; }
        public double Liters { get; set; }
        public double PricePerLiter { get; set; }
        public double TotalPrice { get; set; }
        public DateTime Date { get; set; }
    }
}
