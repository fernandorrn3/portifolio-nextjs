const nodemailer = require("nodemailer");

import Emailtemplate from "../components/emailtemplate";
export default async function Enviar(usuario,url){
  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing
  let testAccount = await nodemailer.createTestAccount();

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: 'lulinhapedecana1312@gmail.com', // generated ethereal user
      pass: '38600528f', // generated ethereal password
    },
  });
  

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"Fred Foo 👻" <lulinhapedecana1312@gmail.com>', // sender address
    to: "fernando.aoliveira223@gmail.com", // list of receivers
    subject: "confirmaçao de email", // Subject line
    text: "Hello world?", // plain text body
    html: Emailtemplate(usuario,url), // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...


}


