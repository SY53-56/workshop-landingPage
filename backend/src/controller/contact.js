
const contactModel= require("../model/contactModel")

 const contactController = async(req,res)=>{
    try{
        const {name,email,phone} = req.body
        if(!name || !email || !phone){
            res.status(401).json({message:"please file the form"})
            return
        }
        const Existingemail =await contactModel.findOne({email}) 
        if( Existingemail){
            res.status(401).json({message:"you have already enrolled"})
            return 

        }   
         
        const  contact =await contactModel.create({
        name,
        email,
        phone
        })
        res.status(201).json({
  success: true,
  message: "Enquiry submitted successfully",
  contact
});

    }catch(e){
        res.status(500).json({message:e})
    }
}
module.exports = { contactController };