const mongoose = require('mongoose')

const BookSchema = new mongoose.Schema({
  name : {
    type:String,
    required:[true,'Please provide book name'],
    maxlength:30
  },
  author:{
    type:String,
    required:[true,`Please  author's name `],
    maxlength:20
  },
  ratings:{
    type:Number,
    required:[true,`Please  provide ratings `],
  },
  description:{
    type:String,
    required:[true,'Please provide description'],
    maxlength:1000
  },
  price:{
    type:Number,
    required:[true,`Please  provide price `],
  },
  language:{
    type:String,
    required:[true,`Please  provide language `],
    maxlength:10
  },
  category:{
    type: String,
    enum : ['finance','self-help','sci-fi','fantasy','thrillers','others'],
    default: 'other'
  },
  image:{
    public_id:{
      type:String,
      required:true
    },
    url:{
      type:String,
      required:true
    }
  },
  stock: {
    type: Number,
    required: [true, "Please Enter Book Stock"],
    maxLength: [3, "Stock cannot exceed 3 characters"],
    default: 1,
  },
  createdBy:{
    type:mongoose.Types.ObjectId,
    ref:'User',
    required:[true,'Please provide user']
  },
})

module.exports = mongoose.model('Book',BookSchema);