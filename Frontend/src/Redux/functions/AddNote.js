import toast from "react-hot-toast";
export default function addnote(state, actions) {
  let option = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: state.data.email,
      notedata: actions.payload,
    }),
  };
  fetch(`${process.env.REACT_APP_BACKEND_URL}/addnote`, option)
    .then((res) => {
      console.log("res=>", res.status);
      if (res.status === 200) {
        toast.success("New note is save successfully !");
      }
    })
    .catch((err) => {
      toast.error(`something went work =>${err}`);
    });
}
