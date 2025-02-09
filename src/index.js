// require('dotenv').config({path:'./env'})
import dotenv from "dotenv"
import connectdb from "./db/db.js";

dotenv.config({
    path: './env'
})


connectdb()









// (async () =>{
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URL}/${db_name}`)
//     } catch (error) {
//         console.error("Error",error)
//         throw err
//     }
// })()