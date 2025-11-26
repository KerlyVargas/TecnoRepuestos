function calcularStockDisponible(stockActual, stockMinimo) {
  return stockActual - stockMinimo;
}

function calcularTotalCompra(detalles) {
  return detalles.reduce(
    (t, item) => t + item.cantidad * item.precioUnitario,
    0
  );
}

module.exports = {
  calcularStockDisponible,
  calcularTotalCompra
};
