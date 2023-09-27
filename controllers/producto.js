const { response } = require("express");

const Producto = require("../models/producto");

const productoGet = async (req, res = response) => {
  const productos = await Producto.find();
  res.json({
    productos
  });
};

const productoPost = async (req, res) => {
  const body = req.body;
  let mensaje = "Producto creado.";

  try {
    const producto = new Producto(body);
    await producto.save();
  } catch (error) {
    mensaje = "Problemas al crear el producto.";
    console.log(error);
  }
  res.json({
    msg: mensaje,
  });

}
const productoPut = async (req, res) => {
  const { _id, producto, cantidad, cliente, precio } = req.body;
  let mensaje = "Producto modificado exitosamente.";

  try {
    await Producto.findOneAndUpdate({ _id: _id }, { producto: producto, cantidad: cantidad, cliente: cliente, precio: precio });
  } catch (error) {
    mensaje = "Problemas al modificar.";
    console.log(error);
  }
  res.json({
    msg: mensaje
  });
};

const productoDelete = async (req, res = response) => {
  const { _id } = req.body;
  let mensaje = "Producto eliminado.";
  try {
    await Producto.deleteOne({ _id: _id });
  } catch (error) {
    mensaje = "Problemas al eliminar.";
    console.log(error);
  }
  res.json({
    msg: mensaje,
  });
};

module.exports = { productoGet, productoPost, productoPut, productoDelete };