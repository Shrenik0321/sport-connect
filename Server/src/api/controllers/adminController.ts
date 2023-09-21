import { Request, Response } from "express";
import { admin } from "../models/adminModel.js";

export const addAdmin = async (req: Request, res: Response) => {
  try {
    const newAdmin = new admin(req.body);
    await newAdmin.save();
    res.status(201).json(newAdmin);
  } catch (err) {
    return res
      .status(500)
      .json({ message: "Internal server error", error: err });
  }
};

export const getAllAdmin = async (req: Request, res: Response) => {
  try {
    const admins = await admin.find();
    // later shd change the approved filter to true
    const filteredAdmins = admins
      .filter((admin) => admin.approved === false)
      .map(
        ({
          name,
          email,
          orgnaizationName,
          organizationAddress,
          organizationDescription,
          phoneNumber,
        }) => ({
          name,
          email,
          orgnaizationName,
          organizationAddress,
          organizationDescription,
          phoneNumber,
        })
      );
    res
      .status(200)
      .json({ admins: filteredAdmins, count: filteredAdmins.length });
  } catch (err) {
    return res
      .status(500)
      .json({ message: "Internal server error", error: err });
  }
};
