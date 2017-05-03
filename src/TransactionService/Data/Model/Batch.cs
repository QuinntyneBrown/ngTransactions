using System;
using System.Collections.Generic;

namespace TransactionService.Data.Model
{
    public class Batch {

        public int Id { get; set; }

		public string Filename { get; set; }

        public ICollection<Transaction> Transactions { get; set; } = new HashSet<Transaction>();
    }
}
