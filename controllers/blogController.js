const mongoose = require("mongoose");
const blogModel = require('../models/blogModel');
const userModel = require('../models/userModel');

// getting all blogs
const getAllBlogsController = async (req,res) => {
    try{
        const blogs = await blogModel.find({}).populate("user");
        if(!blogs){
            return res.status(500).send({
                success: false,
                message: "no Blogs Found",
            });
        }
        return res.status(200).send({
            success: true,
            BlogCount: blogs.length,
            message: "All blogs List",
            blogs,
        });

    } catch(error){
        console.log(error);
        return res.status(500).send({
            success: false,
            message: "error while getting Blogs" ,
            error,
        });
    }
};

const createBlogController = async (req,res) => {
    try {
        const {title, description,image, hashtags, user} = req.body;
        //validation
        if(!title || !description || !image ||!user){
            return res.status(400).send({
                success: false,
                message: "please Provide all fields",
            });
        }

        const existingUser = await userModel.findById(user);
        if(!existingUser){
            return res.status(404).send({
                success: false,
                message: "User not found",
            });
        }

        const newBlog = new blogModel({title, description,image, hashtags, user});
        const session = await mongoose.startSession();
        session.startTransection();
        await newBlog.save({session});
        existingUser.blogs.push(newBlog);
        await existingUser.save({session});
        await session.comitTransaction();
        await newBlog.save();
        return res.status(201).send({
            success: true,
            message: "Blog created",
            newBlog,
        });

    } catch(error){
        console.log(error);
        return res.status(500).send({
            success: false,
            message: "cannot create a blog",
            error,
        });
    }

};

const updateBlogController = async (req,res) => {
    try{
        const {id} = req.params;
        const {title, description, image, hashtags} = req.body;
        const blog = await blogModel.findByIdAndUpdate(
            id,
            {...req.body},
            {new: true}
        );
        return res.status(200).send({
            success: true,
            message: "blog updated",
            blog,
        });

    } catch (error){
        console.log(error);
        return res.status(400).send({
            success: false,
            message: "cannot update",
            error,
        });
    }
};

const deleteBlogController = async (req,res) => {
    try{
        const blog = await blogModel
        .findByIdAndDelete(req.params.id)
        .populate("user");
        await blog.user.blogs.pull(blog);
        await blog.user.save();
        return res.status(200).send({
            success: true,
            message: "blog deleted",
        });
    } catch (error){
        console.log(error);
        return res.status(400).send({
            success: false,
            message: "cannot delete",
            error,
        });
    }
};

const userBlogController = async (req,res) => {
    try{
        const userBlog = await userModel.findById(req.params.id).populate("blogs");
        if(!userBlog){
            return res.status(404).send({
                success: false,
                message: "blogs not found",
            });
        }
        return res.status(200).send({
            success: true,
            message: "user Blogs",
            userBlog,
        });
    } catch (error){
        console.log(error);
        return res.status(400).send({
            success: false,
            message: "cannot fetch user blog",
            error,
        });
    }
}

const getBlogByIdController = async (req,res) => {
    try{
        const {id} = req.params;
        const blog = await blogModel.findById(id);
        if(!blog){
            return res.status(400).send({
                success: false,
                message: "blog not found",
            });
        }
        return res.status(200).send({
            success: true,
            message: "fetched single blog",
            blog,
        });
    } catch (error){
        console.log(error);
        return res.status(400).send({
            success: false,
            message: "cannot get blog",
            error,
        });
    }
};

module.exports = {getAllBlogsController, createBlogController, updateBlogController,
    deleteBlogController,userBlogController, getBlogByIdController
};


