const express = require("express");
const router = express.Router();

const {
	addHireAgents,
	getHireAgent,
	getHireByUser,
	getHireByAgent,
	deleteHire,
} = require("../controllers/hireAgentController");

router.post("/addHireAgents", addHireAgents);
router.get("/getHireAgent", getHireAgent);
router.get("/getHireByUser/:email", getHireByUser);
router.get("/getHireByAgent/:email", getHireByAgent);
router.delete("/deleteHire/:id", deleteHire);

module.exports = router;
