const express = require("express");
const router = express.Router();

const {
	addRequirement,
	getRequirement,
	getRequirementByEmail,
	deleteRequirement,
} = require("../controllers/requirementController");

router.post("/addRequirement", addRequirement);
router.get("/getRequirement", getRequirement);
router.get("/getRequirementByEmail/:email", getRequirementByEmail);
router.delete("/deleteRequirement/:id", deleteRequirement);

module.exports = router;
