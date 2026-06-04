<<<<<<< HEAD
const mongoose = require ('mongoose')

const connectDB = async () => {

const conncet = await mongoose.connect(process.env.MONGO_URI)
console.log( 'MongoDB Connected': $(mongoose.connect.connectIon.host))
}

catch(err)  {

console.log(err)
process.exit(1)
}
}

module.exports =connect.database
=======
const mongoose = require('mongoose')
const connectDB = async () => {
try {
const connect = await mongoose.connect(process.env.MONGO_URI)
 console.log(`MongoDB Connected: ${connect.connection.host}`)
} catch (err) {
console.log(err)
process.exit(1)
 }
}
module.exports = connectDB
>>>>>>> 30b6188a690a815cbeb90b1ad82b6649f9070bac
