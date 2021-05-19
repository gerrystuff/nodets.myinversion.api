import { Request,Response } from 'express';
import  bcrypt  from 'bcryptjs';
import User from '../models/user';

//endpoint
class UserController {

  public async list (req:any,res:Response) {
    

    try {

        const users = await User.findAll();
        const userAuth = req.user;
        res.json({users,userAuth})
      
    } catch (error) {
      
        res.status(500).json({
        msg: error.parent.sqlMessage
        })

    }
  
}
  public async create (req: Request, res:Response) {

    const { body } = req; 

    try {

        const user:any =  User.build(body);

        //Encriptacion de contraseña

        const salt = bcrypt.genSaltSync();
        user.user_password = bcrypt.hashSync(body.user_password,salt);

        await user.save();
        
        res.json(user);

    } catch (error) {
    
        res.status(500).json({
        msg: error.parent.sqlMessage
        })
      
    }

}

  public async getOne (req: Request, res:Response) {

      const { id } = req.params;
      const user = await User.findByPk(id);

    if(user)
      res.json(user)
    else 
      res.status(404).json({
        msg: `the user with the id: ${id} does not exist.`
    })
  }





  public async delete (req:Request,res:Response){
   
    const { id } = req.params;

    try {

      const user = await User.findByPk(id);

      if(!user){
        return res.status(404).json({
          msg: `the user with the id: ${id} does not exist.`
        })
      }

      await user.destroy();
      
      res.json(user);

  } catch (error) {
  
      res.status(500).json({
      msg: error.parent.sqlMessage
      })
    
  }

 }

  public async update (req:Request,res:Response){

    const { id }  = req.params;
    const { body } = req; 

    try {

        const user = await User.findByPk(id);

        if(!user){
          return res.status(404).json({
            msg: `the user with the id: ${id} does not exist.`
          })
        }
        

       await user.update(body);
      
       res.json(user);

    } catch (error) {
    
        res.status(500).json({
        msg: error.parent.sqlMessage
        })
      
    }
}

}
export const userController = new UserController();