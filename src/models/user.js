const {Schema, model} = require ('mongoose');

const usersSchema= new Schema(
    {
    user: {type: String, required:true},
    password: {type: String, required:true},
    name: {type: String, required:true},
    lastname: {type: String, required:true},
},{
    timestamps:true,
    versionKey:false
})

module.exports = model("Users", usersSchema);