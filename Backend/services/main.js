const connetdb= require('./connectdb')
const RunCluster =require('./Cluster')

function AllServices(app)
{
    connetdb();
    RunCluster(app);
}
const mainobj={
    connetdb: connetdb,
    RunCluster:RunCluster,
}
module.exports={
    mainobj,
    AllServices,
}