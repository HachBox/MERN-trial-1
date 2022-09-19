import express from "express"
import cors from "cors"
import restaurants from "./api/restautants.route.js"

const app = express() //used to make the server

app.use(cors())
app.use(express.json()) 

app.use("/api/v1/restaurants", restaurants) //api route, version
app.use("*", (req, res) => res.status(404).json({ error: "not found"}))

export default app //export this