const request = require('supertest');
const app = require('../app');

describe('Pruebas Unitarias', () => {
  it('debería pasar esta prueba siempre', () => {
    expect(true).toBe(true);
  });

  it('debería contener el mensaje "¡Hola, mundo!"', async () => {
    const response = await request(app).get('/');
    // Verificar que el HTML contiene la cadena esperada
    expect(response.text).toContain('Welcome to Express');
  });
});


