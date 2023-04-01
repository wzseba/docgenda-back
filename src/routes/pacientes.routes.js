import { Router } from "express";
import { getPacientes, postPaciente } from "../controller/pacientes.controller.js";
const router = Router();

router.get('/pacientes', getPacientes);
router.post('/pacientes', postPaciente);
router.put('/pacientes/:id');
router.delete('/pacientes/:id');
router.get('/paciente/:id');

export default router;