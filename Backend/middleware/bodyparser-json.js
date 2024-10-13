const bodyParser = require("body-parser");
function bodyParserJson(req, res, next) {
  bodyParser.json();
  next();
}
module.exports =bodyParserJson;