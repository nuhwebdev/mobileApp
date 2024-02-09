var mongoose = require("mongoose");

var BilSchema = new mongoose.Schema(
  {
    color: String,
    brand: String,
    price: String,
  },
  {
    collection: "bilar",
  }
);

module.exports = mongoose.model("bilModel", BilSchema);
