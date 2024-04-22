import { ApplicationError } from '../../../error-handler/applicationError.js';
import PostModel from '../posts/post.model.js';

export default class CommentModel{

    constructor(postID,comment,id){
        this.postID=postID;
        this.comment=comment;
        this.id=id;
    }

    // static add(postID,comment){
    //     console.log("eeeeee");
    //     // const commentPost = PostModel.getAll().find((item) => item.postID === postID);
    //     const posts = PostModel.getAll();
    //     // const post=PostModel.getAll();
    //     // console.log(post);
    //     // const commentPost = PostModel.getAll().find((post) => {
    //     //     console.log(`Checking postID: ${post.postID}`);
    //     //     return post.postID === postID;
    //     //   });
    //     console.log("eeeeee"+posts);
    //     if(!commentPost){
    //          throw new ApplicationError('Post not found', 404);
    //     }
    //     else{
    //         const postComment = new CommentModel(postID,comment);
    //         postComment.id=comments.length+1;
    //         comments.push(postComment);
    //         return postComment;
    //     }
    // }
    static addComment(postID, comment) {
        const newComment = new CommentModel(postID, comment,comments.length + 1);
        comments.push(newComment);
        return newComment;
    }


    static get(postID){
        return comments.filter((i)=> i.postID == postID);
    }

    static getById(id){
        return comments.filter((i)=>i.id == id);
    }

    static delete(id){
        const commentIndex=comments.findIndex((i)=> i.id == id);
        if(commentIndex == -1){
            throw new ApplicationError('comment not found',404);
        }
        else{
            comments.splice(commentIndex,1);
        }
    }

    static update(comment,id){
        const coomentobj = {comment,id};
        const index = comments.findIndex((i)=> i.id == coomentobj.id);
        comments[index]=coomentobj;
    }
}


let comments = [
    new CommentModel(1,'good pic',1),
    new CommentModel(2,'elegant person',2),
    new CommentModel(1,'Very useful coding challenge', 3),
    new CommentModel(3,'its very challenging to win', 4),
]