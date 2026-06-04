<<<<<<< HEAD
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
=======
const mongoose = require('mongoose');

const userSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'Please add the user name'],
        },

        email: {
            type: String,
            required: [true, 'Please add the user email'],
            unique: [true, 'Email address already taken'],
        },

        password: {
            type: String,
            required: [true, 'Please add the user password'],
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model('User', userSchema);
>>>>>>> 30b6188a690a815cbeb90b1ad82b6649f9070bac
