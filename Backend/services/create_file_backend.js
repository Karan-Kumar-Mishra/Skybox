const db = require('../database/main')

async function create_file_backend(email_id) {
   let option = {
      method: "POST",
      headers: {
         "Content-Type": "application/json"
      },
      body: JSON.stringify({
         container_name: email_id.split('@')[0],
         image_name: "file-manager-backend"
      })
   }
   let data = await fetch(process.env.DOCKER_NODE + "/create", option)
   let res = await data.json();
   await db.add_fs_url(email_id, res);
}
module.exports = create_file_backend; 