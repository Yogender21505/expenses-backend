const request = require('supertest');
const app = require('../app');
const mongoose = require('mongoose');
const Expense = require('../models/Expense');
const User = require('../models/User');
require('dotenv').config(); // Ensure dotenv is loaded

let userId;

beforeAll(async () => {
  await mongoose.connect(process.env.MONGO_URI, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
  });

  const user = new User({
    name: 'Jane Doe',
    email: 'jane@example.com',
    mobile: '0987654321',
    password: '1212',
  });
  const savedUser = await user.save();
  userId = savedUser._id;
});

afterAll(async () => {
  await mongoose.connection.dropDatabase();
  await mongoose.connection.close();
});

describe('Expense Model', () => {
  it('should create an expense with valid data', async () => {
    const expense = new Expense({
      payerId: userId,
      amount: 1000,
      participants: [
        { userId: userId, share: 500 },
        { userId: mongoose.Types.ObjectId(), share: 500 }, // Simulated second user
      ],
      splitMethod: 'equal',
    });

    const savedExpense = await expense.save();
    expect(savedExpense._id).toBeDefined();
    expect(savedExpense.amount).toBe(1000);
    expect(savedExpense.splitMethod).toBe('equal');
  });
});
