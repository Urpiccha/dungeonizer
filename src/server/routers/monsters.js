const express = require("express");
const usersController = require("../controllers/monsters");
const router = express.Router();

router.get("/", usersController.getAllMonsterss);

router.get("/:name", usersController.getMonsterByName);

module.exports = router;
