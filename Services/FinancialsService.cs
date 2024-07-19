using TicketTheaterProject.Repositories;
using TicketTheaterProject.Models;

namespace TicketTheaterProject.Services
{
    public class FinancialsService : IFinancialsService
    {
        private readonly ITicketRepository _ticketRepository;
        private readonly IFoodItemRepository _foodItemRepository;

        public FinancialsService(ITicketRepository ticketRepository, IFoodItemRepository foodItemRepository)
        {
            _ticketRepository = ticketRepository;
            _foodItemRepository = foodItemRepository;
        }

        public FinancialStats GetStats()
        {
            var tickets = _ticketRepository.GetAll();
            var foodItems = _foodItemRepository.GetAll();

            var averageTicketProfit = tickets.Average(t => t.ProfitPerItem);
            var averageFoodItemProfit = foodItems.Average(f => f.Profit);

            return new FinancialStats
            {
                AverageTicketProfit = averageTicketProfit,
                AverageFoodItemProfit = averageFoodItemProfit
            };
        }
    }
}
