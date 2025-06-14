import mongoose from "mongoose";


const connectDB = async ()=> {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL,{
            useNewUrlParser:true,
            useUnifiedTopology:true,
        });
        console.log(`MOngo Connected : ${conn.connection.host}`);
    

    }
    catch(err){
        console.log(`Error:${err.message}`)
        process.exit(1);
    }
};


export default connectDB;