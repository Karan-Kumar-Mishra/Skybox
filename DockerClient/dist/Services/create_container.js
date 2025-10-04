"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = create_container;
const dockerode_1 = __importDefault(require("dockerode"));
async function create_container(new_container_info) {
    const docker = new dockerode_1.default({
        socketPath: '/var/run/docker.sock'
    });
    const labels = {
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
