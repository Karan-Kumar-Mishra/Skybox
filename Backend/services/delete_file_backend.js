
const db = require('../database/main')

async function delete_file_backend(email_id) {
   const user = await db.getuser("email", email_id)
   let option = {
      method: "DELETE",
      headers: {
         "Content-Type": "application/json"
      },
      body: JSON.stringify({
         id: user.fs_info.fs_id
      })
   }
   if(user.fs_info.fs_id)
   {
      let data = await fetch(process.env.DOCKER_NODE + "/delete", option)
      let res = await data.json();
   }

}
module.exports = delete_file_backend; 