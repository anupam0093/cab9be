import { Router } from "express";
import { isVerified } from "../../middlewares/utils";
import ROLE from "../../config/roles";
import { handleAdminController } from "../../controllers/admin";
import { deleteCustomerByIdController, getAllCustomerController, getCustomerByIdController, handleNewCustomer, handleFileController } from "../../controllers/admin/customer";
import upload from "../../config/multer";
const router = Router();

// --------------------------------- ADMIN ROUTES --------------------------------------- 
router.post("/signup", isVerified([ROLE.superadmin]), handleAdminController);


// --------------------------------- CUSTOMER ROUTES --------------------------------------- 
router.post("/new-customer", isVerified([ROLE.admin]), handleNewCustomer)
router.get("/customer/:id", isVerified([ROLE.admin]), getCustomerByIdController)
router.delete("/customer/:id", isVerified([ROLE.admin]), deleteCustomerByIdController)
router.get("/customer", isVerified([ROLE.admin]), getAllCustomerController)


router.post("/customer-file", upload.single("image"), handleFileController);


export default router;
