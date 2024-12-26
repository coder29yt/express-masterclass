// 1ST METHOD TO GET ROUTER
// const express = require("express");
// const router = express.Router();

// 2ND METHOD TO GET ROUTER
const router = require("express").Router();
const { hello, getData } = require("../controllers/authController");

router.get("/hello", hello);
router.get("/getData", getData);

module.exports = router;
