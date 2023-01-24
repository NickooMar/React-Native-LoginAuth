const express = require("express");

const router = express.Router();

const {
  loginUser,
  handleNewUser,
} = require("../controllers/users.controllers");

router.post("/login", loginUser);
router.post("/register", handleNewUser);

module.exports = router;
