import "reflect-metadata"
import "express-async-errors"
import express  from 'express'
import { userRoutes } from "./routes/user.routes"
import { contactRoutes } from "./routes/contact.routes"
import { loginRoute } from "./routes/login.routes"
import cors from "cors"
const app = express()

app.use(express.json())

app.use(cors(
    {
        origin: "http://localhost:5174"
    }
))
app.use("/users", userRoutes)
app.use("/contact", contactRoutes)
app.use("/login", loginRoute)



export default app  