import Sequelize from "sequelize";
import configDataBase from "../config/database";

import User from "../app/models/User";
import Products from "../app/models/Products";
import Categories from "../app/models/Categories";

const models = [User,Products,Categories]
class Database {
    constructor() {
        this.init()
    }

    init() {
        this.connection = new Sequelize(configDataBase)
        models.map((model) => model.init(this.connection))
    }

}

export default new Database()