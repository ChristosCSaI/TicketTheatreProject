# Ticket Theatre Project

This project is a web application for managing and tracking sales and profits at a local movie theatre. The application is built using ASP.NET Core for the backend and React for the frontend. It follows the Repository-Service pattern and demonstrates dependency injection.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

## Features

- Display food items sold
- Display tickets sold
- Generate and display financial statistics
- Create, update, and delete food items
- Create, update, and delete tickets

## Technologies Used

- Backend: ASP.NET Core
- Frontend: React
- Database: SQL Server
- Entity Framework Core
- Material-UI for React components

## Installation

### Prerequisites

- [.NET 7 SDK](https://dotnet.microsoft.com/download/dotnet/7.0)
- [Node.js and npm](https://nodejs.org/)
- [SQL Server](https://www.microsoft.com/en-us/sql-server/sql-server-downloads)

### Backend Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/ChristosCSaI/TicketTheatreProject.git
   cd TicketTheaterProject

   cd TicketTheaterProject
    dotnet restore

 in appsetting.json=>   "ConnectionStrings": {
  "DefaultConnection": "Server=YOUR_SERVER_NAME;Database=TicketTheatreDB;Trusted_Connection=True;"
}

dotnet ef database update

dotnet run

### Frontend Setup

cd ticket-theater-frontend

npm install

npm start





