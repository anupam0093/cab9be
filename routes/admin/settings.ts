import { Router } from "express";
import { getDutiesBookingsByIdController, handleSettingsDutyBooking, handleUpdateSettingsDutiesBookings } from "../../controllers/admin/settings/dutie-bookings";
import { isVerified } from "../../middlewares/utils";
import ROLE from "../../config/roles";
import { getBillingByIdController, handleSettingsBilling, handleUpdateSettingsBilling } from "../../controllers/admin/settings/billing";
import { handleSettingsPurchase, handleUpdateSettingsPurchase } from "../../controllers/admin/settings/purchase";
import { handleCreateDriverAllowance, handleUpdateDriverAllowance } from "../../controllers/admin/settings/driver-allowaance";
import { handleCreateNotifications, handleUpdateNotification } from "../../controllers/admin/settings/notification";
const router = Router();

// -------------------------------- SETTINGS DUTIES/BOOKINGS ROUTES --------------------------------

router.post("/duties-bookings", isVerified([ROLE.admin]), handleSettingsDutyBooking)
router.put("/duties-bookings/:id", isVerified([ROLE.admin]), handleUpdateSettingsDutiesBookings)
router.get("/duties-bookings/:id", isVerified([ROLE.admin]), getDutiesBookingsByIdController)

// --------------------------------- SETTINGS BILLINGS ROUTES ---------------------------------------
router.post("/billing", isVerified([ROLE.admin]), handleSettingsBilling)
router.put("/billing", isVerified([ROLE.admin]), handleUpdateSettingsBilling)
router.get("/billing/:id", isVerified([ROLE.admin]), getBillingByIdController)

// --------------------------------- SETTINGS PURCHASE ---------------------------------------
router.post("/purchase", isVerified([ROLE.admin]), handleSettingsPurchase)
router.put("/purchase", isVerified([ROLE.admin]), handleUpdateSettingsPurchase)

// --------------------------------- SETTINGS DRIVER ALLOWANCE ---------------------------------------
router.post("/driver-allowance", isVerified([ROLE.admin]), handleCreateDriverAllowance)
router.put("/driver-allowance/:id", isVerified([ROLE.admin]), handleUpdateDriverAllowance)

// --------------------------------- SETTINGS NOTIFICATIONS ---------------------------------------
router.post("/notification", isVerified([ROLE.admin]), handleCreateNotifications)
router.put("/notification/:id", isVerified([ROLE.admin]), handleUpdateNotification)



export default router












