"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = stop_container;
const Services_1 = __importDefault(require("../Services"));
function stop_container(req, res) {
    if ((!req.body) || (!req.body.id)) {
        res.json({
            status: "error",
            msg: "Please the id for container ?"
        });
    }
    Services_1.default.stop_container(req.body.id).then(() => {
        res.json({
            status: "ok"
        });
    }).catch(() => {
        res.json({
            status: "error",
        });
    });
}
