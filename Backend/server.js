const express = require('express');
const app = express();
const route= require('./router/main');
const middleware= require('./middleware/main')
const status=require('express-status-monitor')
const service=require('./services/main')
const cors = require('cors')
const dotenv = require("dotenv");


require('dotenv').config();
dotenv.config();


// app.use(middleware.authentication)
app.use(middleware.bodyParserJson);
app.use(middleware.bodyParserUrlencoded);
app.use(express.json());
app.use(status())
app.use(cors())
service.AllServices(app);
app.use('/', route.home);  
app.use('/signup', route.signup);  
app.use('/login', route.login);  
app.use('/getuser', route.getuser);  
app.use('/deleteuser', route.deleteuser);
app.use('/getnotes', route.getnotes); 
app.use('/getnote', route.getnote);  
app.use('/updatanote', route.updatanote);  
app.use('/editnote', route.editnote);  
app.use('/addnote',route.addnote);
app.use('/deletenote', route.deletenote);  
app.use('/deleteallnote', route.deleteallnote);  
app.use('/feedback',route.feedback);
app.use('/addnotification',route.addnotifiaction);
app.use('/getnotification',route.getnotification);
app.use('/deletenotification',route.deletenotifiaction);
app.use('/deleteAllnotification',route.deleteAllnotifiaction);
app.use('/checkprime',route.checkprime);
app.use('/check_fs',route.checkDockerClient);
app.use('/markprime',route.markprime);
app.use('/create_order',route.create_order);
app.use('/verify_payment',route.verify_payment);
app.use('/get_file_url',route.getFilesystemURL);


