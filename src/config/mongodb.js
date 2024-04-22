import { MongoClient } from "mongodb";

const url= "mongodb://localhost:27017";
const url1 = "mongodb://127.0.0.1:27017/ecomdb";


const connectToMongoDB = ()=>{
    MongoClient.connect(url1)
    .then(client=>{
        console.log("Mongodb is connected");
    })
    .catch(err=>{
        console.log(err);
    })
}

export default connectToMongoDB;