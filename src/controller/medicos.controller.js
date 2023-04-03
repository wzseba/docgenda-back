import { Medico } from '../models/Medico.js';

export const getMedicos = async(req, res)=>{
    try {
        const medicos = await Medico.findAll();
        !medicos.length ? res.status(404).json({message: "Base de datos vacia"}) : res.json(medicos)
    } catch (error) {
        return res.status(500).json({message: error.medicos});
    }
    
}