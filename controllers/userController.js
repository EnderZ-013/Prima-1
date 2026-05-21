const asyncHandler = require('express-async-handler');
const bcrypt = require('bcryptjs');
const User = require('../models/userModel');
const jwt = require('jsonwebtoken');

const registerUser = asyncHandler(async (req, res) => {

    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        res.status(400);
        throw new Error('All fields are mandatory');
    }

    if (user) {
    res.status(201).json({
        _id: user.id,
        name: user.name,
        email: user.email,
        token: generateToken(user._id),
    });
}

    // Kontrollo nese user ekziston
    const userAvailable = await User.findOne({ email });

    if (userAvailable) {
        res.status(400);
        throw new Error('User already exists');
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    console.log(hashedPassword);

    // Krijo user
    const user = await User.create({
        name,
        email,
        password: hashedPassword,
    });

    if (user) {
        res.status(201).json({
            _id: user.id,
            email: user.email,
        });
    } else {
        res.status(400);
        throw new Error('User data is not valid');
    }
});
const generateToken = (id) => {
    return jwt.sign(
        { id },
        process.env.JWT_SECRET,
        {
            expiresIn: '5d',
        }
    );
};

const loginUser = asyncHandler(async (req, res) => {

    const { email, password } = req.body;

    // kontrollo userin
    const user = await User.findOne({ email });

    // krahaso passwordin
    if (user && (await bcrypt.compare(password, user.password))) {

        res.status(200).json({
            _id: user.id,
            name: user.name,
            email: user.email,
        });

        res.status(200).json({
    _id: user.id,
    name: user.name,
    email: user.email,
    token: generateToken(user._id),
});

    } else {
        res.status(400);
        throw new Error('Invalid email or password');
    }
});

const getCurrentUser = asyncHandler(async (req, res) => {
    res.json({ message: 'Current user data' })
});

module.exports = {
    registerUser,
    loginUser,
    getCurrentUser
};