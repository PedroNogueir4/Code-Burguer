import { Router } from "express";
import User from "./app/models/User";
import { v4 } from "uuid";

const routes = new Router();

routes.get("/", (request, response) => {

  const user = User.create({
    id: v4(),
    name: "Pedro",
    email: "pedroffn2@gmail.com",
    password_hash: "12344fe",
    admin:true

  })

  return response.json(user);
});

export default routes;
