import toast  from 'react-hot-toast';
export default function singup(state, action) {
   console.log("sig=> ",action.payload)
  let option = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: action.payload.nickname,
      email: action.payload.email,
      more_info:action.payload
    }),
  };

  fetch("http://127.0.0.1/signup", option)
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
      toast.error("something went worng"+err)
    });
}
