const mongoose = require('mongoose');
const Property = require('../models/properties');

exports.propertiesAdd = async (req, res) => {
    try {
        let number = Math.random() * 10000000000;
        let floorNumber = Math.floor(number);
        const keys = `key_${floorNumber}`;
        const {property_for,
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
            image_one,
            image_two,
            image_three} = req.body;

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
            image_one,
            image_two,
            image_three,
            key:keys
        })
        await addProperties.save()
        res.status(200).json({
            data:addProperties,
            message: 'signup successfully',
        });

    } catch (err) {
        res.status(500).json({
            message: 'something error find!!!',
        });
    }
}

exports.getAllProperties = async (req, res) => {
    try {
        const allProperty = await Property.find({})
        res.status(200).json({
            data: allProperty,
            message: 'all properties found successfully'
        })
    } catch (err) {
        res.status(500).json({
            err: "properties not found something went wrong..."
        })
    }

}

exports.searchProperties = async (req, res) => {
    try {
        const collect = req.params.name;
        const regex = new RegExp(collect, 'i');

        const findProperties =await Property.find({ name: regex })
        res.status(200).json({
            data: findProperties,
            message: 'all properties found successfully'
        })
    } catch (err) {
        res.status(500).json({
            err: "properties not found something went wrong..."
        })
    }
}

exports.specificProperties = async(req, res) => {
    try {
        const specificProperty = Property.find({_id: req.params.id})
        res.status(200).json({
            data: specificProperty,
            message: 'properties found successfully'
        })
    } catch (err) {
        res.status(500).json({
            err: "properties not found something went wrong..."
        })
    }
}