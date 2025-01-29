async function feedback()
{
  let option={
    method :"POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
        
       name:"Karan Mishra"
    })
  }
  let a= await fetch('http://127.0.0.1/deleteAllnotification',option);
  let res= await a.json()
  console.log(res)
}
feedback()