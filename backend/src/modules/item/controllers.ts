import { Request, Response } from 'express';
import ProductService from './services';
import multer from 'multer';
import ItemService from './services';

const ItemController = {

  
  async getAllItems(req: Request, res: Response) {
    try {
      const products = await ItemService.getAllItems();
      res.json(products);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  },
  /* async createProduct(req: Request, res: Response): Promise<Response> {
    try {
      const { name, subcategoryId, type, language, region, date, price, description } = req.body;

    // Get the uploaded image file
    const imageurl = req.file;
console.log(imageurl)
    // Create a new product instance
    const productData = {
      name,
      subcategoryId,
      type,
      language,
      region,
      date,
      price,
      description,
      imageurl: imageurl ? imageurl.filename : undefined,
    };
console.log(productData);
    // Create the product
    const createdProduct = await ProductService.createProduct(productData);
  return res.status(201).json(createdProduct);
    } catch (error) {
      console.error(error); // Log the error message to the console
    return res.status(500).json({ error: 'Failed to create product' });
    }
  },*/

};

export default ItemController;