import categorias from "./categorias.js";
import precios from "./precios.js";
import usuarios from "./usuarios.js";
import db from "../config/db.js";
import { Precio, Categoria, Usuario } from '../models/index.js'

const importarDatos = async () => {
  try {
    // Autenticar
    await db.authenticate()

    // Generar las columnas
    await db.sync()

    // Insertar los datos
    /*await Categoria.bulkCreate(categorias)
    await Precio.bulkCreate(precios)*/

    await Promise.all([
      Categoria.bulkCreate(categorias),
      Precio.bulkCreate(precios),
      Usuario.bulkCreate(usuarios)
    ])

    console.log("Datos importados correctamente")
    exit()
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
}

const eliminarDatos = async () => {
  try {
    /*await Promise.all([
      Categoria.destroy({where:{}, truncate: true}),
      Precio.destroy({where:{}, truncate: true})
    ])*/
    await db.sync({force: true})
    console.log("Datos eliminados correctamente")
    exit()
  } catch (error) {
    console.log(error)
  }
}

if(process.argv[2] === "-i"){
  importarDatos()
}

if(process.argv[2] === "-e"){
  eliminarDatos()
}