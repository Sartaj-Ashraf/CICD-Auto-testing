import express from "express";

const app = express();
const PORT = 5000;

app.get("/", (req, res) => {
    res.send("Hey I am Sartaj running on port and this should be auto deployed and again and again and agani and again " + PORT);
});

app.listen(PORT, () => {
    console.log("Server is running and up for streaming");
});
