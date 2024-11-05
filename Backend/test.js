async function feedback()
{
  let option={
    method :"POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
        Date:Date(),
        feedback:"This is the amezing application"
    })
  }
  let a= await fetch('http://127.0.0.1/feedback',option);
  let res= await a.json()
  console.log(res)
}
feedback()