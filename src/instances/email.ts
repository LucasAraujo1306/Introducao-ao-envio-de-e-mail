import nodemailer from 'nodemailer';

const port = process.env.EMAIL_PORT ? parseInt(process.env.EMAIL_PORT) : 2525;

export const transport = nodemailer.createTransport({
    host: process.env.EMAIL_HOST as string,
    port: port,
    auth: {
        user: process.env.EMAIL_USER as string,
        pass: process.env.EMAIL_PASS as string
    }
});