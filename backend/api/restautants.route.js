import express from "express" 

const router = express.Router() //access to express router

router.route("/").get((req, res) => res.send("hello world")) //one route so far, demonstration. root url

export default router 