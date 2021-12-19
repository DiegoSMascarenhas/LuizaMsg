const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const router = require('./routes/routes');
const swaggerUI = require('swagger-ui-express');
const YAML = require('yamljs');
const swaggerDocument = YAML.load('./docs/swagger.yml');
require('dotenv').config();
const morgan = require('morgan');
const cors = require('cors');

app.use('/api/v1/docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument));
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded( {extended: true} ));
app.use(cors());
app.use(router);

app.get('/', (request, response)=>{
    response.send("<h1>Agendamento de Mensagens</h1>")
});

const port = process.env.PORT;
app.listen(port, ()=>{console.log(`Servidor rodando na porta ${port}`)})