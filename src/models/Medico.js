import { DataTypes } from "sequelize";  
import { sequelize } from "../database/database.js";

export const Medico = sequelize.define('medicos',{
    id:{
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
      },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    espcilidad: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
})