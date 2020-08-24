module.exports = {
    IniciaConexaoBD() {
        // const Sequelize = require('sequelize')
        // const minhaConexaoBD = new Sequelize('crudNodeJS', 'root', '', {
        //     host: "localhost",
        //     dialect: "mysql"
        // }); // banco,user,senha

        // minhaConexaoBD.authenticate().then(function () {
        //     console.log('Sucesso ao conectar');
        // }).catch(function (erro) {
        //     console.log('Falha ao tentar se conectar');
        // })


        const mysql = require('mysql');
        const connection = mysql.createConnection({
            host: 'localhost',
            port: '',
            user: 'root',
            password: '',
            database: 'crudNodeJS'
        });

         
        connection.connect(function (err) {
            if (err) return console.log(err);
            console.log('banco de dados conectou!');
        })

        return(connection)

    }
}



