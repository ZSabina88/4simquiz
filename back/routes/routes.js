const express = require("express");
const router = express.Router();
const cors = require("cors");
const UserModel = require("../models/winners");

//middleware
// router.use(
//     cors({
//         // origin: ["https://4simquiz-production.vercel.app"],
//         origin: ["http://localhost:5173"],
//         credentials: true,
//         // allowedHeaders: ['Content-Type', 'Authorization'],
//         methods: ["POST", "GET"]
//     })
// );

router.get("/", (req, res) => {
    res.json("Hello")
});

router.post("/contact", (req, res) => {
    UserModel.create(req.body)
        .then(winners => res.json(winners))
        .catch(err => res.json(err))
})

module.exports = router;
