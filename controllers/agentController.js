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
