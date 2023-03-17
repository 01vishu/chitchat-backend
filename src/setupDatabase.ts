import mongoose from "mongoose";

export default () => {
  const connect = () => {
    mongoose
      .connect("mongodb://127.0.0.10:27017/chitchat")
      .then(() => {
        console.log("DB connected!!");
      })
      .catch((error) => {
        console.log("error", error);
        return process.exit(1);
      });
  };
  connect();
  mongoose.connection.on("disconnected", connect);
};
