"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = creat_container;
const Services_1 = __importDefault(require("../Services"));
function creat_container(req, res) {
    if (!req.body.container_name || !req.body.image_name) {
        res.json({
            status: "error",
            message: "Invaild json!"
        });
    }
    const new_container = {
        user_id: req.body.user_id,
        name: req.body.container_name,
        image: req.body.image_name
    };
    console.log("get request for create the container ...");
    Services_1.default.create_container(new_container)
        .then(async (id) => {
        return await Services_1.default.start_container(id).then(() => id);
    })
        .then((id) => {
        res.send({
            status: "ok",
            id: id,
            name: new_container.name,
            url: `http://${new_container.name}.Skybox.${process.env.HOST}`
        });
    })
        .catch((error) => {
        res.status(500).json({
            status: "error",
            message: error.message
        });
    });
}
