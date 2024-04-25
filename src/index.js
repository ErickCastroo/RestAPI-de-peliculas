import express from "express";
import morgan from "morgan";
import { router } from "./routes/index.js";
import {routerM} from './routes/peliculas.js';
import {routerUser} from './routes/users.js';

const app = express();

//settings
app.set("puerto", process.env.PORT || '3000');
app.set("json spaces", 2);

//middelewares
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes
app.use(router);
app.use('/api', routerM);
app.use('/api', routerUser);

//server
app.listen(app.get('puerto'), () => {
  console.log(`Servidor listo en el puerto ${app.get('puerto')}`);
});
