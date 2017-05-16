using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using TransactionService.Data.Model;

namespace TransactionService.Tests.Data.Models
{
    [TestClass]
    public class BatchTests
    {
        private Batch _batch;

        [TestInitialize]
        public void Initialize() {
            _batch = new Batch();
        }

        [TestMethod]
        public void ImportTransactionsFromStreamTest() {
            var lines = new List<string>();
            lines.Add($"date,category,spend");
            lines.Add($"1/5/2017,cosmetic,17.85");
            var content = lines.Aggregate((i,j) => i + Environment.NewLine + j);
            var stream = new MemoryStream(Encoding.UTF8.GetBytes(content));
            _batch.ImportTransactionsFromStream(stream);
            Assert.AreEqual(_batch.Transactions.Count(), 1);
        }
    }
}
