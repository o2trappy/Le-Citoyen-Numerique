import express from "express"
import { fileURLToPath } from "url"
import { dirname, join } from "path"
const PING_URL = "https://le-citoyen-numerique.onrender.com/health";
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const app = express()
const PORT = process.env.PORT || 3000

// Serve static files from the public directory
app.use(express.static("public"))

// Health check endpoint for automatic pinging
app.get("/health", (req, res) => {
  res.status(200).send("OK")
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})

// Auto-ping function
const pingServer = () => {
  fetch(PING_URL).catch((error) => console.error("Error pinging server:", error));
};

// Ping every 14 minutes
setInterval(pingServer, 14 * 60 * 1000)

