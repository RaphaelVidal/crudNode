const Sequelize = require('sequelize')
const minhaConexaoBD = new Sequelize('sysbjj','root','',{
    host: "localhost",
    dialect: "mysql"
}); // banco,user,senha

minhaConexaoBD.authenticate().then(function(){
    console.log('Sucesso ao conectar');
}).catch(function(erro){
    console.log('Falha ao tentar se conectar')
})