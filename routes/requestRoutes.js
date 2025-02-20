const express = require("express");
const {
  getAllRequests,
  getRequestById,
  addRequest,
  deleteRequest,
} = require("../controllers/requestController");

const router = express.Router();

router.get("/", getAllRequests);
router.get("/:uuid", getRequestById);
router.post("/", addRequest);
router.delete("/:uuid", deleteRequest);

module.exports = router;
