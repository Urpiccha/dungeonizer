const express = require("express");
const bodyParser = require("body-parser");
const monstersRouter = require("./routers/monsters");

const app = express();
const PORT = process.env.PORT || 4001;

app.use(bodyParser.json());
app.use("/monsters", monstersRouter);

app.get("/", (req, res) => {
	res.send("Welcome to the Dungeonizer server. Ave Satanas!");
});

app.get("/monsters", (req, res) => {
	res.send("Compiling Monster list. Ave Satanas!");
});

app.listen(PORT, () => {
	console.log(`We are watching you on port ${PORT}...`);
});
