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