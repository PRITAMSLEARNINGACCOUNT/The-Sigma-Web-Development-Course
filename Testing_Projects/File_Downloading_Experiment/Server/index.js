const express = require("express");
const app = express();
const path = require("path");
const port = 5000;
const cors = require("cors");

const allowedOrigins = ["https://www.example.com","http://127.0.0.1"];
app.use(
  cors({
    origin: (origin, callback) => {
      console.log(origin);
      
      if (allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
  })
);

app.get("/", (req, res) => {
  const filePath = path.join(__dirname, "Random", "Random_Pic_2.jpg");

  return res.sendFile(filePath, (err) => {
    if (err) {
      console.error("Error sending file:", err);
      res.status(500).json({ error: "Error sending file" });
    } else {
      console.log("File sent successfully");
    }
  });
});

app.get("/Second", (req, res) => {
  const filePath = path.join(__dirname, "Random", "Random_Pic.jpg");

  return res.sendFile(filePath, (err) => {
    if (err) {
      console.error("Error sending file:", err);
    } else {
      console.log("File sent successfully");
    }
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Something went wrong!" });
});

app.listen(port, () => {
  console.log(`Your Local Server Is - http://localhost:${port}`);
});
