const app = require('./server')

const port = process.env.PORT;
app.listen(port, ()=>{console.log(`Servidor rodando na porta ${port}`)})