import { Schema, model } from "mongoose";
import ROLE from "../config/roles";

export interface IUser extends Document {
  name: string;
  email: string;
  phone: string;
  password: string;
  role: string;
  isRegistered: boolean;
}

const userSchema = new Schema<IUser>({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    validate: {
      validator: function (value: any) {
        var email =
          /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        return !value || !value.trim().length || email.test(value);
      },
      message: "Provided email number is invalid",
    },
    unique: true,
  },
  phone: {
    type: String,
    required: true,
    validate: {
      validator: function (v: any) {
        var re = /^\d{10}$/;
        return !v || !v.trim().length || re.test(v);
      },
      message: "Provided mobile number is invalid.",
    },
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    default: "user",
    enum: [ROLE?.user, ROLE?.admin, ROLE?.superadmin]
  },
  isRegistered: {
    type: Boolean,
    default: false,
  },
},
  { timestamps: true }
)

export default model<IUser>("users", userSchema);