
import { Sequelize, Op, Model, DataTypes } from "sequelize";
const sequelize = new Sequelize("sqlite::memory:");


class User extends Model { }
User.init({
    name: Sequelize.STRING,
    email: Sequelize.STRING,
    password_hash: Sequelize.STRING,
    admin: Sequelize.BOOLEAN
},{
    sequelize,
    modelName:"User"
})
 
export default User