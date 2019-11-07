let express = require("express");
let body_parser = require("body-parser");

let http = require("http");
let app = express();
let myRoute = require('./my-route');
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(body_parser.urlencoded({ extended : true}));
app.use(body_parser.json());
myRoute(app);
http.createServer(app).listen(process.env.PORT || 8080, function (){
  console.log("Node js server is running...");
});