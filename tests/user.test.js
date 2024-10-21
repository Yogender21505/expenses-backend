const request = require('supertest');
const app = require('../app');

describe('User API', () => {
  it('should create a new user', async () => {
    const res = await request(app).post('/users').send({
      name: 'John Doe',
      email: 'john@example.com',
      mobile: '9876543210',
      password: 'password123',
    });
    expect(res.statusCode).toEqual(201);
  });
});
