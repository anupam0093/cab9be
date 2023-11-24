import { Router } from "express";
import { getDutiesBookingsByIdController, handleSettingsDutyBooking, handleUpdateSettingsDutiesBookings } from "../../controllers/admin/settings/dutie-bookings";
import { isVerified } from "../../middlewares/utils";
import ROLE from "../../config/roles";
import { getBillingByIdController, handleSettingsBilling, handleUpdateSettingsBilling } from "../../controllers/admin/settings/billing";
import { handleSettingsPurchase, handleUpdateSettingsPurchase } from "../../controllers/admin/settings/purchase";
const router = Router();

// -------------------------------- SETTINGS DUTIES/BOOKINGS ROUTES --------------------------------

router.post("/duties-bookings", isVerified([ROLE.admin]), handleSettingsDutyBooking)
router.put("/duties-bookings", isVerified([ROLE.admin]), handleUpdateSettingsDutiesBookings)
router.get("/duties-bookings/:id", isVerified([ROLE.admin]), getDutiesBookingsByIdController)

// --------------------------------- SETTINGS BILLINGS ROUTES ---------------------------------------
router.post("/billing", isVerified([ROLE.admin]), handleSettingsBilling)
router.put("/billing", isVerified([ROLE.admin]), handleUpdateSettingsBilling)
router.get("/billing/:id", isVerified([ROLE.admin]), getBillingByIdController)

// --------------------------------- SETTINGS PURCHASE ---------------------------------------
router.post("/purchase", isVerified([ROLE.admin]), handleSettingsPurchase)
router.put("/purchase", isVerified([ROLE.admin]), handleUpdateSettingsPurchase)


export default router












