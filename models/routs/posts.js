const express = require('express');
const Posts = require('../posts');

const router = express.Router();

//save posts

router.post('post/save',(req,res) =>{

    let newPost = new Posts(req.body);

    newPost.save((err) =>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"posts saved successfully"
        })
    })
})

module.exports = router;