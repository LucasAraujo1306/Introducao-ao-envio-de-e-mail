import { Request, Response } from 'express';
import { transport } from '../instances/email'

export const contado = async (req: Request, res: Response) => {

    //Passo 1: Configurar a mensagem
    let message = {
        from: 'nao-responda@email.com',
        to: 'teste@hotmail.com',
        replyTo: req.body.from,
        subject: req.body.subject,
        html: req.body.email,
        text: req.body.email
    }

    //Passo 2: Enviar a mensagem
    await transport.sendMail(message);

    res.json({ success: true });
}