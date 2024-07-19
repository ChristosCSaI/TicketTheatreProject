using TicketTheaterProject.Models;
using System.Collections.Generic;

namespace TicketTheaterProject.Services
{
    public interface ITicketService
    {
        List<Ticket> GetAllSold();
        Ticket GetById(int id);
        void Add(Ticket ticket);
        void Update(Ticket ticket);
        void Delete(int id);
    }
}
