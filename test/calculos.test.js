const { calcularStockDisponible, calcularTotalCompra } = require('../src/utils/calculos');

test('calcularStockDisponible funciona', () => {
  expect(calcularStockDisponible(20, 5)).toBe(15);
});

test('calcularTotalCompra funciona', () => {
  const detalles = [
    { cantidad: 2, precioUnitario: 5 },
    { cantidad: 1, precioUnitario: 10 }
  ];

  expect(calcularTotalCompra(detalles)).toBe(20);
});

