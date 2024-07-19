using TicketTheaterProject.Models;
using TicketTheaterProject.Repositories;
using System.Collections.Generic;

namespace TicketTheaterProject.Services
{
    public class FoodService : IFoodService
    {
        private readonly IFoodItemRepository _foodItemRepository;

        public FoodService(IFoodItemRepository foodItemRepository)
        {
            _foodItemRepository = foodItemRepository;
        }

        public List<FoodItem> GetAllSold()
        {
            return _foodItemRepository.GetAll();
        }

        public FoodItem GetById(int id)
        {
            return _foodItemRepository.GetById(id);
        }

        public void Add(FoodItem foodItem)
        {
            _foodItemRepository.Add(foodItem);
        }

        public void Update(FoodItem foodItem)
        {
            _foodItemRepository.Update(foodItem);
        }

        public void Delete(int id)
        {
            _foodItemRepository.Delete(id);
        }
    }
}
