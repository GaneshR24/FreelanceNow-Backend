const router = require("express").Router();
const authMiddleware = require("../middlewares/authMiddleware");
const Applying = require("../models/applyingModel");
const Project = require("../models/projectModel");

// Applying Projects

router.post("/apply-project", authMiddleware, async (req, res) => {
  try {
    const newApplying = new Applying({
      ...req.body,
      user: req.body.userId,
    });
    await newApplying.save();
    const project = await Project.findById(req.body.project);
    res.status(200).send({
      message: "Successfully Applied for the Project",
      data: newApplying,
      success: true,
    });
  } catch (error) {
    res.status(500).send({
      message: "Error while applying to the project",
      data: error,
      success: false,
    });
  }
});

// Get applying by user id
router.get("/get-applying-by-user-id", authMiddleware, async (req, res) => {
  try {
    const applying = await Applying.find({ user: req.body.userId })
      .populate("project")
      .populate("user");
    res.status(200).send({
      message: "Applied Project fetched successfully",
      data: applying,
      success: true,
    });
  } catch (error) {
    res.status(500).send({
      message: "Applied Project fetch failed",
      data: error,
      success: false,
    });
  }
});

// Get all Applying
router.post("/get-all-applying", authMiddleware, async (req, res) => {
  try {
    const applying = await Applying.find().populate("project").populate("user");
    res.status(200).send({
      message: "Applied Project fetched successfully",
      data: applying,
      success: true,
    });
  } catch (error) {
    res.status(500).send({
      message: "Applied Project fetch failed",
      data: error,
      success: false,
    });
  }
});

module.exports = router;
