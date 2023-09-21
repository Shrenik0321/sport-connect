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

export const updateAdmin = async (req: Request, res: Response) => {
  const id = req.params.id;
  const updates = req.body;
  updates.updatedAt = new Date();
  try {
    const updatedAdmin = await admin.findByIdAndUpdate(id, updates, {
      new: true,
    });
    res.status(200).json(updatedAdmin);
  } catch (err) {
    return res
      .status(500)
      .json({ message: "Internal server error", error: err });
  }
};
