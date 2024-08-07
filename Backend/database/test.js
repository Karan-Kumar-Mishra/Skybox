let arr=[1,2,3,4,5,6,7]
let index=2;

let update1= arr.slice(0,index)
let update2=  arr.slice(index+1,arr.length)

for(let i=0;i<update2.length;i++)
{
  update1.push(update2[i])
}


console.log(update1)