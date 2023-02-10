import { Router, Response, Request } from "express";
import { createMovie, findMovieById, getAllMovies, removieMovie, updateMovie } from "./controllers/movieController";

// Validations
import { validate } from "./middleware/handleValidation";
import { movieCreateValidation } from "./middleware/moviValidation";

const router = Router()

router.get("/test", (req: Request, res: Response) => {
    res.status(200).send("API Working")
})
router.post('/movie', movieCreateValidation(), validate, createMovie)
router.get('/movie/:id', findMovieById)
router.get('/allmovies', getAllMovies)
router.delete('/movie/:id/delete', removieMovie)
router.patch('/movie/:id', updateMovie)

export default router