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


    res.json({ pong: true });
}