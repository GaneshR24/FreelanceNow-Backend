const mongoose = require("mongoose");

const applyingSchema = new mongoose.Schema(
  {
    project: {
      type: mongoose.Schema.ObjectId,
      ref: "projects",
      require: true,
    },
    user: {
      type: mongoose.Schema.ObjectId,
      ref: "users",
      require: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("appplying", applyingSchema);
