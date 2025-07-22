async function geturl() {
      let option = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: state.Data.UserData.email,
      }),
    };
    fetch(process.env.FILE_SYSTEM_URL + "/create",option).then((ans) => {
        return ans.json();
    }).then((ans)=>{
        console.log("get url =>",ans)
        return ans;
    })
    .catch((err) => {
        console.log('error while getting the file system url !')
    })
}
module.exports = geturl;