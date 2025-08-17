import express from "express";
import fetch from "node-fetch";

const app = express();
const PORT = process.env.PORT || 3000;

const TAG = "#9JLRL9QVU";
const API_KEY = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6IjQ2ZWY0ZmMzLTA4YjYtNDFjMC05YWFlLTQxZDgwNjcyZWY0OCIsImlhdCI6MTc1NTQ1NTM4MCwic3ViIjoiZGV2ZWxvcGVyLzkxYmMwNjVkLWNhYWYtYmM4Yi05MjJlLWJhNTA2ZGMyNDAzYyIsInNjb3BlcyI6WyJicmF3bHN0YXJzIl0sImxpbWl0cyI6W3sidGllciI6ImRldmVsb3Blci9zaWx2ZXIiLCJ0eXBlIjoidGhyb3R0bGluZyJ9LHsiY2lkcnMiOlsiMzQuMTg3LjIwNy40MCJdLCJ0eXBlIjoiY2xpZW50In1dfQ.asS-eE2Zwi_sY1OwpHRxcjBAeIet3TtxGMBv3q478fL0Tz8V5gGuP_0ASCidyjz6A20jlEhgEQgvP932_KRQEQ"; // Replace with your actual API key
const BASE_URL = "https://api.brawlstars.com/v1";

app.get("/player", async (req, res) => {
  try {
    const response = await fetch(`${BASE_URL}/players/%23${TAG.replace("#","")}`, {
      headers: { Authorization: `Bearer ${API_KEY}` }
    });
    const data = await response.json();
    res.json(data);
  } catch {
    res.json({ error: "Failed to load data." });
  }
});

app.use(express.static(".")); // serve index.html, style.css, script.js from root

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
