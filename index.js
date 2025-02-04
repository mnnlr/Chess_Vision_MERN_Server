require('dotenv').config();
const express = require('express');
const middleware = require('./middleware'); // Adjust the path if needed
const cors = require("cors");
const fs = require("fs");
const path = require("path");
const uploadRoutes = require('./routes/uploadRoutes');


const app = express();
app.use(cors());
app.use(express.json());
app.use(middleware); // Apply middleware globally

const uploadDir = path.join(__dirname, "/uploads");
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}
app.use("/uploads", express.static(uploadDir));

  

  app.use("/api/images", uploadRoutes);
  



app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.listen(5000, () => {
    console.log('Server is running on port 5000');
});
