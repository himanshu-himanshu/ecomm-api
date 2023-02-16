const { addProductService } = require("../services/productService");

/**
 * -----------------------------------------------
 * Add Product Controller Function below
 * -----------------------------------------------
 */
exports.addProductFunction = async (req, res) => {
  try {
    return await addProductService(req, res);
  } catch (err) {
    return res.json({
      status: 500,
      success: false,
      message: err,
    });
  }
};

/**
 * -----------------------------------------------
 * Get All Products Controller Function below
 * -----------------------------------------------
 */
// exports.getAllProductsFunction = async (req, res) => {
//   try {
//     return await getAllProductsFunction(req, res);
//   } catch (err) {
//     return res.json({
//       status: 500,
//       success: false,
//       message: err,
//     });
//   }
// };
