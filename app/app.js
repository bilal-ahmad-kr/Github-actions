const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) =>{
    res.json({ mesaage: "Github action is running" })
})

app.get("/health", (req, res) => {
    res.json({ status: "Ok" })
})
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})
