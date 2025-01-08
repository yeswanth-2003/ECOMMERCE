const mongoose = require('mongoose');

const categorySchema=new mongoose.Schema({
  name: 
  { type: String,
    required: true
  },
  parent: {
    type:mongoose.Schema.Types.ObjectId,
    ref:'category',
    default:null
  },
  description:{
    type:String,
    default:"",
  },
  Image:{
    type:String,
    default:"",
  },
  isTopLevel:{
    type:Boolean,
    default:false,
  },
})

const Category = mongoose.model('Category', categorySchema);
module.exports=Category;