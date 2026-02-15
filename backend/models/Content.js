import mongoose from "mongoose";

const contentSchema = new mongoose.Schema({
  hero: {
    title: String,
    tagline: String,
    price1: String,
    price2: String,
    location: String,
  },

  aboutProject: {
    description: String,
  },

  connectivity: [
    {
      title: String,
      description: String,
    },
  ],

  amenities: [
    {
      title: String,
      description: String,
    },
  ],

  constructionUpdates: [
    {
      phase: String,
      status: String,
    },
  ],

  faqs: [
    {
      question: String,
      answer: String,
    },
  ],

  developer: {
    description: String,
  },
});

export default mongoose.model("Content", contentSchema);
