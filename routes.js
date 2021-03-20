/*Arquivo para construir a rota para conectar com os comentários*/
const bd = require('./database/config')
const express = require('express')
const router = express.Router()
const {listarComentarios,novoComentario} = require('./src/comentariosController')

router.post('/comentario',novoComentario)

router.get('/',listarComentarios)

module.exports = router