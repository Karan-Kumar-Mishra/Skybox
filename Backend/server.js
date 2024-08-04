const express = require('express');
const app = express();
const route= require('./router/main');
const db= require('./database/main');
const middleware= require('./middleware/main')



db.connect().then((res)=>{
  console.log(res)
})

app.use(middleware.bodyParserJson);
app.use(middleware.bodyParserUrlencoded);
app.use(express.json());


app.use('/', route.home);  
app.use('/singup', route.singup);  
app.use('/login', route.login);  //pending
app.use('/auth', route.authentication);  
app.use('/addnote',route.addnote)


app.listen(80, () => {
  console.log('Server is running on port 3000');
});
