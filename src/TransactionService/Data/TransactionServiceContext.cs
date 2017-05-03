using System.Data.Entity;
using System.Threading.Tasks;
using TransactionService.Data.Model;

namespace TransactionService.Data
{
    public interface ITransactionServiceContext
    {
        DbSet<Batch> Batches { get; set; }
        DbSet<Transaction> Transactions { get; set; }
        Task<int> SaveChangesAsync();
    }

    public class TransactionServiceContext : DbContext, ITransactionServiceContext
    {
        public TransactionServiceContext()
            : base("TransactionServiceContext")
        {
            Configuration.ProxyCreationEnabled = false;
            Configuration.LazyLoadingEnabled = false;
            Configuration.AutoDetectChangesEnabled = true;
        }

        public DbSet<Batch> Batches { get; set; }
        public DbSet<Transaction> Transactions { get; set; }
    }
}