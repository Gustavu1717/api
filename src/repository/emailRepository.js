import nodemailer from 'nodemailer';
import 'dotenv/config';

let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
        user: "t371050@gmail.com",
        pass: process.env.PASS
    }
})

export default transporter;