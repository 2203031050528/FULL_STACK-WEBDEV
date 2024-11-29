import express from "express";
import fs from "fs";
// import user from "./MOCK_DATA.json";
const app = express();
const PORT = 8000;

// Load MOCK_DATA.json dynamically
const user = JSON.parse(fs.readFileSync("./MOCK_DATA.json", "utf8"));

// Routes
app.get("/api/users", (req, res) => {
  res.json(user);
});

app.get("/name", (req, res) => {
  const html = `
        <ul>
        ${user.map( ()=> `<li>${user.first_name}</li>`).join("")}
       

        
        </ul>
  `

  res.send(html);

})

// Start server
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
