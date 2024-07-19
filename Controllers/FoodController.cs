using Microsoft.AspNetCore.Mvc;
using TicketTheaterProject.Services;
using TicketTheaterProject.Models;
using System.Collections.Generic;

namespace TicketTheaterProject.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class FoodController : ControllerBase
    {
        private readonly IFoodService _foodService;

        public FoodController(IFoodService foodService)
        {
            _foodService = foodService;
        }

        [HttpGet]
        public ActionResult<IEnumerable<FoodItem>> GetAll()
        {
            var foodItems = _foodService.GetAllSold();
            return Ok(foodItems);
        }

        [HttpGet("{id}")]
        public ActionResult<FoodItem> GetById(int id)
        {
            var foodItem = _foodService.GetById(id);
            if (foodItem == null)
            {
                return NotFound();
            }
            return Ok(foodItem);
        }

        [HttpPost]
        public ActionResult<FoodItem> Create(FoodItem foodItem)
        {
            _foodService.Add(foodItem);
            return CreatedAtAction(nameof(GetAll), new { id = foodItem.ID }, foodItem);
        }

        [HttpPut("{id}")]
        public IActionResult Update(int id, FoodItem foodItem)
        {
            if (id != foodItem.ID)
            {
                return BadRequest();
            }

            _foodService.Update(foodItem);

            return NoContent();
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var foodItem = _foodService.GetById(id);
            if (foodItem == null)
            {
                return NotFound();
            }

            _foodService.Delete(id);

            return NoContent();
        }
    }
}
