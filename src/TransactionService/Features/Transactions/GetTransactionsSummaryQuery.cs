using MediatR;
using System.Threading.Tasks;
using System.Linq;
using System.Data.Entity;
using TransactionService.Data;

namespace TransactionService.Features.Transactions
{
    public class GetTransactionsSummaryQuery
    {
        public class GetTransactionsSummaryRequest : IRequest<GetTransactionsSummaryResponse> { }

        public class GetTransactionsSummaryResponse
        {
            public dynamic TransactionSummaryItems { get; set; }
        }

        public class GetTransactionsSummaryHandler : IAsyncRequestHandler<GetTransactionsSummaryRequest, GetTransactionsSummaryResponse>
        {
            public GetTransactionsSummaryHandler(TransactionServiceContext context)
            {
                _context = context;
            }

            public async Task<GetTransactionsSummaryResponse> Handle(GetTransactionsSummaryRequest request)
                => new GetTransactionsSummaryResponse()
                {
                    TransactionSummaryItems = _context
                    .Batches
                    .Include(x => x.Transactions)
                    .SelectMany(x => x.Transactions)
                    .GroupBy(x => x.Category)
                    .ToDictionary(r => r.Key, r => r.Sum(x => x.Spend))
                    .Select(x => new
                    {
                        Category = x.Key,
                        Spend = x.Value.ToString("C")
                    })
                    .ToList()
                };

            private readonly TransactionServiceContext _context;
        }
    }
}