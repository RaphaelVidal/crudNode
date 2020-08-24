module.exports = {
    IniciaRotasExistentes(meuServidorExpress){

        meuServidorExpress.get("/",function(req,res){
            res.send("Pagina inicial nova");
        });

        meuServidorExpress.get("/produtos",function(req,res){
            res.send("Pagina produtos");
        });





    }
}