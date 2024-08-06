const db= require('./main.js')
db.connect().then((res)=>{
  console.log(res)
  db.getid("email","abc@gmail.com").then((res)=>{
    console.log(res)
    db.addnote(res,req.body.notedata).then((ans)=>{
      console.log(ans)
    })
  })
})