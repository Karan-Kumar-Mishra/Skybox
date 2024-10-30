export default  function addnote(state, actions) {
  console.log("update function is running ", actions.payload);
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
 .then((res)=>{
  console.log("res=>",res)
 }).catch((err)=>{
  console.log("error =>",err)
 })
 
}
