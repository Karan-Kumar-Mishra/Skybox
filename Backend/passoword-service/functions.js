const variable =require('./variable.js');
const bcrypt=variable.bcrypt
const password = variable.password;
const saltRounds=variable.saltRounds;

async function hashPassword(password) {
    try {
      const salt = await bcrypt.genSalt(saltRounds);
      const hash = await bcrypt.hash(password, salt);
      return hash;
    } catch (error) {
      console.error('Error hashing password:', error);
    }
  };
  
  const verifyPassword = async (password, hash) => {
      try {
        const match = await bcrypt.compare(password, hash);
        return match; 
      } catch (error) {
        console.error('Error verifying password:', error);
      }
  };
    
  

  module.exports={
    hashPassword,
    verifyPassword
  }