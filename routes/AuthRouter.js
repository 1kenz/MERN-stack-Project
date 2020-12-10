const express = require("express");

const router = express.Router();

/**
 * @route  POST /
 * @desc   Register endpoint
 * @access Public *
 */

router.post("/register", (req, res) => {
  //TODO: Register func.
  res.send("Register Completed");
});

/**
 * @route  POST /api/auth/login
 * @desc   Login endpoint
 * @access Private
 */

router.post("/login", (req, res) => {
  res.send("Login Completed");
});

module.exports = router;
