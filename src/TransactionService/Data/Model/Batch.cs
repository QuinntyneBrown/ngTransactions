using System;
using System.Collections.Generic;
using System.IO;

namespace TransactionService.Data.Model
{
    public class Batch {

        public int Id { get; set; }

		public string Filename { get; set; }

        public ICollection<Transaction> Transactions { get; set; } = new HashSet<Transaction>();

        public void ImportTransactionsFromStream(Stream stream) {
            using (var streamReader = new StreamReader(stream))
            {
                string line;
                var isFirstLine = true;
                while ((line = streamReader.ReadLine()) != null)
                {
                    if (!isFirstLine)
                    {
                        var transaction = Transaction.FromTransactionFileLine(line);
                        if (transaction != null)
                            Transactions.Add(transaction);
                    }
                    isFirstLine = false;
                }
            }
        }
    }
}
