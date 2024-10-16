import { IContactUs } from '@/app/models/ContactUs';
import nodemailer from 'nodemailer';
import { google } from 'googleapis';

export async function SendMailToTeam(data: IContactUs): Promise<nodemailer.SentMessageInfo> {
    try {
        const oauth2Client = new google.auth.OAuth2(
            process.env.OAUTH_CLIENT_ID,
            process.env.OAUTH_CLIENT_SECRET,
            process.env.OAUTH_REDIRECT_URI
        );

        oauth2Client.setCredentials({ refresh_token: process.env.OAUTH_REFRESH_TOKEN });

        const accessToken = await oauth2Client.getAccessToken();

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                type: 'OAuth2',
                user: process.env.GMAIL_USER,
                clientId: process.env.OAUTH_CLIENT_ID,
                clientSecret: process.env.OAUTH_CLIENT_SECRET,
                refreshToken: process.env.OAUTH_REFRESH_TOKEN,
                accessToken: accessToken?.token || undefined,
            },
        });

        const recipients = [
            process.env.COMPANY,
            process.env.VINITA,
            process.env.KESHAV,
            process.env.VIKASH
        ];

        const htmlContent = `
            <html>
                <head>
                    <title>Contact Us Form Submission</title>
                </head>
                <body>
                    <p><strong>Name:</strong> ${data.name}</p>
                    <p><strong>Email:</strong> ${data.email}</p>
                    <p><strong>Subject:</strong> ${data.subject}</p>
                    <p><strong>Phone:</strong> ${data.phoneNumber}</p>
                    <p><strong>Message:</strong></p>
                    <p>${data.message}</p>
                </body>
            </html>
        `;

        const mailOptions = {
            from: `YGSD<${process.env.GMAIL_USER}>`,
            to: recipients.join(', '),
            subject: 'Contact Us Form Submission',
            html: htmlContent,
            text: `Name: ${data.name}\nEmail: ${data.email}\nSubject: ${data.subject}\nPhone: ${data.phoneNumber}\nMessage: ${data.message}` // Fallback plain text
        };

        const info = await transporter.sendMail(mailOptions);
        console.log('Email sent:', info.messageId);
        return info;

    } catch (e: unknown) {
        console.error('Error sending email:', e);
        throw new Error("Failed to send mail to team");
    }
}
