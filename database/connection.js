const mysql = require('mysql');
const express = require('express');
const bodyParser = require('body-parser');


function execSQLQuery(sqlQry, response) {
    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'Root@1234',
        database: 'magaluMsg'
    });

    connection.query(sqlQry, function (error, results, fields) {
        if (error){
        console.log(error);
          //  response.send(error);
        }
        else
        response.json(results);
        connection.end();
        console.log('executou!');
    });
}



module.exports = execSQLQuery;