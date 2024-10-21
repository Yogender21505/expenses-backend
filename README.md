# Daily Expenses Sharing Application

## Overview
The Daily Expenses Sharing Application allows users to manage their expenses effectively by adding expenses and splitting them based on various methods (equal, exact, and percentage). This backend service is built using Node.js, Express, and MongoDB, ensuring a robust and scalable solution for expense management.

## Features
- User management with registration and retrieval of user details
- Expense management with options to add expenses and split them:
  - **Equal split**: Expenses are divided equally among participants.
  - **Exact split**: Each participant can specify the exact amount they owe.
  - **Percentage split**: Each participant can specify what percentage of the total amount they owe (total percentages must equal 100%).
- Downloadable balance sheets showing individual and overall expenses.

## Technologies Used
- Node.js
- Express.js
- MongoDB (with Mongoose)
- dotenv for environment variable management
- nodemon for development environment
## Screenshots

<div style="display: flex; flex-wrap: wrap; justify-content: space-around;">
    <div style="margin: 10px; text-align: center;">
        <h4>Databases</h4>
        <img src="https://github.com/user-attachments/assets/81927567-94c9-4f44-8e9f-cb8441e70482" alt="Databases" style="width: 300px; height: 200px; object-fit: cover;">
    </div>
    <div style="margin: 10px; text-align: center;">
        <h4>Users DB</h4>
        <img src="https://github.com/user-attachments/assets/ba821653-4f40-4f78-b1c5-79635d0a294f" alt="Users DB" style="width: 300px; height: 200px; object-fit: cover;">
    </div>
    <div style="margin: 10px; text-align: center;">
        <h4>Expenses DB</h4>
        <img src="https://github.com/user-attachments/assets/17ff291f-4de7-4198-bf2c-8ca07687c52a" alt="Expenses DB" style="width: 300px; height: 200px; object-fit: cover;">
    </div>
    <div style="margin: 10px; text-align: center;">
        <h4>Server</h4>
        <img src="https://github.com/user-attachments/assets/cdc6c41a-896c-49a3-a841-afc69f2cb419" alt="Server" style="width: 300px; height: 200px; object-fit: cover;">
    </div>
    <div style="margin: 10px; text-align: center;">
        <h4>Users</h4>
        <img src="https://github.com/user-attachments/assets/e1ec1406-bcd3-4987-a374-03817fb6f226" alt="Users" style="width: 300px; height: 200px; object-fit: cover;">
    </div>
    <div style="margin: 10px; text-align: center;">
        <h4>Expenses</h4>
        <img src="https://github.com/user-attachments/assets/503d4f61-0b8b-4022-8c7b-5cbcefaa7b82" alt="Expenses" style="width: 300px; height: 200px; object-fit: cover;">
    </div>
</div>



## Getting Started

### Prerequisites
- Node.js (v12 or higher)
- MongoDB (locally installed or use a MongoDB Atlas account)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Yogender21505/expenses-backend.git
   cd expenses-backend
   ```
2. **Install dependencies**
   ```bash
   npm install
   ```
3. **Set up environment variables**
   - Create a .env file in the root directory of the project.
   - Add your MongoDB connection URI and optionally, a PORT:
     ```bash
     MONGO_URI=mongodb://localhost:27017/expenses
     PORT=3000
     ```
4. **Start the application**
   ```bash
   npm run dev
   ```
### API Endpoints

**User Endpoints**
   - Create User
     - POST /users
     - Request Body:
       ```bash
       {
          "name": "John Doe",
          "email": "john@example.com",
          "mobile": "1234567890",
          "password": "yourpassword"
        }
       ```
     - Response:
       ```bash
       {
          "message": "User created successfully!"
       }
       ```
   - Retrieve User Details
     - GET /users/:id
**Expense Endpoints**
   - Add Expense
     - POST /expenses
     - Request Body:
       ```bash
       {
          "payerId": "6715f4959f7e5f01f31c17fb",
          "amount": 1000,
          "participants": [
            { "userId": "6715f4959f7e5f01f31c17fb", "share": 50 },
            { "userId": "6715f65a9f7e5f01f31c1802", "share": 50 }
          ],
          "splitMethod": "percentage"
        }
       ```
     - Response:
       ```bash
       {
          "message": "Expense added successfully!"
       }
       ```
   - Retrieve Individual User Expenses
     - GET /expenses/:userId
   - Retrieve Overall Expenses
     - GET /expenses
   - Download Balance Sheet
     - GET /expenses/balance-sheet
### Validation

- The application validates user inputs and ensures that:
  -All required fields are present.
  -For percentage splits, the total percentage of shares equals 100%.
  -Exact shares match the total amount when using the exact split method.
### Running Tests

- Ensure to implement and run unit tests and integration tests for the application.
- You can add your test scripts in the package.json file.
