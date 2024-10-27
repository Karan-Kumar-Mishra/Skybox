import toast from "react-hot-toast";
export default function deleteuser(state, action) {
  let option = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: action.payload,
    }),
  };

  fetch(`${process.env.REACT_APP_BACKEND_URL}/deleteuser`, option)
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      console.log(res)
    })
    .catch((err) => {
      console.log(err);
      toast.error("Something went wrong: " + err);
    });
}
