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

exports.updateAgent = async (req, res) => {
	const id = { _id: req.params.id };
	const update = {
		agent_name: req.body.agent_name,
		agent_title: req.body.agent_title,
		agent_number: req.body.agent_number,
		agent_email: req.body.agent_email,
		agent_facebook: req.body.agent_facebook,
		agent_linkend: req.body.agent_linkend,
		agent_twitter: req.body.agent_twitter,
		agent_instagram: req.body.agent_instagram,
		agent_skype: req.body.agent_skype,
		agent_description: req.body.agent_description,
		experience: req.body.experience,
		fees: req.body.fees,
		agent_image: req.body.agent_image,
	};
	try {
		const agentUpdate = await Agents.findOneAndUpdate(id, update, {
			new: true,
		});
		res.status(200).json({
			data: agentUpdate,
			message: "Agent update successfully",
		});
	} catch (err) {
		res.status(500).json({
			message: "Agent not updated",
		});
	}
};
