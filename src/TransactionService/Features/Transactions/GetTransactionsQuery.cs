using MediatR;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Threading.Tasks;
using TransactionService.Data;

namespace TransactionService.Features.Transactions
{
    public class GetTransactionsQuery
    {
        public class GetTransactionsRequest : IRequest<GetTransactionsResponse> { }

        public class GetTransactionsResponse
        {
            public ICollection<TransactionApiModel> Transactions { get; set; } = new HashSet<TransactionApiModel>();
        }

        public class GetTransactionsHandler : IAsyncRequestHandler<GetTransactionsRequest, GetTransactionsResponse>
        {
            public GetTransactionsHandler(ITransactionServiceContext transactionServiceContext)
            {
                _transactionServiceContext = transactionServiceContext;
            }

            public async Task<GetTransactionsResponse> Handle(GetTransactionsRequest request)
            {
                var transactions = await _transactionServiceContext
                    .Batches
                    .Include(x => x.Transactions)
                    .SelectMany(x => x.Transactions)
                    .ToListAsync();
                
                return new GetTransactionsResponse()
                {
                    Transactions = transactions.Select(x => TransactionApiModel.FromTransaction(x)).ToList()
                };
            }

            protected readonly ITransactionServiceContext _transactionServiceContext;
        }
    }
}
