<<<<<<< HEAD
const mongoose = require ("mongoose");
const taskSchema = mongoose.Schema(
{
text :{
    type: String,
    required: [ true, "Please add a text value"]


},

user : {
 type: mongoose.Schema.Types.ObjectId,
required: true,
ref:'User'


}

},
{

    timestamps: true,
}

);


module.exports = mongoose.model("Task",taskSchema);
=======
const mongoose = require("mongoose");
const taskSchema = mongoose.Schema(
 {
 text: {
 type: String,
 required: [true, "Shto Ndonjë gjë"],
 },
 user: {
type: mongoose.Schema.Types.ObjectId,
required: true,
ref: 'User'

 }
},
 {
timestamps: true,
}
);
module.exports = mongoose.model("Task", taskSchema);
>>>>>>> 30b6188a690a815cbeb90b1ad82b6649f9070bac
