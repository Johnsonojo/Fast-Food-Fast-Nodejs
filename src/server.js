// import express from "express";
const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) =>
  res.status(200).json({
    status: "success",
    message: "welcome to fast food fast"
  })
);

app.listen(PORT, () => console.log(`fast food fast is listening on ${PORT}`));

// export default app;
module.exports = app;
