/* Primeira parte para chamar a rota para salvar o comentário do usuário */
const database = require('../database/config');

class ComentarioController {

  novoComentario(req,res){
    const comentario = req.body
    database.insert(comentario).table("comentarios").then(data=>{
      console.log('data :>> ', data);
      res.json({msg:"Comentário criado com sucesso!"})
    }).catch(error=>{
      console.log(error);
    })
  }

  listarComentarios(req,res){
    database.select("*").table("comentarios").then(itens=>{
      console.log(itens)
      res.json(itens)
    }).catch(error=>{
      console.log(error)
    })
  }
}

module.exports = new ComentarioController();

