const connetdb= require('./connectdb')
const RunCluster =require('./Cluster')
const GenerateName =require('./GenerateName');
const create_file_backend= require('./create_file_backend')
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
    GenerateName,
    create_file_backend
}