async function singup()
{

  let option={
    method :"POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
        name:"karan",
        email:"abc@gmail.com",
        password:"1234"
    })
  }
  let a= await fetch('http://127.0.0.1/singup',option);
  let res= await a.json()
  console.log(res)
}
//singup();

async function login()
{

  let option={
    method :"POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
        email:"abc@gmail.com",
        password:"1234"
    })
  }
  let a= await fetch('http://127.0.0.1/login',option);
  let res= await a.json()
  console.log(res)
}
//login();

async function deleteuser()
{

  let option={
    method :"DELETE",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
        email:"abc@gmail.com",
        password:"1234"
    })
  }
  let a= await fetch('http://127.0.0.1/deleteuser',option);
  let res= await a.json()
  console.log(res)
}
//deleteuser();