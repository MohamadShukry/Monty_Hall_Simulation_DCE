using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
namespace MontyHallSimulation_backend.Controllers
{

    [ApiController]
    [Route("api/[controller]")]
    public class SimulationController : ControllerBase
    {
        [HttpPost("run")]
        public IActionResult RunSimulation([FromBody] SimulationRequest request)
        {
            if (request.NumberOfSimulations <= 0)
            {
                return BadRequest("Number of simulations must be greater than zero.");
            }

            var wins = 0;
            var random = new Random();

            for (int i = 0; i < request.NumberOfSimulations; i++)
            {
               
                var carDoor = random.Next(3);
                var playerChoice = random.Next(3);

               
                if (request.SwitchDoor)
                {
                  
                    var shownGoatDoor = GetGoatDoor(random, carDoor, playerChoice);
                    playerChoice = GetRemainingDoor(playerChoice, shownGoatDoor);
                }

                
                if (playerChoice == carDoor)
                {
                    wins++;
                }
            }

            return Ok(new SimulationResult
            {
                TotalGames = request.NumberOfSimulations,
                Wins = wins,
                Losses = request.NumberOfSimulations - wins
            });
        }

        private int GetGoatDoor(Random random, int carDoor, int playerChoice)
        {
            int shownGoatDoor;
            do
            {
                shownGoatDoor = random.Next(3);
            } while (shownGoatDoor == carDoor || shownGoatDoor == playerChoice);

            return shownGoatDoor;
        }

        private int GetRemainingDoor(int playerChoice, int shownGoatDoor)
        {
            
            return 3 - playerChoice - shownGoatDoor;
        }
    }

    public class SimulationRequest
    {
        public int NumberOfSimulations { get; set; }
        public bool SwitchDoor { get; set; }
    }

    public class SimulationResult
    {
        public int TotalGames { get; set; }
        public int Wins { get; set; }
        public int Losses { get; set; }
    }
}





