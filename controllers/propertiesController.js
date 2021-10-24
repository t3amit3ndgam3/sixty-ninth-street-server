const mongoose = require('mongoose');
const Property = require('../models/properties')


exports.propertiesAdd = async (req, res) => {
    try {
        let number = Math.random() * 10000000000;
        let floorNumber = Math.floor(number);
        const key = `key_${floorNumber}`;
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
            key:key
        })
        await addProperties.save()
        res.status(200).json({
            data:addProperties,
            message: 'signup successfully',
        });

    } catch (err) {
        res.status(500).json({
            message: 'signup error find!!!',
        });
    }
}