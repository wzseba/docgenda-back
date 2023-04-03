import express from 'express';
import morgan from 'morgan';
import pacientesRouter from './routes/pacientes.routes.js';
import medicosRouter from './routes/medicos.routes.js';
const app = express();

//middlewares
app.use(express.json());//para leer por req.body
app.use(morgan('dev'));//para ver los status de peticiones

//routes
app.use(pacientesRouter);
app.use(medicosRouter);

export default app;