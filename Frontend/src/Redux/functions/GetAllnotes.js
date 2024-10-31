import toast from "react-hot-toast";

export default function getallnotes(state, actions) {
 
  let option = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: actions.payload.email,
    }),
  };
  
  fetch(`${process.env.REACT_APP_BACKEND_URL}/getnotes`, option)
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      // state.data.userNote=res;
      console.log("response=>", res);
    })
    .catch((err) => {
      console.log("error=> ", err);
    });
}
