const request = require('supertest');
const app = require('../app');


// Cambia el contenido esperado para que la prueba falle
it('debería contener el mensaje "¡Hola, mundo!"', async () => {
  const response = await request(app).get('/');
  // Cambia la cadena esperada a algo que no esté en la respuesta real
  expect(response.text).toContain('Mensaje Inesperado');
});


/*
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
*/

