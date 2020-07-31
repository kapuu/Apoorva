const proxy = require("http-proxy-middleware");

module.exports = function(app){
	app.use(
	 proxy("https://restcountries.eu/rest/v2/all",{
		 target: "https://restcountries.eu/rest/v2/all",
		 secure: false,
	 changeOrigin: true
	 })
};

