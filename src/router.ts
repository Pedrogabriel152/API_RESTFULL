import { Router, Response, Request } from "express";
import { createMovie } from "./controllers/movieController";

// Validations
import { validate } from "./middleware/handleValidation";
import { movieCreateValidation } from "./middleware/moviValidation";

const router = Router()

router.get("/test", (req: Request, res: Response) => {
    res.status(200).send("API Working")
})
router.post('/movie', movieCreateValidation(), validate, createMovie)

export default router