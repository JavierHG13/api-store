import { saveImage } from "../Middleware/Multer.js";
import Product from "../models/productos.model.js";



// Crear un nuevo producto
export const createProduct = async (req, res) => {
    try {
        console.log(req.body); // Verificar los datos recibidos

        const { nombre, descripcion, categoria, precio, genero, estilo, imagen1, imagen2, imagen3, video } = req.body;

        if (!nombre || !descripcion || !categoria || !genero || !estilo || !precio || !imagen1) {
            return res.status(400).json({ message: "Faltan campos obligatorios" });
        }

        const newProduct = new Product({
            nombre, descripcion, categoria, precio, genero, estilo, imagen1, imagen2,
            imagen3, video
        });

        await newProduct.save();

        res.status(201).json({ message: "Producto creado correctamente" });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error al crear el producto" });
    }
};


// Obtener todos los productos
export const getAllProducts = async (req, res) => {
    try {
        const products = await Product.find();

        res.status(200).json(products);

    } catch (error) {

        console.error(error);
        res.status(500).json({ message: "Error al obtener los productos" });
    }
};

//Obtener producto por id
export const getProductById = async (req, res) => {
    try {
        const { id } = req.params;

        const product = await Product.findById(id);

        if (!product) {
            return res.status(404).json({ message: "Producto no encontrado" });
        }

        res.status(200).json(product);

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error al obtener el producto" });
    }
};

//Actualizar por id
export const updateProductById = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedData = req.body;

        const updatedProduct = await Product.findByIdAndUpdate(id, updatedData, { new: true });

        if (!updatedProduct) {
            return res.status(404).json({ message: "Producto no encontrado" });
        }

        res.status(200).json({ message: "Producto actualizado correctamente", updatedProduct });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error al actualizar el producto" });
    }
};

//Eliminar producto por id
export const deleteProductById = async (req, res) => {
    try {
        const { id } = req.params;

        const deletedProduct = await Product.findByIdAndDelete(id);

        if (!deletedProduct) {
            return res.status(404).json({ message: "Producto no encontrado" });
        }

        res.status(200).json({ message: "Producto eliminado correctamente" });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error al eliminar el producto" });
    }
};

//Obtener productos por estilo
export const getProductsByStyle = async (req, res) => {
    try {
        const { estilo } = req.params

        const products = await Product.find({ estilo });

        if (products.length === 0) {
            return res.status(404).json({ message: "Sin productos que mostrar" });
        }

        res.status(200).json(products);
    } catch (error) 
    {
        console.error(error);
        res.status(500).json({ message: "Error al obtener los productos por estilo" });
    }
};


//Obtener por estilo y genero
export const getProductsByStyleAndGender = async (req, res) => {
    try {
        const { estilo, genero } = req.params;

        // Busca productos con los filtros dados
        const products = await Product.find({ estilo, genero });

        res.status(200).json(products);

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error al obtener los productos por estilo y género" });
    }
};
