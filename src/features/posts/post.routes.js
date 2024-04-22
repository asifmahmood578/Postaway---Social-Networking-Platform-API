import  express  from "express";
import PostController from './post.controller.js';
import { upload } from "../../middlewares/fileupload.middleware.js";


const postRouter = express.Router();
const postcontrollers = new PostController();

postRouter.get('/userpost',postcontrollers.getPostByUser);
postRouter.get('/:id',postcontrollers.getPost);
postRouter.get('/',postcontrollers.getAllPost);
postRouter.post('/create',upload.single('imageUrl'),postcontrollers.createPost);
postRouter.post('/filter',postcontrollers.filterPost);
postRouter.delete('/delete/:id',postcontrollers.deletePost);
postRouter.put('/update/:id',upload.single('imageUrl'),postcontrollers.updatePost);

export default postRouter;