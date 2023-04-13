const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    subCategory: {
      type: String,
      required: true,
    },
    estimatedLength: {
      type: String,
      required: true,
    },
    commitmentType: {
      type: String,
      default: "Part Time",
    },
    amount: {
      type: Number,
      required: true,
    },
    workType: {
      type: String,
      default: "Remote",
    },
    skills: {
      type: String,
      required: true,
    },
    company: {
      type: String,
      required: true,
    },
    fullDescription: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("projects", projectSchema);
