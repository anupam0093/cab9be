import { Router } from "express";
import { getDutiesBookingsByIdController, handleSettingsDutyBooking, handleUpdateSettingsDutiesBookings } from "../../controllers/admin/settings/dutie-bookings";
import { isVerified } from "../../middlewares/utils";
import ROLE from "../../config/roles";
import { handleSettingsBilling, handleUpdateSettingsBilling } from "../../controllers/admin/settings/billing";
const router = Router();

// -------------------------------- SETTINGS DUTIES/BOOKINGS ROUTES --------------------------------

router.post("/duties-bookings", isVerified([ROLE.admin]), handleSettingsDutyBooking)
router.put("/duties-bookings", isVerified([ROLE.admin]), handleUpdateSettingsDutiesBookings)
router.get("/duties-bookings/:id", isVerified([ROLE.admin]), getDutiesBookingsByIdController)

// --------------------------------- SETTINGS BILLINGS ROUTES ---------------------------------------
router.post("/billing", isVerified([ROLE.admin]), handleSettingsBilling)
router.put("/billing", isVerified([ROLE.admin]), handleUpdateSettingsBilling)


export default router












