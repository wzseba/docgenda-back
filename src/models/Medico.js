import { DataTypes } from "sequelize";  
import { sequelize } from "../database/database";

export const medico = sequelize.define('Medicos',{
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
    }
})