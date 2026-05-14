const mongoose = require("mongoose");
const taskSchema = mongoose.Schema(
 {
 text: {
 type: String,
 required: [true, "Shto Ndonjë gjë"],
 },
},
 {
timestamps: true,
}
);
module.exports = mongoose.model("Task", taskSchema);
