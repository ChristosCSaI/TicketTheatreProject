using TicketTheaterProject.Models;
using System.Collections.Generic;

namespace TicketTheaterProject.Services
{
    public interface IFoodService
    {
        List<FoodItem> GetAllSold();
        FoodItem GetById(int id);
        void Add(FoodItem foodItem);
        void Update(FoodItem foodItem);
        void Delete(int id);
    }
}
