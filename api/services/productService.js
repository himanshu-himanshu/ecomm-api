const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

require("dotenv").config();
const Product = require("../models/productModel");
//const registerValidator = require("../validators/registerValidator");
//const loginValidator = require("../validators/loginValidator");

/**
 * -----------------------------------------------
 * Login Service Function below
 * -----------------------------------------------
 */
// const addProductService = async (req, res) => {
//   try {
//     const { email, password } = req.body;
//     //const { errors, isValid } = loginValidator(req.body);
//     // if (!isValid) {
//     //   return res.json({
//     //     status: 404,
//     //     success: false,
//     //     message: errors,
//     //   });
//     // }
//     User.findOne({ email: email })
//       .exec()
//       .then((user) => {
//         if (!user) {
//           return res.json({
//             success: false,
//             status: 404,
//             message: { email: "⚠ Email Not Registered" },
//           });
//         }

//         if (!bcrypt.compareSync(password, user.password)) {
//           return res.json({
//             success: false,
//             status: 404,
//             message: { password: "⚠ Wrong Password" },
//           });
//         }

//         const token = jwt.sign(
//           { name: user.username, email: user.email },
//           process.env.TOKEN_KEY
//         );

//         const userData = {
//           username: user.username,
//           email: user.email,
//           token: token,
//           createdAt: user.createdAt,
//           updatedAt: user.updatedAt,
//         };

//         return res.status(200).json({
//           success: true,
//           status: 200,
//           message: "User exists",
//           data: userData,
//         });
//       });
//   } catch (err) {
//     res.json({
//       status: 500,
//       success: false,
//       message: err,
//     });
//   }
// };

/**
 * -----------------------------------------------
 * Add Product Service Function below
 * -----------------------------------------------
 */
const addProductService = async (req, res) => {
  try {
    const { title, category, brand, price, description, gender, images } =
      req.body;
    //const { errors, isValid } = registerValidator(req.body);

    // if (!isValid) {
    //   return res.json({
    //     status: 404,
    //     success: false,
    //     message: errors,
    //   });
    // }

    // const usernameExist = await User.find({
    //   username: username,
    // });

    // if (usernameExist.length > 0) {
    //   return res.json({
    //     status: 404,
    //     success: false,
    //     message: { username: "⚠ Username already taken" },
    //   });
    // }

    // const userEmailExist = await User.find({
    //   email: email,
    // });

    // if (userEmailExist.length > 0) {
    //   return res.json({
    //     status: 404,
    //     success: false,
    //     message: { email: "⚠ Email already taken" },
    //   });
    // }

    let product = {
      _id: new mongoose.Types.ObjectId(),
      title: title,
      category: category,
      description: description,
      brand: brand,
      price: price,
      gender: gender,
      images: images,
    };

    new Product(product)
      .save()
      .then((result) => {
        res.status(200).json({
          success: true,
          message: "Registration succesfull",
          data: result,
        });
      })
      .catch((err) => {
        console.log("93", err);
        res.json({
          status: 500,
          success: false,
          message: err.message,
        });
      });
  } catch (err) {
    console.log("101", err);
    res.json({
      status: 500,
      success: false,
      message: err,
    });
  }
};

/********-- EXPORTS --********/

module.exports = {
  addProductService,
};
