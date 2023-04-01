import { Paciente } from "../models/Paciente.js";

export const getPacientes = async(req, res)=>{
    try {
        const pacientes = await Paciente.findAll();
        res.json(pacientes);
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
    
}

export const postPaciente = async(req, res)=>{
    const {nombre, email, telefono, sintomas} = req.body;
    
    try {
        const newPaciente = await Paciente.create({
            nombre,
            email,
            telefono,
            sintomas
        })

        res.json(newPaciente);
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
    
}