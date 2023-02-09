import { Router, Response, Request } from "express";
import { createMovie } from "./controllers/movieController";

// Validations
import { validate } from "./middleware/handleValidation";

const router = Router()

router.get("/test", (req: Request, res: Response) => {
    res.status(200).send("API Working")
})
router.post('/movie', validate, createMovie)

export default router