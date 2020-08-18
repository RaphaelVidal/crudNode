const importarModulosDoExpress = require("express"); // importa o exepress
const meuServidorExpress = importarModulosDoExpress(); // cria um servidor para minha aplicação

// rotas
meuServidorExpress.get("/",function(req,res){
    res.send("Pagina inicial");
});


meuServidorExpress.listen(8089,function(){
    console.log("servidor iniciado com sucesso e escutando na porta 8089")
}); // inicia o servidor