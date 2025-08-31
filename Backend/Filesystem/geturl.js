const Services = require('../services/main')
async function geturl() {
  console.log("go for create the container...")
  let option = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      imagename: "karankumarmishra/file-manager-backend",
      name: Services.GenerateName()
    }),
  };
 let res = await  fetch(process.env.FILE_SYSTEM_URL + "/create", option)
 let ans= res.json();
 console.log("ans=> ",ans)
 return ans;
}
module.exports = geturl;