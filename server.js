
const importarModulosDoExpress = require("express"); // importa o exepress
const meuServidorExpress = importarModulosDoExpress(); // cria um servidor para minha aplicação



// rotas
const minhasRotas = require('./rotas');// importa função rotas
minhasRotas.IniciaRotasExistentes(meuServidorExpress); //importa função rotas



meuServidorExpress.listen(8089,function(){
    console.log("Servidor Iniciado com sucesso e escutando no endereco http://localhost:8089")
}); // inicia o servidor