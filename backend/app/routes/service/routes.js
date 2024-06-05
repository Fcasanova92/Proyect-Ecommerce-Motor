// endpoints de servicioes externos, como la mensajeria

import { Router } from 'express';
import { sendConsultation } from '../../helpers/message/serviceMessage.js';

export var router = Router();

router.post('/send', function(req, res) {

try {

  const sendMessage = sendConsultation(req.body)
  if(sendMessage){
    res.status(200).send('Consulta enviada')
  }else{
    res.status(401)('La consulta no fue enviada')
  }
  
} catch (error) {
  res.status(500).send('error en al conexion de servicio de mensajeria'+error)
  
}
});

