const express = require('express')
const app = express()
const PORT = process.env.PORT || 3005;

app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!" });
  });

  app.get("/users", (req, res) => {
    res.json({ message: "This is the user" });
  });

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

  
