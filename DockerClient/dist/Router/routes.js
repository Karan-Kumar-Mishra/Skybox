"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Controller_1 = __importDefault(require("../Controller"));
const router = (0, express_1.Router)();
router.post("/create", Controller_1.default.create_container);
router.post("/start", Controller_1.default.start_container);
router.post("/stop", Controller_1.default.stop_container);
router.delete("/delete", Controller_1.default.delete_container);
exports.default = router;
