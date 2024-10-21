const request = require('supertest');
const app = require('../app');
const mongoose = require('mongoose');
const User = require('../models/User');
require('dotenv').config(); // Ensure dotenv is loaded

beforeAll(async () => {
  await mongoose.connect(process.env.MONGO_URI, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
  });
});

afterAll(async () => {
  await mongoose.connection.dropDatabase();
  await mongoose.connection.close();
});

describe('User API', () => {
  it('should create a new user', async () => {
    const res = await request(app).post('/users').send({
      name: 'John Doe',
      email: 'john@example.com',
      mobile: '9876543210',
      password: 'password123',
    });
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('_id');
  });

  it('should not create a user with an existing email', async () => {
    const res = await request(app).post('/users').send({
      name: 'Jane Doe',
      email: 'john@example.com', // Using the same email as before
      mobile: '0987654321',
      password: '1212',
    });
    expect(res.statusCode).toEqual(400);
    expect(res.body).toHaveProperty('error');
  });

  it('should retrieve user details', async () => {
    const user = await User.findOne({ email: 'john@example.com' });
    const res = await request(app).get(`/users/${user._id}`);
    expect(res.statusCode).toEqual(200);
    expect(res.body.name).toBe('John Doe');
  });
});
