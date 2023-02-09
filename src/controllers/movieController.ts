import { Request, Response } from "express";

// Model
import { MovieModel } from "../models/Movie";

// Logger
import Logger from "../../config/logger";

export async function createMovie(req: Request, res: Response) {
    
    try {

        const { title, rating, description, director, stars, poster } = req.body

        const data = {
            title,
            rating,
            description,
            director,
            stars,
            poster
        }

        const movie = await MovieModel.create(data)
        return res.status(201).json({movie})
        
    } catch (error: any) {
        
    }

}