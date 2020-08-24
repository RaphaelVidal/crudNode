 function InsereProduto() {
    // Banco de dados
    const conexaoBD = require('../conexaoBD');// importa função de conexão com bd

    const conn = conexaoBD.IniciaConexaoBD(); // importa função de conexão com bd

    const sql = "INSERT INTO produtos(descrProduto,qtd) VALUES ?";
    const values = [
        ['Arroz', '10'],
        ['Feijão', '5'],
        ['Biscoito', '2']
    ];
    conn.query(sql, [values], function (error, results, fields) {
        if (error) return console.log(error);
        console.log('adicionou registros!');
        conn.end();//fecha a conexão
    });


}

