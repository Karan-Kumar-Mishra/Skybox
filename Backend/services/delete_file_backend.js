const db = require('../database/main')
export default async function delete_file_backend(email_id) {
   let data= await fetch(process.env.DOCKER_NODE+"/create")
   let res= await data.json();
   await db.add_fs_url(email_id,res.url);
}