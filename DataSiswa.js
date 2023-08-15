const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    Nama : "Richard Muhammad",
    TanggalLahir: "14 Januari 1994",
    JenisKelamin : "Laki-Laki",
    Hobi: "Membaca Buku"
  });
});

router.post("/", (req, res) => {
  res.send("Request Create Masuk");
});

router.put("/", (req, res) => {
  res.send("Request update Masuk");
});

router.delete("/", (req, res) => {
  res.send("Request Delete");
});


module.exports=router;