const bodyParser = require("body-parser");
function bodyParserUrlencoded(req, res, next) {
  bodyParser.urlencoded({ extended: false })
  next();
}
module.exports =bodyParserUrlencoded;