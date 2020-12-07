const mongoose = require("mongoose");
const connectDB = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGODB_URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false
    });
    console.log(`DataBase Connected : ${connect.connection.host}`);
  } catch (e) {
    console.log(e);
  }
};

module.exports = connectDB;



