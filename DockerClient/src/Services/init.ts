import pull_image from "./pull_image";
import checkDockerImageExists from "./checkDockerImageExists";
import start_bash_container from "./start_bash_container";
import createNetwork from "./createNetwork";
import remove_network from "./remove_network";


export default async function init() {

    console.log("Running the init server...");

    await remove_network('hoststream-network');
    await createNetwork();
    let b: boolean = await checkDockerImageExists('traefik');
    if (b == true) {
        console.log("images exist ready for container deployment ")
    }
    else {
        await pull_image('traefik');
        console.log("images pullImage ready for container deployment ")
    }

    start_bash_container();

}