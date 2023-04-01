import { Paciente } from "../models/Paciente.js";

export const getPacientes = async(req, res)=>{
    try {
        const pacientes = await Paciente.findAll();
        res.json(pacientes);
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
    
}

export const getPaciente = async(req, res)=>{
    try {
        const {id} = req.params;
        const paciente = await Paciente.findByPk(id);

        paciente ?  res.json(paciente) : res.status(404).json({message: "El paciente no existe"})
       
    } catch (error) {
        return res.status(404).json({message: error.message});
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

export const updatePaciente = async(req, res)=>{
    try {
        const {id} =  req.params;
        const {nombre, email, telefono, sintomas} = req.body;

        const upPaciente =  await Paciente.findByPk(id);
        upPaciente.nombre = nombre;
        upPaciente.email = email;
        upPaciente.telefono = telefono;
        upPaciente.sintomas = sintomas;

        await upPaciente.save();
        res.json({message: "Actualizacion correcta!!"});
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
}

export const deletePaciente = async(req, res)=>{
    const {id} = req.params;
    try {
        await Paciente.destroy({
            where:{
                id
            }
        });
        res.json({message: "Paciente eliminado correctamente!!"})
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}