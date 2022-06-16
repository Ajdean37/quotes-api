const pool = require("../databases/pool");


async function createQuoteService(req, res, next) {


    //BAD PRACTICE WILL EXPOSE YOU TO SQL INJECTION ATTACKS
    // let query = `INSERT INTO quote (${Object.keys(req.body)}) VALUES (${Object.values(req.body)});`
    let query = `INSERT INTO quote SET ?;`;

    const result = await pool.query( query, req.body );

    const newRecordId = result[0].insertId;

    let quoteRows;
    try {
        [quoteRows] = await pool.query(`SELECT * FROM quote WHERE ID = ?`, newRecordId);
    }   catch (error) {
        throw error  
    }

    let resData = {...quoteRows[0]};

    let authorRows;
    try {
        //This should fail
        [authorRows] = await pool.query(`SELECT * FROM author WHERE MALFORMED KEYWORD id = ?`, quoteRows[0].author_id);
    }   catch (error) {

        switch (error.code) {
            case 'ER_PARSE_ERROR':
                // 'This select should resolve the issue';
                [authorRows] = await pool.query(`SELECT * FROM author WHERE id = ?`, quoteRows[0].author_id);
                break;
            default:
                throw error;
        }
    }


    resData.author = {...authorRows[0]};
    delete resData.author_id;

    res.resData = resData;
    res.statusCode = 201;


    next();
};

module.exports = createQuoteService;