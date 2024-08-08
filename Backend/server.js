const express = require('express');
const app = express();
const route= require('./router/main');
const db= require('./database/main');
const middleware= require('./middleware/main')
const status=require('express-status-monitor')


db.connect().then((res)=>{
  console.log(res)
})


app.use(middleware.authentication)
app.use(middleware.bodyParserJson);
app.use(middleware.bodyParserUrlencoded);
app.use(express.json());
app.use(status())


app.use('/', route.home);  
app.use('/singup', route.singup);  
app.use('/login', route.login);  
app.use('/getuser', route.getuser);  
app.use('/deleteuser', route.deleteuser);
app.use('/getnotes', route.getnotes);  //getting all notes
app.use('/getnote', route.getnote);  
app.use('/updatanote', route.updatanote);  
app.use('/editnote', route.editnote);  
app.use('/deletenote', route.deletenote);  
app.use('/deleteallnote', route.deleteallnote);  


app.listen(80, () => {
  console.log('Server is running on port 3000');
});
