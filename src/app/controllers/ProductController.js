import * as Yup from "yup";
import Products from "../models/Products";
import Categories from "../models/Categories";
class ProductController {
    async store(request, response) {

        const schema = Yup.object().shape({
            name: Yup.string().required(),
            price: Yup.number().required(),
            category_id: Yup.number().required()
        });

        try {
            schema.validateSync(request.body, { abortEarly: false })
        } catch (error) {
            return response.status(400).json({ error: error.errors })
        };

        const { filename: path } = request.file
        const { name, price, category_id } = request.body

        const product = await Products.create({
            name,
            price,
            category_id,
            path
        });


        return response.json(product)
    }

    async index(request, response) {

        const products = await Products.findAll({
            include: [{
                model: Categories,
                as: 'category',
                attributes: ['name']
            },
            ],
        })
        return response.json(products)

    }
}

export default new ProductController()