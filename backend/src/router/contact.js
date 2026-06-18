import { contactController } from "../controller/contact"

const express =require("express")
const router= express.Router()

router.post("/enqury",contactController)

export default router