const express = require("express");
const fetch = require("node-fetch");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());

const PORT = process.env.PORT || 3000;
const API_KEY = process.env.BRAWL_API_KEY;

app.get("/leaderboard", async (req, res) => {
    try {
        const region = "global"; // global leaderboard
        const url = `https://api.brawlstars.com/v1/rankings/${region}/players`;

        const response = await fetch(url, {
            headers: { "Authorization": `Bearer ${API_KEY}` }
        });

        if (!response.ok) {
            return res.status(response.status).json({ error: "Error fetching leaderboard" });
        }

        const data = await response.json();
        const top10 = data.items.slice(0, 10);
        res.json(top10);

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
