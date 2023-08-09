import "reflect-metadata"
import "express-async-errors"
import express  from 'express'
import { userRoutes } from "./routes/user.routes"
import { contactRoutes } from "./routes/contact.routes"
import { loginRoute } from "./routes/login.routes"

const app = express()

app.use(express.json())

app.use("/users", userRoutes)
app.use("/contact", contactRoutes)
app.use("/login", loginRoute)



export default app  