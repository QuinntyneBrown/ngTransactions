using MediatR;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;
using TransactionService.Features.Transactions.UploadHandlers;

using static TransactionService.Features.Transactions.UploadTransactionsCommand;
using static TransactionService.Features.Transactions.GetTransactionsQuery;
using static TransactionService.Features.Transactions.GetTransactionsSummaryQuery;
using System.Web.Http.Description;

namespace TransactionService.Features.Transactions
{
    [RoutePrefix("api/transactions")]
    public class TransactionsController : ApiController
    {
        public TransactionsController(IMediator mediator)
        {
            _mediator = mediator;
        }

        [Route("upload")]
        [HttpPost]
        public async Task<IHttpActionResult> Upload() {

            if (!Request.Content.IsMimeMultipartContent("form-data"))
                throw new HttpResponseException(HttpStatusCode.BadRequest);

            var provider = await Request.Content.ReadAsMultipartAsync(new InMemoryMultipartFormDataStreamProvider());

            return Ok(await _mediator.Send(new UploadTransactionsRequest() { Provider = provider }));            
        }

        [Route("get")]
        [HttpGet]
        [ResponseType(typeof(GetTransactionsResponse))]
        public async Task<IHttpActionResult> Get()
            => Ok(await _mediator.Send(new GetTransactionsRequest()));

        [Route("getSummary")]
        [HttpGet]
        [ResponseType(typeof(GetTransactionsSummaryResponse))]
        public async Task<IHttpActionResult> GetSummary()
            => Ok(await _mediator.Send(new GetTransactionsSummaryRequest()));

        protected readonly IMediator _mediator;
    }
}
