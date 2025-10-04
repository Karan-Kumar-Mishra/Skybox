"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = init;
const pull_image_1 = __importDefault(require("./pull_image"));
const checkDockerImageExists_1 = __importDefault(require("./checkDockerImageExists"));
const start_bash_container_1 = __importDefault(require("./start_bash_container"));
const createNetwork_1 = __importDefault(require("./createNetwork"));
const remove_network_1 = __importDefault(require("./remove_network"));
async function init() {
    console.log("Running the init server...");
    await (0, remove_network_1.default)('hoststream-network');
    await (0, createNetwork_1.default)();
    let b = await (0, checkDockerImageExists_1.default)('traefik');
    if (b == true) {
        console.log("images exist ready for container deployment ");
    }
    else {
        await (0, pull_image_1.default)('traefik');
        console.log("images pullImage ready for container deployment ");
    }
    (0, start_bash_container_1.default)();
}
