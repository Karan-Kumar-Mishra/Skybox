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
async function addnote()
{

  let option={
    method :"PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
        email:"abc@gmail.com",
        notedata:" This the note data"
    })
  }
  let a= await fetch('http://127.0.0.1/addnote',option);
  let res= await a.json()
  console.log(res)
}
//addnote();
async function updatanote()
{

  let option={
    method :"PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
        email:"abc@gmail.com",
        index: 3,
        newnote:" karan"
    })
  }
  let a= await fetch('http://127.0.0.1/updatanote',option);
  let res= await a.json()
  console.log(res)
}
//updatanote()

async function editnote()
{

  let option={
    method :"PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
        email:"abc@gmail.com",
        index: 3,
        newnote:"1"
    })
  }
  let a= await fetch('http://127.0.0.1/editnote',option);
  let res= await a.json()
  console.log(res)
}
//editnote()
async function deletenote()
{
  let option={
    method :"PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
        email:"abc@gmail.com",
        index:0
    })
  }
  let a= await fetch('http://127.0.0.1/deletenote',option);
  let res= await a.json()
  console.log(res)
}
//deletenote()
async function deleteallnote()
{
  let option={
    method :"PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
        email:"abc@gmail.com"
    })
  }
  let a= await fetch('http://127.0.0.1/deleteallnote',option);
  let res= await a.json()
  console.log(res)
}
//deleteallnote()
async function getnotes()
{
  let option={
    method :"POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
        email:"abc@gmail.com"
    })
  }
  let a= await fetch('http://127.0.0.1/getnotes',option);
  let res= await a.json()
  console.log(res)
}
//getnotes()
async function getnote()
{
  let option={
    method :"POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
        email:"abc@gmail.com",
        index:56
    })
  }
  let a= await fetch('http://127.0.0.1/getnote',option);
  let res= await a.json()
  console.log(res)
}
//getnote()
async function getuser()
{
  let option={
    method :"POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
        email:"abc@gmail.com"
    })
  }
  let a= await fetch('http://127.0.0.1/getuser',option);
  let res= await a.json()
  console.log(res)
}
getuser()