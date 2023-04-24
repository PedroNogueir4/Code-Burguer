
import User from "../models/User";

class UserController {
    async store(request, response) {

        const { name, email, password_hash, admin } = request.body
        console.log(request.body)

        const user = await User.create({
            name,
            email,
            password_hash,
            admin,
        })

        return response.status(201).json(user)
    }
}

export default new UserController()