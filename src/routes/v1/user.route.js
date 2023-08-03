const express = require("express");
const validate = require("../../middlewares/validate");
const userValidation = require("../../validations/user.validation");
const userController = require("../../controllers/user.controller");
const auth = require("../../middlewares/auth");

const router = express.Router();

const validateMongoId = validate(userValidation.getUser);
const authenticate = auth();

// TODO: CRIO_TASK_MODULE_UNDERSTANDING_BASICS - Implement a route definition for `/v1/users/:userId`
router.get("/:userId",authenticate,validateMongoId,userController.getUser);






router.put(
  "/:userId",
  auth(),
  validate(userValidation.setAddress),
  userController.setAddress
);

module.exports = router;
