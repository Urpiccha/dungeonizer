const mysql = require("mysql");
const pool = require("../sql/connection");
const { handleSQLError } = require("../sql/error");

const getAllMonsters = (req, res) => {
	pool.query("SELECT * FROM monsters", (err, rows) => {
		if (err) return handleSQLError(res, err);
		return res.json(rows);
	});
};

const getMonsterById = (req, res) => {
	let sql = "SELECT * FROM monsters WHERE id = ?";
	sql = mysql.format(sql, [req.params.id]);

	pool.query(sql, (err, rows) => {
		if (err) return handleSQLError(res, err);
		return res.json(rows);
	});
};

const deleteMonsterByName = (req, res) => {
	let sql = "DELETE FROM monsters WHERE name = ?";
	sql = mysql.format(sql, [req.params.name]);

	pool.query(sql, (err, results) => {
		if (err) return handleSQLError(res, err);
		return res.json({ message: `Deleted ${results.affectedRows} user(s)` });
	});
};

module.exports = {
	getAllMonsters,
	getMonsterById,
	deleteMonsterByName
};
