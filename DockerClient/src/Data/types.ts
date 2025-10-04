
type user_container_type={
  name:string,
  image:string,
}
interface model_type extends Document {
    id: string,
    email: string,
    username: string,
    services: {
        static_site: []
    },
    other_info: {},
}
interface domain_type extends Document{
    subdomainMappings :[]
}


type new_vm_type={
     vm_id:string,
     vm_name:string,
     vm_username:string,
     vm_password:string,
     vm_state:string
}
export  {
    user_container_type,
    new_vm_type,

    model_type,
    domain_type


}