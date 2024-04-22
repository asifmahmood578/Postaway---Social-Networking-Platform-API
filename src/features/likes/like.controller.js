import LikeModel from "./like.model.js";

export default class LikeController{

    getLikes(req, res){
        const postID = parseInt(req.params.id);
        const likes = LikeModel.get(postID);
         return res.status(200).send(likes);
    }

    // toggleLikes(req,res,next){

    //     try{
    //     const userID = req.userID;
    //     const postID = parseInt(req.params.id);
    //     const result = LikeModel.toggle(userID, postID);
            
    //       return res.status(200).send(result);
    //    } 
    //   catch(err){
            
    //   }     
    toggleLikes(req, res) {
        const postId = req.params.id;
        const toggleResult = LikeModel.toggleLike(postId);
        res.status(200).send(toggleResult);
    }
}