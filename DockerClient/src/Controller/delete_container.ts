
import Services from "../Services";
import { Request, Response } from "express"
export default function delete_container(req: Request, res: Response) {
    if ((!req.body.id)) {
        res.json({
            status: "error",
            msg: "Please the id for container ?"
        })
    }

    Services.remove_container(req.body.id).then(() => {
        res.json({
            status: "ok"
        })
    }).catch(() => {
        res.json({
            status: "error",
        })
    })
}