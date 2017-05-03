using System;

namespace TransactionService.Data.Model
{
    public class Transaction
    {
        public int Id { get; set; }

		public DateTime Date { get; set; }
        
		public string Category { get; set; }
        
		public float Spend { get; set; }

        public static Transaction FromTransactionFileLine(string line) {
            var transaction = new Transaction();
            var parts = line.Split(',');

            if (parts.Length != 3)
                return null;
            
            transaction.Date = Convert.ToDateTime(parts[0]);
            transaction.Category = parts[1];
            transaction.Spend = string.IsNullOrEmpty(parts[2]) ? 0 : float.Parse(parts[2].Replace("$", ""));
            return transaction;
        }
    }
}
