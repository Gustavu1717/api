import { Router } from "express";
import { MostrarSenhas, InserirSenha } from "../repository/senhaRepository.js";

const endpoints = Router();

endpoints.get('/senhas', async (req, resp) =>{
    try {
        const resposta = await MostrarSenhas();
        resp.send(resposta);

    } catch (err) {
        console.error(err);
        resp.status(400).send({
            erro: 'Ocorreu Um erro'
        
        })

    }

});


endpoints.post('/senhas', async (req, resp) =>{
    try {
        const senha = req.body;
        const resposta = await InserirSenha(senha);

        resp.send(resposta);

    } catch (err) {
        resp.status(400).send({
            erro: "ocorreu um erro"
        })
    }

});

export default endpoints;