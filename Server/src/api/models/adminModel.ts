import mongoose from "mongoose";

const adminSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    passwordHash: { type: String, required: true },
    orgnaizationName: { type: String, required: true },
    organizationDescription: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    organizationAddress: { type: String, required: true },
    approved: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);

export const admin = mongoose.model("Admin", adminSchema);
