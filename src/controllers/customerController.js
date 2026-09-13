import { CustomerModel } from "../models/customerModel.js";

export const CustomerController = {
  async getAll(req, res) {
    try {
      const { name, page, limit } = req.query;
      const customers = await CustomerModel.getAll({ name, page, limit });
      res.json(customers);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  async getById(req, res) {
    try {
      const customer = await CustomerModel.getById(req.params.id);
      res.json(customer);
    } catch (err) {
      res.status(404).json({ error: err.message });
    }
  },

  async create(req, res) {
    try {
      const { email, phone } = req.body;

      if (!email || typeof email !== "string" || !email.includes("@")) {
        return res
          .status(400)
          .json({ error: "Email wajib diisi dan harus mengandung karakter '@'" });
      }

      if (!phone || typeof phone !== "string" || phone.trim().length < 10) {
        return res
          .status(400)
          .json({ error: "Nomor telepon (phone) wajib diisi minimal 10 karakter" });
      }

      const customer = await CustomerModel.create(req.body);
      res.status(201).json(customer);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  },

  async update(req, res) {
    try {
      const { email, phone } = req.body;

      if (email !== undefined) {
        if (!email || typeof email !== "string" || !email.includes("@")) {
          return res
            .status(400)
            .json({ error: "Email wajib mengandung karakter '@'" });
        }
      }

      if (phone !== undefined) {
        if (!phone || typeof phone !== "string" || phone.trim().length < 10) {
          return res
            .status(400)
            .json({ error: "Nomor telepon (phone) harus minimal 10 karakter" });
        }
      }

      const customer = await CustomerModel.update(req.params.id, req.body);
      res.json(customer);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  },

  async remove(req, res) {
    try {
      await CustomerModel.remove(req.params.id);
      res.json({ message: "Customer deleted successfully" });
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  },
};

