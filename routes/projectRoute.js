const router = require("express").Router();
const Project = require("../models/projectModel");
const authMiddleware = require("../middlewares/authMiddleware");

// Add Project

router.post("/add-project", authMiddleware, async (req, res) => {
  try {
    const newProject = new Project(req.body);
    await newProject.save();
    return res.status(200).send({
      success: true,
      message: "Project added successfully",
    });
  } catch (error) {
    res.status(500).send({ success: false, message: error.message });
  }
});

// Get-all-Projects

router.post("/get-all-projects", authMiddleware, async (req, res) => {
  try {
    const projects = await Project.find(req.body);
    return res.status(200).send({
      success: true,
      message: "Project fetched successfully",
      data: projects,
    });
  } catch (error) {
    res.status(500).send({ success: false, message: error.message });
  }
});

// Update-Project

router.put("/update-project", authMiddleware, async (req, res) => {
  try {
    await Project.findByIdAndUpdate(req.body._id, req.body);
    return res.status(200).send({
      success: true,
      message: "Project updated successfully",
    });
  } catch (error) {
    res.status(500).send({ success: false, message: error.message });
  }
});

// Delete-Project

router.post("/delete-project", authMiddleware, async (req, res) => {
  try {
    await Project.findByIdAndDelete(req.body._id);
    return res.status(200).send({
      success: true,
      message: "Project deleted successfully",
    });
  } catch (error) {
    res.status(500).send({ success: false, message: error.message });
  }
});

// Get-Project-by-id

router.post("/get-project-by-id", authMiddleware, async (req, res) => {
  try {
    const project = await Project.findById(req.body._id);
    return res.status(200).send({
      success: true,
      message: "Project fetched successfully",
      data: project,
    });
  } catch (error) {
    res.status(500).send({ success: false, message: error.message });
  }
});

module.exports = router;
