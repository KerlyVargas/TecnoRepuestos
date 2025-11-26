let productos = [];
let contadorID = 1;

module.exports = {
  listar() {
    return productos;
  },

  obtener(id) {
    return productos.find(p => p.idProducto === id);
  },

  crear(producto) {
    const nuevo = {
      idProducto: contadorID++,
      nombre: producto.nombre,
      categoria: producto.categoria || "",
      precio: producto.precio || 0,
      stockMinimo: producto.stockMinimo || 0,
      stockActual: 0
    };
    productos.push(nuevo);
    return nuevo.idProducto;
  },

  actualizar(id, data) {
    const index = productos.findIndex(p => p.idProducto === id);
    if (index === -1) return false;

    productos[index] = { ...productos[index], ...data };
    return true;
  },

  eliminar(id) {
    const index = productos.findIndex(p => p.idProducto === id);
    if (index === -1) return false;

    productos.splice(index, 1);
    return true;
  }
};
