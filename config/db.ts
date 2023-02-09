import mongoose from "mongoose";
import config from 'config'
import Logger from "./logger";

async function connect() {
    
    const dbUri = config.get<string>("dbUri")

    try {

        await mongoose.connect(dbUri)
        Logger.info("Conectou ao banco")
        
    } catch (error: any) {
        
        Logger.error("Nao foi possivel conectar")
        Logger.error(`Erro: ${error}`)

        process.exit(1)

    }
}

export default connect