import express from 'express';
// import swagger,{serve} from 'swagger-ui-express';
import swaggerUi from 'swagger-ui-express'

// import apiDocs from './swagger.json' assert {type:'json'};
import apiDocs from './Newswagger.json' assert{type:'json'};
import jwtAuth from './src/middlewares/jwt.middleware.js';
import {ApplicationError} from './error-handler/applicationError.js';
import loggerMiddleware from './src/middlewares/logger.middleware.js';
import userRouter from './src/features/user/user.routes.js';
import likeRouter from './src/features/likes/like.routes.js';
import commentRouter from './src/features/comments/comment.routes.js';
import postRouter from './src/features/posts/post.routes.js';
import connectToMongoDB from './src/config/mongodb.js';
import { assert } from 'console';
import { type } from 'os';

const app=express();


app.use(express.json());
// app.use('/api/docs',swaggerUi.serve,swaggerUi.setup(apiDocs));
app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(apiDocs));
app.use(loggerMiddleware);

app.use('/api/users',userRouter);
app.use('/api/posts',jwtAuth,postRouter);
app.use('/api/comments',jwtAuth,commentRouter);
app.use('/api/likes',jwtAuth,likeRouter);

app.get('/',(req,res)=>{
    res.send('Welcome to social networking APIs ');
});

app.use((err,req,res,next)=>{
    if(err instanceof ApplicationError){
        res.status(err.code).send(err.message);
    }
    // server error
    res.status(500).send('Something went wrong , Please try later.');
})

app.use((req, res) =>{
    res.status(404).send("API not found!..Please check our documentation for more information at localhost:5000/api/docs/")
});

app.listen(5000,()=>{
    console.log('Server is running on port 5000');
    connectToMongoDB();
});