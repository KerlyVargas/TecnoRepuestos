const request = require('supertest');
const app = require('../src/app');

describe("Prueba de integración: creación de producto", () => {

  test("POST /api/productos debe crear un producto correctamente", async () => {

    const nuevoProducto = {
      nombre: "Batería Samsung",
      categoria: "Repuestos",
      precio: 12.50,
      stockMinimo: 3
    };

    const response = await request(app)
      .post('/api/productos')
      .send(nuevoProducto);

    // Validaciones
    expect(response.statusCode).toBe(201);
    expect(response.body).toHaveProperty("idProducto");
    expect(response.body.mensaje).toBe("Producto creado");
  });

});

