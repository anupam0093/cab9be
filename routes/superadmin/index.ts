import { Router } from "express";
import { handleAdminLogin, handleSuperadminController } from "../../controllers/superadmin";
const router = Router();


// --------------------------------- SUPERADMIN ROUTES --------------------------------------- 
router.post("/signup", handleSuperadminController)
router.post("/signin", handleAdminLogin)


// router.get("/profile", isVerified([ROLE?.superadmin]), handleProfile)

export default router;
