import { Request, Response } from 'express';
import nodemailer from 'nodemailer';

export const contado = (req: Request, res: Response) => {
    //Passo 1: Criar/configurar o transportador
    var transport = nodemailer.createTransport({
        host: "sandbox.smtp.mailtrap.io",
        port: 2525,
        auth: {
            user: "2013aa2d0025ee",
            pass: "06ed0371f520d8"
        }
    });

    //Passo 2: Configurar a mensagem
    let message = {
        from: 'Lucas <lucasisaac1306@hotmail.com.br>',
        to: 'teste@hotmail.com',
        subject: 'Contato do site',
        html: 'Opa <strong>teste</strong>, como vai ?',
        text: 'Opa teste, como vai ?'
    }


    res.json({ pong: true });
}