import Categories from "../models/Categories";
import * as Yup from "yup"
import User from "../models/User";

class CategoryController {
    async store(request, response) {

        const schema = Yup.object().shape({
            name: Yup.string().required()
        });

        try {
            schema.validateSync(request.body, { abortEarly: false })
        } catch (err) {
            return response.status(400).json({ error: err.errors })
        }

        const { admin: isAdmin } =  await User.findByPk(request.userId)
    
        if (!isAdmin) {
          return response.status(401).json()
        }

        const { name } = request.body

        const validateCategory = await Categories.findOne({
            where: {
                name,
            }
        });

        if (validateCategory) {
            return response.status(400).json({ error: "Category already exists" })
        }

        const category = await Categories.create({
            name
        })

        return response.json(category)
    }

    async index(request, response) {

        const categories = await Categories.findAll()
        return response.json(categories)

    }
}

export default new CategoryController()