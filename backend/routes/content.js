import express from "express";
import Content from "../models/Content.js";

const router = express.Router();

// Get content
router.get("/", async (req, res) => {
  const content = await Content.findOne();
  res.json(content);
});

// Update content
router.put("/", async (req, res) => {
  const updated = await Content.findOneAndUpdate({}, req.body, {
    new: true,
    upsert: true,
  });

  res.json(updated);
});

export default router;
