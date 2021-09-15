const Product = require("../models/Product");

exports.crearProduct = async (req, res) => {
  try {
      let product;
      product = new Product(req.body);
      await product.save();
      res.send(product);
  } catch (error) {
      console.log(error);
      res.status(500).send('Hubo un error');
  }
}

exports.obtenerProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products) 
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.actualizarProduct = async (req, res) => {
    try {
        const { nombre, categoria, ubicacion, precio } = req.body;
        let product = await Product.findById(req.params.id);

        if(!product) {
            res.status(404).json({ msg: 'No existe el product'})
        }

        product.nombre = nombre;
        product.categoria = categoria;
        product.ubicacion = ubicacion;
        product.precio = precio;

        product = await Product.findOneAndUpdate({ _id:req.params.id},product, { new:true })
        res.json(product)
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.obtenerProduct = async (req, res) => {
    try {
        let product = await Product.findById(req.params.id);
        if(!product) {
            res.status(404).json({ msg: 'No existe el product'})
        }
        res.json(product)
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.eliminarProduct = async (req, res) => {
    try {
        let product = await Product.findById(req.params.id);
        if(!product) {
            res.status(404).json({ msg: 'No existe el product'})
        }
        await Product.findOneAndRemove({ _id:req.params.id })
        res.json({ msg: 'Product eliminado con éxito!' })
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}