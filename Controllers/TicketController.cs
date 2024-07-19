using Microsoft.AspNetCore.Mvc;
using TicketTheaterProject.Services;
using TicketTheaterProject.Models;
using System.Collections.Generic;

namespace TicketTheaterProject.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class TicketController : ControllerBase
    {
        private readonly ITicketService _ticketService;

        public TicketController(ITicketService ticketService)
        {
            _ticketService = ticketService;
        }

        [HttpGet]
        public ActionResult<IEnumerable<Ticket>> GetAll()
        {
            var tickets = _ticketService.GetAllSold();
            return Ok(tickets);
        }

        [HttpGet("{id}")]
        public ActionResult<Ticket> GetById(int id)
        {
            var ticket = _ticketService.GetById(id);
            if (ticket == null)
            {
                return NotFound();
            }
            return Ok(ticket);
        }

        [HttpPost]
        public ActionResult<Ticket> Create(Ticket ticket)
        {
            _ticketService.Add(ticket);
            return CreatedAtAction(nameof(GetAll), new { id = ticket.ID }, ticket);
        }

        [HttpPut("{id}")]
        public IActionResult Update(int id, Ticket ticket)
        {
            if (id != ticket.ID)
            {
                return BadRequest();
            }

            _ticketService.Update(ticket);

            return NoContent();
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var ticket = _ticketService.GetById(id);
            if (ticket == null)
            {
                return NotFound();
            }

            _ticketService.Delete(id);

            return NoContent();
        }
    }
}
