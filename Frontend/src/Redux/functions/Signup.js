import toast from "react-hot-toast";
export default function signup(state, action) {
  let option = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: action.payload.nickname,
      email: action.payload.email,
      more_info: action.payload,
    }),
  };

  fetch(`${process.env.REACT_APP_BACKEND_URL}/signup`, option)
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
