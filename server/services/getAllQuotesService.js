const pool = require("../databases/pool");


async function getAllQuotesService(req, res, next) {

  
    let query = `SELECT * FROM quote;`;

    // const result = await pool.query( query );
    const [rows, fields] = await pool.query( query );

    res.resData = [...rows];

    next();
}

module.exports = getAllQuotesService;

