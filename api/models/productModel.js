const mongoose = require("mongoose");
const Schema = mongoose.Schema;

/********--USER MODEL--********/

const productSchema = Schema(
  {
    _id: Schema.Types.ObjectId,
    title: { type: String, required: true },
    category: { type: String, required: true },
    description: { type: String, required: true },
    brand: { type: String, required: true },
    price: { type: Number, required: true },
    gender: { type: String, required: true },
    images: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);
