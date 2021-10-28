const express = require("express");
const router = express.Router();

const {
	propertiesAdd,
	getAllProperties,
	searchProperties,
	specificProperties,
	deleteProperties,
	updateProperties,
	findPropertiesByEmail
} = require("../controllers/propertiesController");

router.post("/addProperty", propertiesAdd);
router.get("/allProperty", getAllProperties);
router.get("/search/:name", searchProperties);
router.get("/findProperties/:id", specificProperties);
router.get("/findPropertiesByEmail/:email", findPropertiesByEmail);
// router.get("/findProperties/:id", specificProperties);
router.delete("/deleteProperties/:id", deleteProperties);
router.patch("/updateProperties/:id", updateProperties);

module.exports = router;
