
const Requirement = require('../models/requirementModel');

exports.addRequirement = async( req, res)=>{
    const {
        property_for,
        property_type,
        city,
        size,
        user_email
    } = req.body;
    try{
        const collectRequirement = new Requirement({
            property_for,
            property_type,
            city,
            size,
            user_email
        })
        await collectRequirement.save();
        res.status(200).json({
            data: collectRequirement,
            message: "Your requirement is successfully added"
        })
    }catch (err) {
		res.status(500).json({
			message: err.message,
		});
	}
}


exports.getRequirement = async( req, res) => {
	try {
		const getRequirement = await Requirement.find({});
		res.status(200).json({
			data: getRequirement,
			message: "done successfully",
		});
	} catch (err) {
		res.status(500).json({
			message: "Property list not found list not found",
		});
	}
};

exports.getRequirementByEmail = async( req, res) => {
	try {
		const getRequirement = await Requirement.find({user_email: req.params.email});
		res.status(200).json({
			data: getRequirement,
			message: "done successfully",
		});
	} catch (err) {
		res.status(500).json({
			message: "Property list not found list not found",
		});
	}
};


exports.deleteRequirement = async( req, res) => {
	try {
		const RequirementDelete = await Requirement.deleteOne({_id: req.params.id});
		res.status(200).json({
			data: RequirementDelete,
			message: "Delete successfully",
		});
	} catch (err) {
		res.status(500).json({
			message: "Property list not found list not found",
		});
	}
};