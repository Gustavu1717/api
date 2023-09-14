import express from 'express';
import 'dotenv/config';
import cors from 'cors';

import senhaController from './controller/senhaController.js';
import emailController from './controller/emailController.js';

let server = express();
server.use(cors());
server.use(express.json());

server.use(senhaController);
server.use(emailController);

server.listen(process.env.PORT, () => console.log(`API onlina na porta ${process.env.PORT}`));