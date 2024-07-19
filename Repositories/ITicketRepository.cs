using TicketTheaterProject.Models;
using System.Collections.Generic;

namespace TicketTheaterProject.Repositories
{
    public interface ITicketRepository
    {
        List<Ticket> GetAll();
        Ticket GetById(int id);
        void Add(Ticket ticket);
        void Update(Ticket ticket);
        void Delete(int id);
    }
}
