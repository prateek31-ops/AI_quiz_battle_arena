const express = require("express");
const router = express.Router();

const generateRoomCode = () => {
    return Math.random().toString(36).substring(2, 8).toUpperCase();
};

router.post("/create", (req, res) => {
    const roomCode = generateRoomCode();

    res.json({
        success: true,
        roomCode,
    });
});

module.exports = router;