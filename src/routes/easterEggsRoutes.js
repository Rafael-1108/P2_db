import { Router } from "express";
import * as EasterEggController from './../controllers/easterEggsControllers.js'

const router = Router();

//Rota GetAll em /
router.get("/", EasterEggController.listarTodos);
//Rota GetById
router.get("/:id", EasterEggController.listarUm)
//Rota Create
router.post("/", EasterEggController.criar)
//Rota delete
router.delete("/:id", EasterEggController.apagar)
//Rota update
router.put("/:id", EasterEggController.atualizar)

export default router;