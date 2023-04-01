import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const Paciente = sequelize.define('pacientes',{
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
    email:{
        type: DataTypes.STRING,
        allowNull: false
      },
    telefono:{
        type: DataTypes.BIGINT,
        allowNull: false
      },
    sintomas:{
        type: DataTypes.STRING,
        allowNull: false
    }
})