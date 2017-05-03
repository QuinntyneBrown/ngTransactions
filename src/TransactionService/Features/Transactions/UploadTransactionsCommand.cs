using MediatR;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Globalization;
using System.IO;
using System.Threading.Tasks;
using TransactionService.Data;
using TransactionService.Data.Model;
using TransactionService.Features.Transactions.UploadHandlers;

namespace TransactionService.Features.Transactions
{
    public class UploadTransactionsCommand
    {
        public class UploadTransactionsRequest : IRequest<UploadTransactionsResponse>
        {
            public InMemoryMultipartFormDataStreamProvider Provider { get; set; }
        }

        public class UploadTransactionsResponse
        {
            public ICollection<TransactionApiModel> Transactions { get; set; } = new HashSet<TransactionApiModel>();
        }

        public class UploadTransactionsHandler : IAsyncRequestHandler<UploadTransactionsRequest, UploadTransactionsResponse>
        {
            public UploadTransactionsHandler(ITransactionServiceContext transactionServiceContext)
            {
                _transactionServiceContext = transactionServiceContext;
            }

            public async Task<UploadTransactionsResponse> Handle(UploadTransactionsRequest request)
            {
                var response = new UploadTransactionsResponse();

                foreach (var file in request.Provider.Files)
                {                    
                    var filename = new FileInfo(file.Headers.ContentDisposition.FileName.Trim(new char[] { '"' })
                        .Replace("&", "and")).Name;

                    var batch = await _transactionServiceContext.Batches
                        .Include(x => x.Transactions)
                        .SingleOrDefaultAsync(x => x.Filename == filename);

                    if (batch == null) {
                        batch = new Batch() { Filename = filename };
                        _transactionServiceContext.Batches.Add(batch);
                    }

                    batch.Transactions.Clear();

                    var stream = await file.ReadAsStreamAsync();
                    
                    using (var streamReader = new StreamReader(stream))
                    {                        
                        string line;
                        var isFirstLine = true;
                        while ((line = streamReader.ReadLine()) != null)
                        {
                            if (!isFirstLine)
                            {
                                var transaction = Transaction.FromTransactionFileLine(line);
                                if(transaction != null)
                                    batch.Transactions.Add(transaction);
                            }
                            isFirstLine = false;
                        }
                    }                
                }

                await _transactionServiceContext.SaveChangesAsync();
                return response;
            }

            protected readonly ITransactionServiceContext _transactionServiceContext;
        }

    }

}
