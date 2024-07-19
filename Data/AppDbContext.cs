using Microsoft.EntityFrameworkCore;
using TicketTheaterProject.Models;

namespace TicketTheaterProject.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {
        }

        public DbSet<FoodItem> FoodItems { get; set; } = null!;
        public DbSet<Ticket> Tickets { get; set; } = null!;
    }
}
