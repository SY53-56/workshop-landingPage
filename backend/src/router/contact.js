
const {contactController} = require("../controller/contact")
const express =require("express")
const router= express.Router()

router.post("/enqury",contactController)

module.exports = router;