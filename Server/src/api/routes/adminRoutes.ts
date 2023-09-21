import express from "express";
import {
  addAdmin,
  getAllAdmin,
  updateAdmin,
} from "../controllers/adminController";

const router = express.Router();

router.post("/add-admin", addAdmin);
router.get("/get-all-admin", getAllAdmin);
router.put("/update-admin/:id", updateAdmin);

export default router;
