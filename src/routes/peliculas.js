import { Router } from "express";
import _ from "underscore";
import DATA from "../data/index.json" assert { type: "json" };

//Get peliculas
const routerM = Router();

routerM.get("/peliculas", (req, res) => {
  res.json(DATA);
});

//-----------------------------------------------------
//post peliculas

routerM.post("/peliculas", (req, res) => {
  // Validar que los datos estén completos y sean correctos
  const { titulo, director, año, genero, duracion, imagen, rating } = req.body;

  // Si los datos están completos, se agrega la película al array de películas
  if (titulo && director && año && genero && duracion && imagen && rating) {
    const newMovie = {
      id: DATA.length + 1,
      ...req.body,
    };
    // Se agrega la nueva película al array de películas
    DATA.push(newMovie);
    res.json(DATA);
  } else {
    res.status(500).json({ error: "Faltan datos" });
  }
});

//-----------------------------------------------------
//delete peliculas

routerM.delete("/peliculas/:id", (req, res) => {
  // Se obtiene el id de la película a eliminar
  const { id } = req.params;
  // Se busca la película en el array de películas y se elimina
  if (id) {
    _.each(DATA, (pelicula, i) => {
      if (pelicula.id == id) {
        DATA.splice(i, 1);
      }
    });
    res.json(DATA);
  } else {
    res.status(500).json({ error: "pelicula no encontrada" });
  }
});

//-----------------------------------------------------
//update peliculas

routerM.put("/peliculas/:id", (req, res) => {
  const {id} = req.params
  
  const { titulo, director, año, genero, duracion, imagen, rating } = req.body;

  if (titulo && director && año && genero && duracion && imagen && rating) {
    _.each(DATA, (pelicula, i) => {
      if (pelicula.id == id) {
        pelicula.titulo = titulo;
        pelicula.director = director;
        pelicula.año = año;
        pelicula.genero = genero;
        pelicula.duracion = duracion;
        pelicula.imagen = imagen;
        pelicula.rating = rating;
      }
    });
    res.json(DATA);
  } else {
    res.status(500).json({ error: "Faltan datos" });
  }





});

export { routerM };
