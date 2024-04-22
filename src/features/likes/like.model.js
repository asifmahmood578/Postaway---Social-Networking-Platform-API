import {ApplicationError} from '../../../error-handler/applicationError.js';
import PostModel from "../posts/post.model.js";
import UserModel from "../user/user.model.js";
import CommentModel from "../comments/comment.model.js";

export default class LikeModel{

    constructor(postID,userLikes){
        this.postID=postID;
        this.userLikes=userLikes;
    }

    static get(postID){
        const post = PostModel.get(postID);
        if(!post){
            throw new ApplicationError('Post not found',404);
        }
    const postLikes= likes.filter((l) => l.postID == postID);
    const totalLikes = postLikes.map((like) => like.userLikes.length);
    return {totalLikes};
    }

    static toggleLike(postId) {
        const existingLikeIndex = likes.findIndex(like => like.postID == postId);
        if (existingLikeIndex !== -1) {
            // Post is already liked, so remove the like
            likes.splice(existingLikeIndex, 1);
            return { message: `Like for post ID ${postId} removed.`, action: "removed" };
        } else {
            // Post is not liked, so add a like
            const newLike = new LikeModel(postId,likes.length + 1); // Assuming user ID is 1 for simplicity
            likes.push(newLike);
            return { message: `Like for post ID ${postId} added.`, action: "added" };
        }
    }
}


let likes = [
    new LikeModel(1,[1,3,4]),
    new LikeModel(2,[1,2,4]),
    new LikeModel(3, [2,3,1,4]),
];