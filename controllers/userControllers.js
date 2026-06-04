const asyncHandler = require ('express-async-handler');

const registerUser= asyncHandler(async (req,res) => {
res.json({ message: 'Perdoruesi u rregjistrua me sukses'})
})

const loginUser= asyncHandler(async (req,res) => {
res.json({ message: 'Hyrja me Sukses '})
})

const getCurrentUser= asyncHandler(async (req,res) => {
res.json({ message: 'Perdoruesi u rregjistrua me sukses'})
})

module.exports = {registerUser,loginUser,getCurrentUser}