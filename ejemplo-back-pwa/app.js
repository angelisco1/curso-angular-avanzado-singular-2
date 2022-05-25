const express = require("express");
const webPush = require("web-push");
const cors = require("cors");
const AppRoutes = require("./routes/routes");

const vapidKeys = {
  publicKey:
    "BN3vio-Jmtrpt0tZzSDJ9XRfw-C3eqg86bRQRKiW2FUmwkVbGbGa9YPrPWFs4RhJH41iGPhX9p9AgwlLVqkjIb0",
  privateKey: "iZl16CpcdswhU0vTIxNaVoXgwYj70mBJ3POaWwPHhOw",
};

const app = express();

webPush.setVapidDetails(
  "mailto:angel@gmail.com",
  vapidKeys.publicKey,
  vapidKeys.privateKey
);

app.use(cors());
app.use(express.json());

app.use(AppRoutes);

app.listen(3001, () => {
  console.log("Listening on http://localhost:3001");
});
