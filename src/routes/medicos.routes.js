import { Router } from "express";
import { getMedicos } from "../controller/medicos.controller.js";

const router = Router();

router.get('/medicos', getMedicos);

export default router;