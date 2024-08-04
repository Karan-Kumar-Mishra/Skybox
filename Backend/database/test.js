const db= require('./main.js')
db.connect().then((res)=>{
  console.log(res)
  db.getid("email","abc@gmail.com").then((res)=>{
    console.log(res)
  })
})