﻿namespace Accounting_assistant.Models
{
    public class WaterBill
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public double CubicMeters { get; set; }
        public double PricePerCubicMeter { get; set; }
        public double Amount { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime DueDate { get; set; }
        public Boolean PaymentStatus { get; set; }
    }
}