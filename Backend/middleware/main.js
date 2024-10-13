const bodyParserJson= require('./bodyparser-json')
const bodyParserUrlencoded =require('./bodyparser-urlencoded');
const authentication =require('./authentication')
const mainobj={
    bodyParserJson,
    bodyParserUrlencoded,
    authentication
}
module.exports=mainobj;