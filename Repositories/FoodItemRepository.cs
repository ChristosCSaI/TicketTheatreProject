using TicketTheaterProject.Data;
using TicketTheaterProject.Models;
using System.Collections.Generic;
using System.Linq;

namespace TicketTheaterProject.Repositories
{
    public class FoodItemRepository : IFoodItemRepository
    {
        private readonly AppDbContext _context;

        public FoodItemRepository(AppDbContext context)
        {
            _context = context;
        }

        public List<FoodItem> GetAll()
        {
            return _context.FoodItems.ToList();
        }

        public FoodItem GetById(int id)
        {
            return _context.FoodItems.Find(id);
        }

        public void Add(FoodItem foodItem)
        {
            _context.FoodItems.Add(foodItem);
            _context.SaveChanges();
        }

        public void Update(FoodItem foodItem)
        {
            _context.FoodItems.Update(foodItem);
            _context.SaveChanges();
        }

        public void Delete(int id)
        {
            var foodItem = _context.FoodItems.Find(id);
            if (foodItem != null)
            {
                _context.FoodItems.Remove(foodItem);
                _context.SaveChanges();
            }
        }
    }
}
