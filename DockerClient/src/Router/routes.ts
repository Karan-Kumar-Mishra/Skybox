import { Router, type IRouter } from "express";
import Controller from "../Controller";
const router: IRouter = Router();
router.post("/create", Controller.create_container);
router.post("/start", Controller.start_container);
router.post("/stop", Controller.stop_container);
router.delete("/delete", Controller.delete_container);
export default router;