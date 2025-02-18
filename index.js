const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const data = require("./dataRestaurant");
const response = require("./resTemp");

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get("/api/data", (req, res) => {
  //   const { skip = 0, limit = 10 } = req.query;

  //   const skipInt = parseInt(skip);
  //   const limitInt = parseInt(limit);

  //   const paginatedData = data.slice(skipInt, skipInt + limitInt);

  const dataReady = {
    length: data.length,
    data,
  };
  response(
    res,
    200,
    dataReady,
    "Get Data Is Successfully",
    ""
    // true,
    // limit,
    // data.length,
    // skip
  );
});

app.get("/api/data/:id", (req, res) => {
  const { id } = req.params;
  const item = data.find((d) => d.id === id);

  if (item) {
    response(res, 200, item, "Get Data Is Successfully", "");
  } else {
    response(res, 404, null, "Data not found", "");
  }
});

app.get("/api/data/categories/:categorie", (req, res) => {
  const { categorie } = req.params;
  const items = data.filter((d) => d.cuisine.includes(categorie));

  if (items.length > 0) {
    const dataReady = {
      length: items.length,
      items,
    };
    response(res, 200, items, "Get Data Is Successfully", "");
  } else {
    response(res, 404, null, "Data not found", "");
  }
});

// Ekspor aplikasi untuk digunakan oleh Vercel
module.exports = app;
