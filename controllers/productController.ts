import { Request,Response } from 'express';
import Product from '../models/product';
import userRoutes from '../routes/userRoutes';


//endpoint
class ProductController {

  public async list (req:any,res:Response) {
      
    try {

      const products = await Product.findAll();

      const userAuthenticated = {
        uid: req.user.id,
        user_name: req.user.user_name
      }
            
      res.json({products,userAuthenticated})
    
  } catch (error) {
    
      res.status(500).json({
      msg: error.parent.sqlMessage
      })

  }


}

public async create (req: Request, res:Response) {

  const { body } = req;

  try {

    const checkproduct:any = await Product.findOne({where:{product_name:body.product_name}})
    
    if(checkproduct){
      return res.status(400).json({
        ok:false,
        msg:'Ya existe un producto con ese nombre.'
      })
    }

    const product = Product.build(body);

    //Crear producto

    await product.save();

    res.status(201).json(
      {
        ok:true,
        msg:'Producto creado con exito',
        product:product
      }
    );

  } catch (error) {
      res.status(500).json({
        ok:false,
        msg:'No se creo producto, campos invalidos.'
      })
  }

}

  public async getOne (req: any, res:Response) {

    try {
      const {id} = req.params;
      const product:any = await Product.findByPk(id);

      if(product){
        res.json({ok:true,product})
      }else{
        res.status(404).json({
          ok:false,
          msg:`el producto  no existe.`
        })
      }

    } catch (error) {
      res.status(500).json({
        ok:false,
        msg: error.parent.sqlMessage
      })
    }
  }





  public async delete (req:Request,res:Response){

    const { id } = req.params;

    try {

      const product = await Product.findByPk(id);

      if (!product) {
        return res.status(404).json({
          ok:false,
          msg: `el producto no existe.`
        })
      }

      await product.destroy();

      res.json({ok:true,msg:'producto eliminado.'});

    } catch (error) {

      res.status(500).json({
        ok:false,
        msg: error.parent.sqlMessage
      })

    }
 }

  public async update (req:Request,res:Response){
    const { id } = req.params;
    const { body } = req;

    try {

      const product = await Product.findByPk(id);

      if (!product) {
        return res.status(404).json({
          ok:false,
          msg: `el usuario no existe.`
        })
      }


      await product.update(body);

      res.json({ ok: true, msg: 'producto acutalizado.',product});

    } catch (error) {

      res.status(500).json({
        ok:false,
        msg: error.parent.sqlMessage
      })

    }
  }
   

}

export const productController = new ProductController();