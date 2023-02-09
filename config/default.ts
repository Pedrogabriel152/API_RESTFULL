
const dbUser = process.env.DB_USER
const dbPass = process.env.DB_PASS

export default {
    port: 5000,
    dbUri: `mongodb+srv://${dbUser}:${dbPass}@cluster0.srtwcg5.mongodb.net/API_REST_FUll?retryWrites=true&w=majority`,
    env: "development"
}