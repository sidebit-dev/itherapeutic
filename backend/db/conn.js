const mysql = require('mysql')


const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'itherapeutic'
})

conn.connect(function(err){
    if(err) {
        console.log(err)
    }
    console.log('Conectou ao MySql!')    
})

module.exports = mysql