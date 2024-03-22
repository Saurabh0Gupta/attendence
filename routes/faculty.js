const mongoose=require('mongoose');
const plm=require('passport-local-mongoose')
const facultySchema= mongoose.Schema({
  username:String,
  email:String,
  Department:String,
  employId:{
    type:String,
    unique:true,
  },
  role:String
})
facultySchema.plugin(plm)
module.exports=mongoose.model('faculty',facultySchema);