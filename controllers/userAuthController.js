const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const User = require('../models/userAuth');

//node fetch

const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));

//google

const { OAuth2Client } = require('google-auth-library');
const client = new OAuth2Client("518005766882-vsq4487p8hglk8n4nq751ckn2b78prnu.apps.googleusercontent.com")

// Signup function

exports.signup = async (req, res) =>{
    try {

        // checking email is already registered or not
        const userSignUp  = await User.findOne({email: req.body.email});
            if(userSignUp){
                res.status(404).json({
                    error: 'Email is already taken'
                })
            } else{

                // password hashing for security
                const hashPassword = await bcrypt.hash(req.body.password, 10);
                //taking user info
                const newUser = new User({
                    name: req.body.name,
                    email: req.body.email,

                    password: hashPassword,
                    phone: req.body.phone,
                    
                });

                // Save user Information
                await newUser.save();
                res.status(200).json({
                    newUser,
                    message: 'signup successfully',
                });
            }

    } catch(err) {
        res.status(500).json({
            message: 'signup error find!!!',
        });
    }
}

//SignIn Function

exports.signIn = async (req, res) => {
    try {

        //checking email is already registered or not
        const user = await User.find({ email: req.body.email });
        // console.log(user)
        // console.log(user[0]);

        //if user is registered?
        if (user && user.length > 0) {
            //compare this user password against hash password.
            const isValidPassword = await bcrypt.compare(req.body.password, user[0].password);
            //if password is valid then go to this condition.
            if (isValidPassword) {

                //generate jwt token 

                const token = jwt.sign(
                    {
                        name: user[0].name,
                        userId: user[0]._id,
                    },
                    process.env.JWT_SECRET,
                    {
                        expiresIn: '10d',
                    }
                );
                res.status(200).json({
                    
                    //saving the token & data.
                    token: token,
                    message: 'login successfully',
                    data: user[0]
                });
            } else {
                res.status(401).json({
                    error: 'authentication failed',
                });
            }
            // console.log(user[0]._id)
            // console.log(user[0].firstName);
        } else {
            res.status(401).json({
                error: 'authentication failed',
            });
        }
    } catch(err) {
        res.status(401).json({
            error: 'authentication failed',
        });
    }
};

exports.googlelogin = (req, res) => {
    const { tokenId } = req.body;
    client.verifyIdToken({ idToken: tokenId, audience: "518005766882-vsq4487p8hglk8n4nq751ckn2b78prnu.apps.googleusercontent.com" }).then(response => {
        const { email_verified, email, name } = response.payload;
        if (email_verified) {
            User.findOne({ email }).exec((err, user) => {
                if (err) {
                    return res.status(400).json({
                        error: "Something went wrong..."
                    })
                } else {
                    if (user) {

                        const token = jwt.sign(
                            {
                                name: user.name,
                                userId: user._id,
                                email: user.email,
                            },
                            process.env.JWT_SECRET,
                            {
                                expiresIn: '10d',
                            }
                        );
                        const { _id, name, email } = user
                        res.status(200).json({

                            //saving the token & data.
                            token: token,
                            message: 'login successfully complete',
                            user: { _id, name, email },
                        });
                    } else {
                        let password = email + process.env.JWT_SECRET;
                        let newUser = new User({ name, email, password });
                        newUser.save((err, data) => {
                            if (err) {
                                return res.status(400).json({
                                    error: "Something went wrong..."
                                })
                            }
                            const token = jwt.sign(
                                {
                                    name: data.name,
                                    userId: data._id,
                                    email: data.email,
                                },
                                process.env.JWT_SECRET,
                                {
                                    expiresIn: '10d',
                                }
                            );
                            res.status(200).json({

                                //saving the token & data.
                                token: token,
                                message: 'login successfully',
                                data: data,
                            });
                        })
                    }
                }
            })
        }
        console.log(response.payload);
    })
}


exports.facebooklogin = (req, res) => {
    const { accessToken, userID } = req.body;
    let urlGraphFacebook = `https://graph.facebook.com/v2.11/${userID}/?fields=id,name,email&access_token=${accessToken}`
    fetch(urlGraphFacebook, {
        method: 'GET',
    })
        .then(response => response.json())
        .then(response => {
            const { name, email } = response;
            User.findOne({ email }).exec((err, user) => {
                if (err) {
                    return res.status(400).json({
                        error: "Something went wrong..."
                    })
                }
                else {
                    if (user) {

                        const token = jwt.sign(
                            {
                                name: user.name,
                                userId: user._id,
                                email: user.email,
                            },
                            process.env.JWT_SECRET,
                            {
                                expiresIn: '10d',
                            }
                        );
                        const { _id, name, email } = user
                        res.status(200).json({

                            //saving the token & data.
                            token: token,
                            message: 'login successfully complete',
                            user: { _id, name, email },
                        });
                    } else {
                        let password = email + process.env.JWT_SECRET;
                        let newUser = new User({ name, email, password });
                        newUser.save((err, data) => {
                            if (err) {
                                return res.status(400).json({
                                    error: "Something went wrong..."
                                })
                            }
                            const token = jwt.sign(
                                {
                                    name: data.name,
                                    userId: data._id,
                                    email: data.email,
                                },
                                process.env.JWT_SECRET,
                                {
                                    expiresIn: '10d',
                                }
                            );
                            res.status(200).json({

                                //saving the token & data.
                                token: token,
                                message: 'login successfully',
                                data: data,
                            });
                        })
                    }
                }
            })
        });
}
