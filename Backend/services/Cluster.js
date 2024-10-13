const culster= require('node:cluster')
const numCPUs=require('os').availableParallelism();

function RunCluster(app){
    if(culster.isPrimary){
        for(let i=0; i<numCPUs ;i++)
    {
        culster.fork();
    }
    culster.on('exit',(Worker,code,signal)=>{
        console.log("exitting ..")
    })
}
else
{
    app.listen(80,()=>{
        console.log("server is running ..")
    })
}
}
module.exports= RunCluster;

