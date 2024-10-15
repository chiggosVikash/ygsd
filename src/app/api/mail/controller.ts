import { IContactUs } from '@/app/models/ContactUs';
import nodemailer from 'nodemailer';

export async function SendMailToTeam(data:IContactUs):Promise<nodemailer.SentMessageInfo>{

    try{
        
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,   // SMTP host (e.g., smtp.gmail.com)
            port: Number(process.env.SMTP_PORT),   // SMTP port (e.g., 587)
            secure: process.env.SMTP_PORT === '465', // true for 465, false for other ports
            auth: {
              user: process.env.SMTP_USER, // SMTP username
              pass: process.env.SMTP_PASS, // SMTP password
            },
        } as nodemailer.TransportOptions);

        const mailOptions = {
            from: process.env.SMTP_USER,
            to: "chiggos.vikash@gmail.com",
            subject: 'Contact Us Form Submission',
            text: `Name: ${data.name}\nEmail: ${data.email}\nMessage: ${data.message}`
        };

        const info = await transporter.sendMail(mailOptions);
        console.log('Email sent:', info.messageId);
        return info;

        

    }catch(e:unknown){
        console.log(e);
        throw new Error("Failed to send mail to team");
    }

}
