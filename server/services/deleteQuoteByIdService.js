const pool = require("../databases/pool");

async function deleteQuoteByIdService(req, res, next) {

  let quoteToDelete = null;
  try {
    let queryText = `SELECT * FROM quote WHERE id = ?;`;
    let [quotes] = await pool.query(queryText, req.params.id);
    quoteToDelete = quotes[0];
    res.resData = quoteToDelete;
  } catch (error) {
    throw error;
  }
    
  try {
    let queryText = `DELETE FROM quote WHERE id = ?;`;
    await pool.query(queryText, req.params.id);
  } catch (error) {
    throw error;
  }



    next();
}

module.exports = deleteQuoteByIdService;