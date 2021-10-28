const express = require("express");
const router = express.Router();

const {
	agentAdd,
	getAgent,
	singleAgent,
    deleteAgent,
    updateAgent
} = require("../controllers/agentController");

router.post("/addAgent", agentAdd);
router.get("/getAgent", getAgent);
router.get("/singleAgent/:id", singleAgent);
router.delete("/deleteAgent/:id", deleteAgent);
router.patch("/updateAgent/:id", updateAgent);

module.exports = router;
