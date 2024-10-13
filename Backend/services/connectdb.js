const db= require('../database/main');
function connetdb()
{
   db.connect().then((res)=>{
        console.log(res)
    })
}
module.exports=connetdb;
