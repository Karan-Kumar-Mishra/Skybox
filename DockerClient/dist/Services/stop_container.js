"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = stop_container;
const Data_1 = __importDefault(require("../Data"));
async function stop_container(id) {
    try {
        const container = Data_1.default.docker.docker.getContainer(id);
        await container.stop();
        console.log(`Container ${id} stopped successfully.`);
    }
    catch (error) {
        console.log("error while try to stop the container !");
    }
}
