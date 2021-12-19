const { response } = require('express');
const express = require('express');
const router = express.Router();
const msgScheduleController = require('../controller/scheduleController');

router.get('/agendamento', (request, response)=>{
    response.json({
        message: "API de agendamento de envio de mensagens"
    })
});

router.get('/allMessages', msgScheduleController.allMessages);
router.get('/message/:id', msgScheduleController.getMessage);
router.get('/message/:id', msgScheduleController.getMessage);
router.delete('/delete/message/:id', msgScheduleController.removeMessage);
router.post('/newMessage', msgScheduleController.newMessage)

module.exports = router;