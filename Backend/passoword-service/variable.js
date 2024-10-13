const { bcrypt } =require('./package.js')
const saltRounds = 10;
let password = 'default password';
let hashedpassword="default hash";
module.exports={
    saltRounds,
    password,
    hashedpassword,
    bcrypt
}