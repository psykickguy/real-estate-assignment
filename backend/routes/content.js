import express from "express";
import Content from "../models/Content.js";

const router = express.Router();

/* ================= CREATE (Seed) ================= */
router.post("/", async (req, res) => {
  try {
    const existing = await Content.findOne();

    if (existing) {
      return res.status(400).json({
        message: "Content already exists. Use PUT to update.",
      });
    }

    const content = new Content(req.body);
    await content.save();

    res.status(201).json(content);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

/* ================= GET ================= */
router.get("/", async (req, res) => {
  const content = await Content.findOne();
  res.json(content);
});

/* ================= UPDATE ================= */
router.put("/", async (req, res) => {
  const updated = await Content.findOneAndUpdate({}, req.body, {
    new: true,
    upsert: true,
  });

  res.json(updated);
});

export default router;
