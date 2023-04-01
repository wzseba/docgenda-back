import express from 'express';
import morgan from 'morgan';
import pacientesRouter from './routes/pacientes.routes.js';
const app = express();

//middlewares
app.use(express.json());//para leer por req.body
app.use(morgan('dev'));//para ver los status de peticiones


app.use(pacientesRouter);

export default app;