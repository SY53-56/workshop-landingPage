
const contactModel= require("../model/contactModel")

export const contactController = async(req,res)=>{
    try{
        const {name,email,phone} = req.body
        if(!name && !email && !phone){
            res.status(401).json({message:"please file the form"})
            return
        }
        const email = contactModel.find({email}) 
        if(email){
            res.status(401).json({message:"you have already enrolled"})
            return 

        }   
         
        const  contact = contactModel.create({
        name:name,
        email:email,
        phone:phone
        })

    }catch(e){
        res.status(500).json({message:e})
    }
}