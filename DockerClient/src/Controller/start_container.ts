import Services from "../Services";
import  { Request, Response } from "express"
export default function start_container(req: Request, res: Response) {
    if ((!req.body) || (!req.body.id)) {
        res.json({
            status: "error",
            msg: "Please the id for container ?"
        })
    }
    Services.start_container(req.body.id).then(() => {
        res.json({
            status: "ok"
        })
    }).catch(() => {
        res.json({
            status: "error",
        })
    })
}