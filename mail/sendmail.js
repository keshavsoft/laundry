import nodemailer from "nodemailer";

let StartFunc = async ({inMail, inlink}) =>{
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
        user: "",
        pass: "",
    },
});

export {StartFunc};