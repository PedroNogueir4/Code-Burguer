import * as Yup from "yup"
import User from "../models/User";

class UserController {
    async store(request, response) {

        const userSchema = Yup.object().shape({
            name: Yup.string().required(),
            email: Yup.string().email().required(),
            password: Yup.string().required().min(6),
            admin: Yup.boolean()
        })

        try {
            await userSchema.validateSync(request.body, { abortEarly: false })
        } catch (error) {
            return response.status(400).json({ error: error.errors })
        }


        const { name, email, password, admin } = request.body


        const emailExits = await User.findOne({
            where: { email }
        })

        if (emailExits) {
            return response.status(400).json({ error: "User already exists" })
        }


        const user = await User.create({
            name,
            email,
            password,
            admin,
        })

        return response.status(201).json({ id: user.id, name, email, admin })
    }
}

export default new UserController()