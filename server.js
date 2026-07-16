const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Tell Express to show files inside the "public" folder
app.use(express.static("public"));

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
