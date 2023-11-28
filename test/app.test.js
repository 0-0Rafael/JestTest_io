const request = require('supertest');
const app = require('../app');


describe('Pruebas Unitarias', () => {

  it('debería contener el mensaje "Welcome to Express"', async () => {
    const response = await request(app).get('/');
    
    expect(response.text).toContain('Welcome to Express');
  });

  
});


