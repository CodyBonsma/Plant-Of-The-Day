import React from "react";
import axios from "axios";

const APIKEY = "qUuOo7ykLxiI50Mr36MtH1RrYMQSKtfNSPljdwDf618";
const SEARCHURL = "https://trefle.io/api/v1/plants/search?token=";
const CORS = "https://serene-badlands-79714.herokuapp.com/";

const Plants = () => {
  const getRecipes = () => {
    axios
      .get(SEARCHURL + APIKEY + "&q=" + "rose")
      .then((plantRes) => {
        console.log("THESE ARE TREFLE API RES: ", plantRes);
      })
      .catch((err) => {
        if (err) throw err;
      });
  };

  getRecipes();

  return (
    <div>
      <h2>This will hold the trefl API</h2>
    </div>
  );
};

export default Plants;
