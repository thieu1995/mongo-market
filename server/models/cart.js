const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cartSchema = new Schema({
  userId: {type: Schema.Types.ObjectId, ref: "User"},
  products: [
    {
      productId: {type: Schema.Types.ObjectId, ref: "Product"},
      quantity: {type: Number}
    }
  ]
});

module.exports = mongoose.model("Cart", cartSchema);

