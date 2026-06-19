
const {contactController} = require("../controller/contact")
const express =require("express")
const router= express.Router()

router.post("/enquiry",contactController)

module.exports = router;