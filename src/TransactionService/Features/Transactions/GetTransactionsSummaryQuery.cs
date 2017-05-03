using MediatR;
using TransactionService.Data;

using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using System.Linq;
using System.Data.Entity;

namespace TransactionService.Features.Transactions
{
    public class GetTransactionsSummaryQuery
    {
        public class GetTransactionsSummaryRequest : IRequest<GetTransactionsSummaryResponse> { }

        public class GetTransactionsSummaryResponse
        {
            public ICollection<TransactionSummaryItemApiModel> TransactionSummaryItems { get; set; } = new HashSet<TransactionSummaryItemApiModel>();
        }

        public class GetTransactionsSummaryHandler : IAsyncRequestHandler<GetTransactionsSummaryRequest, GetTransactionsSummaryResponse>
        {
            public GetTransactionsSummaryHandler(TransactionServiceContext transactionServiceContext)
            {
                _transactionServiceContext = transactionServiceContext;
            }

            public async Task<GetTransactionsSummaryResponse> Handle(GetTransactionsSummaryRequest request)
            {
                var transactionSummaryItems = new List<TransactionSummaryItemApiModel>();

                var transactions = _transactionServiceContext
                    .Batches
                    .Include(x => x.Transactions)
                    .SelectMany(x => x.Transactions)
                    .GroupBy(x => x.Category)
                    .ToDictionary(r => r.Key,r => r.Sum(x => x.Spend));

                foreach (var transaction in transactions) {
                    transactionSummaryItems.Add(new TransactionSummaryItemApiModel()
                    {
                        Category = transaction.Key,
                        Spend = transaction.Value.ToString("C")
                    });
                }

                return new GetTransactionsSummaryResponse()
                {
                    TransactionSummaryItems = transactionSummaryItems
                };
            }

            private readonly TransactionServiceContext _transactionServiceContext;
        }

    }

}
