import nodemailer from "nodemailer";
import dotenv from 'dotenv';

dotenv.config();

let StartFunc = async ({inMail, inlink}) =>{
    if ("KS_MAIL_ID" in process.env === false) {
        console.log("KS_MAIL_ID not found in .env file");
        return await false;
    };

    if ("KS_MAIL_PASSWORD" in process.env === false) {
        console.log("KS_MAIL_PASSWORD not found in .env file");
        return await false;
    };

    await jFTransporter.sendMail({
        from: '"Bingumalla Dwijesh" <21131a0522@gvpce.ac.in>', 
        to: `${inMail}`,
        subject: "Hello ✔", 
        text: "To activate click on this", 
        html: `<a href=${inlink}>Click here</a>`,
    });
}

let  jFTransporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
        user: process.env.KS_MAIL_ID,
        pass: process.env.KS_MAIL_PASSWORD,
    },
});

export {StartFunc};