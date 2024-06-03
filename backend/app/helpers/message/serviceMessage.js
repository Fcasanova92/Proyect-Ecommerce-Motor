import { transporter } from "./serviceConfig";

  export const sendConsultation = async (data)=>{

    const {nombre, apellido, email, consulta} = data

    const mailOptions = {
      from: email,
      to: process.env.EMAIL_USER,
      subject: `Consulta de ${nombre} ${apellido}`,
      text: consulta,
    };

    const result = await transporter.sendMail(mailOptions) 
        if (result.error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      };



