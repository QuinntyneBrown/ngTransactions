using System;
using TransactionService.Data.Model;

namespace TransactionService.Features.Transactions
{
    public class TransactionApiModel
    {
        public DateTime Date { get; set; }

        public string Category { get; set; }

        public string Spend { get; set; }

        public static TransactionApiModel FromTransaction(Transaction model) {
            return new TransactionApiModel()
            {
                Date = model.Date,
                Category = model.Category,
                Spend = model.Spend.ToString("C")
            };
        }
    }
}