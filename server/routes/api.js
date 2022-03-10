const express = require("express");
const router = express.Router();
const flagsController = require("../controllers/flagsController");
const streamController = require("../controllers/streamController");
const { validateNewFlag } = require("../validators/validators");
// will implement later
// const { validateSDKKey, validateNewFlag } = require("../validators/validators");

router.get("/flags", flagsController.getAllFlags);
// router.get("/flags", validateSDKKey, flagsController.getAllFlags);
router.get("/flags/:id", flagsController.getFlag);

router.get("/stream", streamController.handleNewConnection)

router.get("/status", streamController.status);

router.post("/flags", validateNewFlag, flagsController.createFlag, streamController.sendUpdate);

router.put("/flags/:id", flagsController.editFlag, streamController.sendUpdate);

router.delete("/flags/:id", flagsController.deleteFlag, streamController.sendUpdate);

module.exports = router;
