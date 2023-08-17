const mongoose = require('mongoose')
const { Schema } = mongoose

const blogSchema = new Schema({
    title: {
        type: String,
         required: true
       
    },
    content: {
        type: String,
         required: true
   },
    author: {
        type: String,
         required: true
    },
    createdAt: {
         type:Date,
        default: Date.now() 
     }

}, { versionKey: false })

const BlogModel = mongoose.model('blogs', blogSchema)
module.exports = BlogModel;