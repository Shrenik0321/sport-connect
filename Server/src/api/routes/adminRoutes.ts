import express from "express";
import { addAdmin, getAllAdmin } from "../controllers/adminController";

const router = express.Router();

router.post("/add-admin", addAdmin);
router.get("/get-all-admin", getAllAdmin);

export default router;
