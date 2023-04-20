import { v4 } from "uuid";
import User from "../models/User.js";

class UserController {
       async store(request, response) {

        const { name, email, password_hash, admin } = request.body
        
        return  User.create({
            id: v4(),
            name,
            email,
            password_hash,
            admin,
        }).then(data=>{
            console.log(data)
            response.status(200).json(data)
        })
        .catch(error=>{
            console.log(error)
            response.status(400).json(error)
        })

       
   }
}

export default new UserController()