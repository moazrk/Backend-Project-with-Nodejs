
import connectDB from "./db/db.js";

import dotenv from "dotenv"

dotenv.config(
    {
        path:'./env '
    }
)

connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`server is listening on ${process.env.PORT}`)
    })
})
.catch((error) => {
    console.log("mongoDB connection failed!!!", error)
})
/*

    (async()=>{
        try {
           await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)

            app.on("errorr", (error)=>{
                console.log("Err:", error);
                throw error
            })

            app.listen(process.env.PORT, ()=>{
                console.log(`app is listening on port ${process.env.PORT}`)
            })
            
        } catch (error) {
            console.error("error:",error)
            throw err
 }
    })()            //this is an IAFE

    */
