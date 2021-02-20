/* https://www.npmjs.com/package/mysql#introduction 
Documentation create the connection
*/

const mysql = require('mysql');
const conexion = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'company'
});

conexion.connect((e)=>{
    if(e){
        console.log(e);
        return;
    }

    console.log(`Base de datos conectada`)
});

module.exports = conexion;