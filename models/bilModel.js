var mongoose = require("mongoose");

var BilSchema = new mongoose.Schema(
  {
    color: String,
    brand: String,
    price: String,
    model: String,
    about: String,
  },
  {
    collection: "bilar",
  }
);

module.exports = mongoose.model("bilModel", BilSchema);
