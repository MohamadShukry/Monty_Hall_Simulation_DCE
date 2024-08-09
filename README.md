# Monty_Hall_Simulation_DCE

This repository contains a web application that simulates the Monty Hall problem, a probability puzzle based on the classic game show "Let's Make a Deal." This application aims to demonstrate the counterintuitive nature of the Monty Hall problem and provide a tool to simulate the results of multiple games.


## Application Features

Simulate the Monty Hall problem: Users can simulate a given number of games and choose whether or not to switch doors.
Backend: Developed using C# / .NET Core web API, the backend handles the simulation logic and returns the results to the frontend.
Frontend: Built with Angular, the frontend allows users to enter the number of simulations, choose whether to switch doors, and visualize the results as well as user can play the Monty Hall game too.


## Project Structure

Backend: The backend is developed using C# / .NET Core Web API and includes the logic for simulating the Monty Hall games. The results are returned.
Frontend: The frontend is developed using Angular 15 and includes a user interface for entering simulation parameters and displaying results using a pie chart.


## Testing

### Backend Testing

Postman: The backend API was tested using Postman to verify that it correctly handles the POST requests for simulations. The tests ensured that the API returned the expected JSON response with simulation results.

Swagger: Swagger was used to test and document the API endpoints. You can access the Swagger UI by running the backend and navigating to http://localhost:7056/ swagger in my browser. This allows me to interact with the API directly from the browser and view the API documentation.


### Frontend Testing

Angular Unit Tests: Angular unit tests are included for the components. I run these tests using the Angular CLI




## Versions

.NET Core: 7.0

Angular: 15.0

Node.js: 16.18.1

npm: 9.2.0

Postman: 10.23.5

Swagger: Integrated with .NET Core  project
