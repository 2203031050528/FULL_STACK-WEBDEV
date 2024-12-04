const express = require("express");

const router = express.Router();

// Get all users
router.get("/", (req, res) => {
  res.setHeader("myname", "Rahul jangir");
  return res.json(users);
});




router
  .route("/:id")
  .get((req, res) => {
    const id = Number(req.params.id);
    const user = users.find((user) => user.id === id);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    return res.json(user);
  })
  .patch((req, res) => {
    // Edit user details
    return res.json({ status: "pending" });
  })
  .delete((req, res) => {
    // Delete user
    return res.json({ status: "pending" });
  });

router.post("/", async (req, res) => {
  try {
    const { first_name, last_name, email, jobTitles, gender } = req.body;

    if (!first_name || !last_name || !email || !jobTitles || !gender) {
      return res.status(400).json({
        error:
          "All fields (first_name, last_name, email, jobTitles, gender) are required.",
      });
    }

    // Create new user in MongoDB
    const result = await user.create({
      firstname: first_name,
      lastname: last_name,
      email,
      jobTitles,
      gender,
    });

    return res
      .status(201)
      .json({ message: "User added successfully", user: result });
  } catch (err) {
    console.error(err);
    return res
      .status(500)
      .json({ error: "Failed to save data", details: err.message });
  }
});

module.exports = router;
