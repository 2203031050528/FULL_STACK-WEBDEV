const express = require("express");
const users = require("./MOCK_DATA.json");
const fs = require("fs");
const app = express();

const PORT = 8000;

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json()); // Add this to handle JSON body

app.use((req, res, next) => {
  fs.appendFile(
    "log.txt",
    `\n ${Date.now()}: ${req.method}: ${req.path}`,
    (err, data) => {
      next();
    }
  );
});

app.use((req, res, next) => {
  console.log("Hellow for middleware 2");
  return res.end("Hey");
});

// Get all users
app.get("/api/users", (req, res) => {
  res.setHeader("myname", "Rahul jangir");
  return res.json(users);
});

// Render user names as HTML
app.get("/users", (req, res) => {
  const html = `
    <ul>
    ${users.map((user) => `<li>${user.first_name}</li>`).join("")}
    </ul>`;
  res.send(html);
});

// Route for single user operations

app
  .route("/api/users/:id")
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

// Add a new user

app.post("/api/users", (req, res) => {
  const body = req.body;

  if (!body.first_name && !body.last_name) {
    return res
      .status(400)
      .json({ error: "First name and last name are required" });
  }

  // Calculate a unique ID
  const validIds = users.filter((u) => u.id != null).map((u) => u.id);
  const newId = validIds.length > 0 ? Math.max(...validIds) + 1 : 1;

  // Add the new user
  const newUser = { ...body, id: newId };
  users.push(newUser);

  // Write to file
  fs.writeFile("./MOCK_DATA.json", JSON.stringify(users, null, 2), (err) => {
    if (err) {
      return res.status(500).json({ error: "Failed to save data" });
    }
    return res
      .status(201)
      .json({ message: "User added successfully", user: newUser });
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});





