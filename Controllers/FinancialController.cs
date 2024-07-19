using Microsoft.AspNetCore.Mvc;
using TicketTheaterProject.Services;
using TicketTheaterProject.Models;

namespace TicketTheaterProject.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class FinancialController : ControllerBase
    {
        private readonly IFinancialsService _financialsService;

        public FinancialController(IFinancialsService financialsService)
        {
            _financialsService = financialsService;
        }

        [HttpGet]
        public ActionResult<FinancialStats> GetStats()
        {
            var stats = _financialsService.GetStats();
            return Ok(stats);
        }
    }
}
