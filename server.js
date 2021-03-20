/* Arquivo para a criação do servidor na porta 4000*/
const express = require('express')
const router = require('./routes')

const app = express()
app.use(express.json())
app.use(router)

app.listen(4000, ()=>{
  console.log("Aplicação rodando na porta 4000")
})