const Agents = require("../models/agentModel");

exports.agentAdd = async (req, res) => {
	const {
		agent_name,
		agent_title,
		agent_number,
		agent_email,
		agent_facebook,
		agent_linkend,
		agent_twitter,
		agent_instagram,
		agent_skype,
		agent_description,
		experience,
		fees,
		agent_image,
	} = req.body;
	let number = Math.random() * 10000000000;
	let floorNumber = Math.floor(number);
	let keys = `${agent_skype}_${floorNumber}`;
	try {
		const addAgent = new Agents({
			agent_name,
			agent_title,
			agent_number,
			agent_email,
			agent_facebook,
			agent_linkend,
			agent_twitter,
			agent_instagram,
			agent_skype,
			agent_description,
			experience,
			fees,
			agent_image,
			key: keys,
		});
		await addAgent.save();
		res.status(200).json({
			data: addAgent,
			message: "Agent add successfully",
		});
	} catch (err) {
		res.status(500).json({
			message: err.message,
		});
	}
};

exports.getAgent = async (req, res) => {
	try {
		const agentList = await Agents.find({});
		res.status(200).json({
			data: agentList,
			message: "Agent Data done successfully",
		});
	} catch (err) {
		res.status(500).json({
			message: "Agent list not found",
		});
	}
};

exports.singleAgent = async (req, res) => {
	try {
		const singleAgent = await Agents.find({ _id: req.params.id });
		res.status(200).json({
			data: singleAgent,
			message: "Single Agent successfully get",
		});
	} catch (err) {
		res.status(500).json({
			message: "Agent list not found",
		});
	}
};

exports.deleteAgent = async (req, res) => {
	try {
		const agentDelete = await Agents.deleteOne({ _id: req.params.id });
		res.status(200).json({
			data: agentDelete,
			message: "Agent Deleted successfully",
		});
	} catch (err) {
		res.status(500).json({
			message: "Agent list not found",
		});
	}
};

// exports.updateAgent = async (req, res) => {
// 	const id = req.params.id;
// 	const updates = req.body;
// 	try{
// 		const agentUpdate = await Agents.findByIdAndUpdate(id,updates);
// 		res.status(200).json({
// 			data: agentUpdate,
// 			message: "Agent update successfully",
// 		});

// 	}catch (err) {
// 		res.status(500).json({
// 			message: err.message,
// 		});
// 	}
// }
exports.updateAgent = async (req, res) => {
	try {
		const {
			agent_name,
			agent_title,
			agent_number,
			agent_email,
			agent_facebook,
			agent_linkend,
			agent_twitter,
			agent_instagram,
			agent_skype,
			agent_description,
			experience,
			fees,
			agent_image,
		} = req.body;

		const previousData = await Agents.findByIdAndUpdate(
			{ _id: req.params.id },
			{
				agent_name: agent_name,
				agent_title: agent_title,
				agent_number: agent_number,
				agent_email: agent_email,
				agent_facebook: agent_facebook,
				agent_linkend: agent_linkend,
				agent_twitter: agent_twitter,
				agent_instagram: agent_instagram,
				agent_skype: agent_skype,
				agent_description: agent_description,
				experience: experience,
				fees: fees,
				agent_image: agent_image,
			},
			{ new: true, useFindAndModify: false }
		);
		res.status(200).json({
			data: previousData,
			message: "Agent updated successfully",
		});
	} catch (err) {
		res.status(500).json({
			message: "Agent not updated",
		});
	}
};
