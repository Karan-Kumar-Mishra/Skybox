const bodyParser = require("body-parser");
function bodyParserUrlencoded(req, res, next) {
  bodyParser.urlencoded({ extended: true })
  next();
}
module.exports =bodyParserUrlencoded;