import { Router } from "express";
import fetch from "node-fetch";

//Get peliculas
const routerUser = Router();

routerUser.get("/users", async (req, res) => {
  const respuesta = await fetch('https://jsonplaceholder.typicode.com/users')
  
  const users = await respuesta.json()
  res.json(users);
});

export { routerUser };