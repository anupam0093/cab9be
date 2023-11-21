import { Router } from "express";
import { getDutiesBookingsByIdController, handleSettingsDutyBooking, handleUpdateSettingsDutiesBookings } from "../../controllers/admin/settings/dutie-bookings";
import { isVerified } from "../../middlewares/utils";
import ROLE from "../../config/roles";
const routes = Router();

routes.post("/duties-bookings", isVerified([ROLE.admin]), handleSettingsDutyBooking)
routes.put("/duties-bookings", isVerified([ROLE.admin]), handleUpdateSettingsDutiesBookings)

routes.get("/duties-bookings/:id", isVerified([ROLE.admin]), getDutiesBookingsByIdController)

export default routes












