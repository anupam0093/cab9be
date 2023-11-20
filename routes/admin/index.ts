import { Router } from "express";
import { isVerified } from "../../middlewares/utils";
import ROLE from "../../config/roles";
import { handleAdminController } from "../../controllers/admin";
import { deleteCustomerByIdController, getAllCustomerController, getCustomerByIdController, handleNewCustomer, handleFileController, handleUpdateCustomerController } from "../../controllers/admin/customer";
import upload from "../../config/multer";
import { deleteDriverByIdController, getAllDriverController, getDriverByIdController, handleNewDriver, handleProfileController, handleUpdateDriverController } from "../../controllers/admin/driver";
import { deleteVehicleByIdController, getAllVehicleController, getVehicleByIdController, handleAddVehicle, handleUpdateVehicleController } from "../../controllers/admin/vehicle";
const router = Router();

// --------------------------------- ADMIN ROUTES --------------------------------------- 
router.post("/signup", isVerified([ROLE.superadmin]), handleAdminController);

// --------------------------------- CUSTOMER ROUTES ------------------------------------ 
router.post("/new-customer", isVerified([ROLE.admin]), handleNewCustomer)
router.get("/customer/:id", isVerified([ROLE.admin]), getCustomerByIdController)
router.delete("/customer/:id", isVerified([ROLE.admin]), deleteCustomerByIdController)
router.get("/customer", isVerified([ROLE.admin]), getAllCustomerController)
router.put("/customer/:id", isVerified([ROLE.admin]), handleUpdateCustomerController);

// ------------------- COMMON ROUTES FILE FOR ---> CUSTOMER, DRIVER AND VEHICLE --------------- 
router.post("/file", upload.single("image"), isVerified([ROLE.admin]), handleFileController);


// ----------------------------------- DRIVER ROUTES ------------------------------------
router.post("/new-driver", isVerified([ROLE.admin]), handleNewDriver);
router.get("/driver/:id", isVerified([ROLE.admin]), getDriverByIdController)
router.delete("/driver/:id", isVerified([ROLE.admin]), deleteDriverByIdController)
router.get("/drivers", isVerified([ROLE.admin]), getAllDriverController)
router.put("/driver/:id", isVerified([ROLE.admin]), handleUpdateDriverController)

router.post("/driver-profile", upload.single("driver-profile"), isVerified([ROLE.admin]), handleProfileController)

// --------------------------------- VEHICLE ROUTES ------------------------------------ 
router.post("/new-vehicle", isVerified([ROLE.admin]), handleAddVehicle)
router.get("/vehicle/:id", isVerified([ROLE.admin]), getVehicleByIdController)
router.get("/vehicle", isVerified([ROLE.admin]), getAllVehicleController)
router.delete("/vehicle/:id", isVerified([ROLE.admin]), deleteVehicleByIdController)
router.put("/vehicle/:id", isVerified([ROLE.admin]), handleUpdateVehicleController)

router.post("/vehicle-image", upload.single("vehicle-image"), isVerified([ROLE.admin]), handleProfileController)


export default router;
