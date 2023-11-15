import { Router } from "express";
import { isVerified } from "../../middlewares/utils";
import ROLE from "../../config/roles";
import { handleAdminController } from "../../controllers/admin";
import { deleteCustomerByIdController, getAllCustomerController, getCustomerByIdController, handleNewCustomer, handleFileController, handleUpdateCustomerController } from "../../controllers/admin/customer";
import upload from "../../config/multer";
import { getDriverByIdController, handleNewDriver } from "../../controllers/admin/driver";
const router = Router();

// --------------------------------- ADMIN ROUTES --------------------------------------- 
router.post("/signup", isVerified([ROLE.superadmin]), handleAdminController);


// --------------------------------- CUSTOMER ROUTES ------------------------------------ 
router.post("/new-customer", isVerified([ROLE.admin]), handleNewCustomer)
router.get("/customer/:id", isVerified([ROLE.admin]), getCustomerByIdController)
router.delete("/customer/:id", isVerified([ROLE.admin]), deleteCustomerByIdController)
router.get("/customer", isVerified([ROLE.admin]), getAllCustomerController)
router.put("/customer/:id", isVerified([ROLE.admin]), handleUpdateCustomerController);
router.post("/customer-file", upload.single("image"), isVerified([ROLE.admin]), handleFileController);


// --------------------------------- DRIVER ROUTES ------------------------------------ 
router.post("/new-driver", isVerified([ROLE.admin]), handleNewDriver);
router.get("/driver/:id", isVerified([ROLE.admin]), getDriverByIdController)



export default router;
