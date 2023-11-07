import { Router } from "express";
import { isVerified } from "../../middlewares/utils";
import ROLE from "../../config/roles";
import { handleAdminController } from "../../controllers/admin";
import { handleNewCustomer } from "../../controllers/admin/customer";
const router = Router();

// --------------------------------- ADMIN ROUTES --------------------------------------- 
router.post("/signup", isVerified([ROLE.superadmin]), handleAdminController);


router.post("/new-customer", isVerified([ROLE.admin]), handleNewCustomer)








export default router;
