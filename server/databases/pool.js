const mysql = require('mysql2');

let dbConfig = {
    host: process.env.LOCAL_HOST_ADDRESS,
    user: process.env.MYSQL_USERNAME,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.DATABASE_NAME
};

let pool = mysql.createPool( dbConfig );

module.exports = pool.promise();

