const mongoose = require("mongoose");
const Property = require("../models/properties");

exports.propertiesAdd = async (req, res) => {
	try {
		let number = Math.random() * 10000000000;
		let floorNumber = Math.floor(number);
		const keys = `key_${floorNumber}`;
		const {
			property_for,
			property_type,
			city,
			property_name,
			title,
			property_description,
			facing,
			property_size,
			price,
			price_is,
			bedroom,
			garages,
			balconies,
			bathroom,
			owner_name,
			owner_number,
			owner_gmail,
			user_email,
			image_one,
			image_two,
			image_three,
		} = req.body;

		const addProperties = new Property({
			property_for,
			property_type,
			city,
			property_name,
			title,
			property_description,
			facing,
			property_size,
			price,
			price_is,
			bedroom,
			garages,
			balconies,
			bathroom,
			owner_name,
			owner_number,
			owner_gmail,
			user_email,
			image_one,
			image_two,
			image_three,
			key: keys,
		});
		await addProperties.save();
		res.status(200).json({
			data: addProperties,
			message: "signup successfully",
		});
	} catch (err) {
		res.status(500).json({
			message: err.message,
		});
	}
};

exports.getAllProperties = async (req, res) => {
	try {
		const allProperty = await Property.find({});
		res.status(200).json({
			data: allProperty,
			message: "all properties found successfully",
		});
	} catch (err) {
		res.status(500).json({
			err: "properties not found something went wrong...",
		});
	}
};

exports.searchProperties = async (req, res) => {
	try {
		const collect = req.params.name;
		const regex = new RegExp(collect, "i");

		const findProperties = await Property.find({ name: regex });
		res.status(200).json({
			data: findProperties,
			message: "all properties found successfully",
		});
	} catch (err) {
		res.status(500).json({
			err: "properties not found something went wrong...",
		});
	}
};

exports.specificProperties = async (req, res) => {
	try {
		const specificProperty = await Property.find({ _id: req.params.id });
		res.status(200).json({
			data: specificProperty,
			message: "properties found successfully",
		});
	} catch (err) {
		res.status(500).json({
			err: "properties not found something went wrong...",
		});
	}
};

exports.findPropertiesByEmail = async (req, res) => {
	try {
		const propertyEmail = await Property.find({ user_email: req.params.email });
		res.status(200).json({
			data: propertyEmail,
			message: "properties found successfully",
		});
	} catch (err) {
		res.status(500).json({
			err: "properties not found something went wrong...",
		});
	}
};

exports.findMultipleProperties = async (req, res) => {
	const property_type = req.body.property_type;
	const property_for = req.body.property_for;
	const city = req.body.city;
	console.log(property_for, property_type, city);
	try {
		const propertyMultiFind = await Property.find({
			$and: [
				{ property_type: property_type },
				{ property_for: property_for },
				{ city: city },
			],
		});
		res.status(200).json({
			data: propertyMultiFind,
			message: "properties found successfully",
		});
	} catch (err) {
		res.status(500).json({
			err: "properties not found something went wrong...",
		});
	}
};

exports.deleteProperties = async (req, res) => {
	try {
		const propertiesDelete = await Property.deleteOne({ _id: req.params.id });
		res.status(200).json({
			data: propertiesDelete,
			message: "Properties Deleted successfully",
		});
	} catch (err) {
		res.status(500).json({
			message: "Properties list not found",
		});
	}
};

exports.updateProperties = async (req, res) => {
	const id = { _id: req.params.id };
	const updateData = {
		property_for: req.body.property_for,
		property_type: req.body.property_type,
		city: req.body.city,
		property_name: req.body.property_name,
		title: req.body.title,
		property_description: req.body.property_description,
		facing: req.body.facing,
		property_size: req.body.property_size,
		price: req.body.price,
		price_is: req.body.price_is,
		bedroom: req.body.bedroom,
		garages: req.body.garages,
		balconies: req.body.balconies,
		bathroom: req.body.bathroom,
		owner_name: req.body.owner_name,
		owner_number: req.body.owner_number,
		owner_gmail: req.body.owner_gmail,
		image_one: req.body.image_one,
		image_two: req.body.image_two,
		image_three: req.body.image_three,
	};
	try {
		const propertyUpdate = await Property.findOneAndUpdate(id, updateData, {
			new: true,
		});
		res.status(200).json({
			data: propertyUpdate,
			message: "property update successfully",
		});
	} catch (err) {
		res.status(500).json({
			message: "property not updated",
		});
	}
};
