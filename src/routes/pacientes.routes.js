import { Router } from "express";
import { deletePaciente, getPaciente, getPacientes, postPaciente, updatePaciente } from "../controller/pacientes.controller.js";
const router = Router();

router.get('/pacientes', getPacientes);
router.post('/pacientes', postPaciente);
router.put('/pacientes/:id', updatePaciente);
router.delete('/pacientes/:id', deletePaciente);
router.get('/paciente/:id', getPaciente);

export default router;