import Docker from 'dockerode';
import { user_container_type } from '../Data/types';

export default async function create_container(new_container_info: user_container_type): Promise<string> {
    const docker = new Docker({
        socketPath: '/var/run/docker.sock'
    });

    const labels: { [label: string]: string } = {
        'traefik.enable': 'true',
        [`traefik.http.routers.${new_container_info.name}.entrypoints`]: 'hoststream-network',
        [`traefik.http.services.${new_container_info.name}.loadbalancer.server.port`]: '80',
    };

    const container = await docker.createContainer({
        Image: 'fs-system',
        name: new_container_info.name,
        HostConfig: {
            NetworkMode: 'hoststream-network'
        },
        Labels: labels,
    });
    return container.id;
}