const pool = require("../databases/pool");

async function getQuoteByIdService(req, res, next) {

    let queryText = `SELECT * FROM quote WHERE id =?;`;

    try {
        const [rows] = await pool.query( queryText, req.params.id );

        if ( rows[0]?.id ) {
            res.resData = rows[0];
        }
        
    }   catch (error) {
        throw error;
    }

   

    next();
}

module.exports = getQuoteByIdService;