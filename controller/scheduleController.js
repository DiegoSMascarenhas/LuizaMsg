const connection = require('../database/connection');

class msgScheduleController {
    newMessage(request, response) {
       
        const msgSchedule ={}
        msgSchedule.messageDate = request.body.messageDate;
        msgSchedule.messageHour = request.body.messageHour;
        msgSchedule.clientName = request.body.clientName;
        msgSchedule.clientEmail = request.body.clientEmail;
        msgSchedule.clientCelphone = request.body.clientCelphone;
        msgSchedule.messageContent = request.body.messageContent;

        //response.send(msgSchedule)
        const query = 'INSERT INTO message_schedule (messageDate, messageHour, clientName, clientEmail, clientCelphone, messageContent, send_status) VALUES ('+'"'+msgSchedule.messageDate+'","'+ msgSchedule.messageHour+'","'+ msgSchedule.clientName+'","'+ msgSchedule.clientEmail+'","'+ msgSchedule.clientCelphone+'","'+ msgSchedule.messageContent+'",'+'"0")'
        
        //response.send(query)
    
        connection(query, response)
      
    }

    allMessages(request, response) {
        connection('SELECT * FROM message_schedule', response)
    }

    getMessage(request, response) {
        let filter = '';
        if (request.params.id) filter = ' WHERE ID=' + parseInt(request.params.id);
        connection('SELECT * FROM message_schedule' + filter, response);
    }

    removeMessage(request, response) {
        connection('DELETE FROM message_schedule WHERE ID=' +parseInt(request.params.id), response)
    }
}

module.exports = new msgScheduleController();