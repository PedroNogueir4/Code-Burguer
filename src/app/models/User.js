import bcrypt from "bcrypt"
import Sequelize, { Model } from "sequelize";

class User extends Model {
    static init(sequelize) {
        super.init(
            {
                name: Sequelize.STRING,
                email: Sequelize.STRING,
                password: Sequelize.VIRTUAL,
                password_hash: Sequelize.STRING,
                admin: Sequelize.BOOLEAN
            },
            {
                sequelize,
            }
        )

        this.addHook('beforeSave', async (userData) => {
            if (userData.password) {
                userData.password_hash = await bcrypt.hash(userData.password, 10)
            }

        })
    }
}

export default User