const proxy = require("http-proxy-middleware");
module.exports = app => {
	app.use(
		"/api",
		proxy({
			target: "http://localhost:5000",
			changeOrigin: true
		})
	);
	app.use(
		"/dndApi",
		proxy({
			target: "https://dnd5eapi.co",
			changeOrigin: true,
			pathRewrite: {
				"^/dndApi": "/api"
			}
		})
	);
};
