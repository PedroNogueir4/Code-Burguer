import express from "express";
import routes from "./routes.js";
import Sequelize from "sequelize";
import configdb from "./config/database.js"

const app = express();
const sequelize = new Sequelize(configdb)

try {
  sequelize.authenticate()
  console.log('Sequelize conectado')
}
catch(error) {
console.log(error)
}

app.use(express.json());
app.use(express.urlencoded({ extended: false }))



app.use(routes);


export  {app,sequelize};
