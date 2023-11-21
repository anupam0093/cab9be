import { Router } from "express";
import {  handleSuperadminController } from "../../controllers/superadmin";
const router = Router();


// --------------------------------- SUPERADMIN ROUTES --------------------------------------- 
router.post("/signup", handleSuperadminController)


export default router;
