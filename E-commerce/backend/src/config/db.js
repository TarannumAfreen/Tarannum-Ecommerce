const mongoose = require("mongoose");

const mongoDbUrl =
  "mongodb+srv://SalmaSanubar:Salma_549@salmacluster.y5azttk.mongodb.net/shoppingStyling";
const connectDb = () => {
  return mongoose.connect(mongoDbUrl);
};

module.exports = { connectDb };
