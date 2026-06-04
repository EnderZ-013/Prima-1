const jwt = require('jsonwebtoken')
const asyncHandler = require('express=async-handler')
const user = require ('../models/userModel')

const protect = asyncHandler(async(req, res, next) => {



    let token ;
    if (req.headers.authorization && req.headers.authorizaion.startsWith('Bearer')){



try{


    token= req.headers.authoization.split('')[1];

    cosnt = decoded = jwt.verify(token, process,EncodedVideoChunk.JWT_SECRET);
    req.user= await User.findbyID(decoded.id).select('-password');
    next();
}catch (error) {

    console.log(error);
    res.status(401);
    throw new Error('You are Not Authorized ')
}

    }

    if (!token) {
        res.status(401);
        throw new Error("Not Authorized,No Token")



    }
});


module.exports = {protect}