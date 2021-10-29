const HireAgent = require('../models/hireAgentModel');

exports.addHireAgents = async (req, res)=>{
    const { 
        agent_key,
        agent_name,
        agent_title,
        fees,
        agent_image,
        user_email,
        agent_email
    }= req.body

    try{
        const hireAgentAdd = new HireAgent({
            agent_key,
            agent_name,
            agent_title,
            fees,
            agent_image,
            user_email,
            agent_email
        })
        await hireAgentAdd.save()
            res.status(200).json({
                data: hireAgentAdd,
                message: 'Hire agent added successfully'
            });
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
}

exports.getHireAgent = async (req, res)=>{
    try{
        const hireList = await HireAgent.find({})
        res.status(200).json({ 
            data:hireList,
            message: "Hire list get successfully"
        })
    }
    catch(err){
        res.status(500).json({ message:"Something went wrong.."})
    }
}

exports.getHireByUser = async (req, res)=>{
    try{
        const hireList = await HireAgent.find({user_email: req.params.email})
        res.status(200).json({ 
            data:hireList,
            message: "Hire list get successfully"
        })
    }
    catch(err){
        res.status(500).json({ message:"Something went wrong.."})
    }
}

exports.getHireByAgent = async (req, res)=>{
    try{
        const hireList = await HireAgent.find({agent_email: req.params.email})
        res.status(200).json({ 
            data:hireList,
            message: "Hire list get successfully"
        })
    }
    catch(err){
        res.status(500).json({ message:"Something went wrong.."})
    }
}

exports.deleteHire = async (req, res)=>{
    try{
        const hireList = await HireAgent.deleteOne({_id: req.params.id})
        res.status(200).json({ 
            data:hireList,
            message: "Hire list deleted successfully"
        })
    }
    catch(err){
        res.status(500).json({ message:"Something went wrong.."})
    }
}