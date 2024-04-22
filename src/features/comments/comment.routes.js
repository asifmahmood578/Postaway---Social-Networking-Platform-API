import  express  from "express";
import {CommentController} from './comment.controller.js';

const commentRouter = express.Router();
const commentControllers = new CommentController();

commentRouter.post('/addcomment/:id',commentControllers.addCommentByPostIdController);
commentRouter.get('/:id',commentControllers.getComment);
commentRouter.delete('/delete/:id',commentControllers.deleteComment);
commentRouter.put('/update/:id',commentControllers.updateComment);

export default commentRouter;