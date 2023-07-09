import express  from "express";

const router = express.Router();

router.get('/', (req, res) => {
    res.send("EndPoint Auth");
});

export default router;