using TicketTheaterProject.Models;
using TicketTheaterProject.Repositories;
using System.Collections.Generic;

namespace TicketTheaterProject.Services
{
    public class TicketService : ITicketService
    {
        private readonly ITicketRepository _ticketRepository;

        public TicketService(ITicketRepository ticketRepository)
        {
            _ticketRepository = ticketRepository;
        }

        public List<Ticket> GetAllSold()
        {
            return _ticketRepository.GetAll();
        }

        public Ticket GetById(int id)
        {
            return _ticketRepository.GetById(id);
        }

        public void Add(Ticket ticket)
        {
            _ticketRepository.Add(ticket);
        }

        public void Update(Ticket ticket)
        {
            _ticketRepository.Update(ticket);
        }

        public void Delete(int id)
        {
            _ticketRepository.Delete(id);
        }
    }
}
