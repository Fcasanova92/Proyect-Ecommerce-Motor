import nodemailer from 'nodemailer';

require('dotenv').config();


var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.emailUser,
      pass: process.env.passwordEmailUser
    }
  });

export const sendForm = async (data) => {

    const mailOptions = {
        from: process.env.emailUser,
        to: data.email,
        subject: 'Sending Email using Node.js',
        text: `hola ${data.name} ${data.surname}, tu consulta sera respondida a la brevedad`
      };

    const sendEmail = await transporter.sendMail(mailOptions)

    if (sendEmail.pending){

      console.log("email enviandose")
    }

    if (sendEmail.accepted){

      console.log("se realizo el envio correctamente")
    }else{

      console.log("error en el envio del email " + sendEmail.rejected)
    }

    }
    