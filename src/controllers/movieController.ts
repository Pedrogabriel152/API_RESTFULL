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
        Logger.error(`Error no sistema: ${error.message}`) 
        return res.status(500).json({
            message: "Por favor, tente mais tarde!"
        })
    }
}

export async function findMovieById(req: Request, res: Response) {

    try {

        const {id} = req.params;
        const movie = await MovieModel.findById(id)

        if(!movie) {
            return res.status(404).json({
                message: 'Filme não existe'
            })
        }

        return res.status(200).json({
            movie
        })

        
    } catch (error: any) {
        Logger.error(`Error no sistema: ${error.message}`) 
        return res.status(500).json({
            message: "Por favor, tente mais tarde!"
        })
    }

} 

export async function getAllMovies(req: Request, res: Response) {

    try {

        const movies = await MovieModel.find()

        if(!movies) {
            return res.status(200).json({
                message: "Não existe filme cadastrados no sitema"
            })
        }

        return res.status(200).json({
            movies
        })

        
    } catch (error: any) {
        Logger.error(`Error no sistema: ${error.message}`) 
        return res.status(500).json({
            message: "Por favor, tente mais tarde!"
        })
    }

}

export async function removieMovie(req: Request, res: Response) {

    try {

        const {id} = req.params;
        const movie = await MovieModel.findById(id)

        if(!movie) {
            return res.status(404).json({
                message: 'Filme não existe'
            })
        }

        await movie.delete()

        return res.status(200).json({
            message: "Filme removido com sucesso"
        })

        
    } catch (error: any) {
        Logger.error(`Error no sistema: ${error.message}`) 
        return res.status(500).json({
        message: "Por favor, tente mais tarde!"})
    }

}

export async function updateMovie(req: Request, res: Response) {

    try {

        const {id} = req.params;
        const { title, rating, description, director, stars, poster } = req.body

        const data = {
            title,
            rating,
            description,
            director,
            stars,
            poster
        }

        
        const movie = await MovieModel.findById(id)

        if(!movie) {
            return res.status(404).json({
                message: 'Filme não existe'
            })
        }

        await MovieModel.updateOne({_id: id}, data)

        return res.status(200).json({
            message: "Filme atualizado com sucesso",
            data
        })

        
    } catch (error: any) {
        Logger.error(`Error no sistema: ${error.message}`) 
        return res.status(500).json({
        message: "Por favor, tente mais tarde!"})
    }

}