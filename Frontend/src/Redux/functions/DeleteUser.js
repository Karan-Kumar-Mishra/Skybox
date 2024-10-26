import toast from "react-hot-toast";
export default async function deleteuser(state, action) {
    console.log("request for delete the user")
    let option={
        method :"DELETE",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
            email:state.data.email
        })
      }
      fetch(`${process.env.REACT_APP_BACKEND_URL}/deleteuser`, option)
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
        toast.error("something went worng" + err);
      });
}
  