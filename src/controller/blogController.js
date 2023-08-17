const  BlogModel = require('../model/blogModel')
// import BlogModel from "../model/blogMOdel"

exports.createBlog = async (req, res) => {
    try {
        const data = req.body
        const result = await BlogModel.create(data)

        res.status(200).json({status:"blog create success",data:result})

    } catch (error) {
        res.status(400).json({status:"Blog create failed",error:error.message})
    }
}

exports.blogList = async (req, res) => {
     try {
        const result = await BlogModel.find({})

        res.status(200).json({status:"Blog list found success",data:result})

    } catch (error) {
        res.status(400).json({status:"Blog found failed",error:error.message})
    }
}

exports.getBlog = async (req, res) => {
    let query=req.params.id
     try {
        const result = await BlogModel.findById({_id:query})

        res.status(200).json({status:"Blog  found success",data:result})

    } catch (error) {
        res.status(400).json({status:"Blog found failed",error:error.message})
    }
}

exports.updateBlog = async (req, res) => {
    try {
        let query=req.params.id
        let data = req.body
        const result = await BlogModel.findByIdAndUpdate({_id:query},data)

        res.status(200).json({status:"blog update success",data:result})

    } catch (error) {
        res.status(400).json({status:"Blog update failed",error:error.message})
    }
}

exports.delete = async (req, res) => {
    try {
        let query = req.params.id
        
        await BlogModel.findByIdAndDelete({_id:query})

        res.status(200).json({status:"blog delete success"})

    } catch (error) {
        res.status(400).json({status:"Blog update failed",error:error.message})
    }
}