const service = require('../services/productos.service');

exports.listarProductos = (req, res) => {
  res.json(service.listar());
};

exports.obtenerProducto = (req, res) => {
  const producto = service.obtener(Number(req.params.id));
  if (!producto) return res.status(404).json({ mensaje: "No encontrado" });
  res.json(producto);
};

exports.crearProducto = (req, res) => {
  const id = service.crear(req.body);
  res.status(201).json({ mensaje: "Producto creado", idProducto: id });
};

exports.actualizarProducto = (req, res) => {
  const ok = service.actualizar(Number(req.params.id), req.body);
  if (!ok) return res.status(404).json({ mensaje: "No encontrado" });
  res.json({ mensaje: "Producto actualizado" });
};

exports.eliminarProducto = (req, res) => {
  const ok = service.eliminar(Number(req.params.id));
  if (!ok) return res.status(404).json({ mensaje: "No encontrado" });
  res.json({ mensaje: "Producto eliminado" });
};

