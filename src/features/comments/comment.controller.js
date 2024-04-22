import CommentModel from "./comment.model.js";

export class CommentController{

    // addComment(req,res){
    //     const postID = req.params.id;
    //     const {comment} = req.body;
    //     const PostedComment = CommentModel.add(postID,comment);
    //     console.log("This is post comment"+PostedComment);
    //     res.status(201).send(PostedComment);
    // }
    addCommentByPostIdController(req, res) {
        // const userID = req.body.userId; 
        const postID = parseInt(req.params.id);
        const content = req.body.comment; 
        const newComment = CommentModel.addComment( postID, content);
        return res.status(201).send(newComment);
    }

    getComment(req,res){
        const postID = req.params.id;
        const  result = CommentModel.get(postID);
        res.status(200).send(result);
    }

    deleteComment(req,res){
        const id = req.params.id;
        CommentModel.delete(id);
        return res.status(200).send('comment is removed'); 
    }

    updateComment(req,res){
        const id= parseInt(req.params.id);
        const {comment} = req.body;
        CommentModel.update(comment,id);
        const updatedComment=CommentModel.getById(id);
        res.status(200).send(updatedComment);
    }

  
}