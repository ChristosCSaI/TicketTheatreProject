using TicketTheaterProject.Models;
using System.Collections.Generic;

namespace TicketTheaterProject.Repositories
{
    public interface IFoodItemRepository
    {
        List<FoodItem> GetAll();
        FoodItem GetById(int id);
        void Add(FoodItem foodItem);
        void Update(FoodItem foodItem);
        void Delete(int id);
    }
}
