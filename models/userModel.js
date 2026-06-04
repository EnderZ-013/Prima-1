const mongoose = require ('mongoose')
const userSchema = mongoose.Schema (
{
 name : {
    type: String,
    required: [true, 'Kerkohet Emri']

 },
  email : {

type : String ,
required : [true, 'Kerkohet Email']

  },
  password:{

type : String ,
required : [true, 'Kekohet Password '],

  },

},
{timestamps: true}
)

module .exports = mongoose.model('User',userSchema)