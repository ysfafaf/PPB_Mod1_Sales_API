import { ReportModel } from "../models/reportModel.js";

export const ReportController = {
  async getTotalCustomers(req, res) {
    try {
      const total = await ReportModel.getTotalCustomers();
      res.json({ total });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },
};
