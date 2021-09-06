import React, { useEffect, useState } from "react";
import "./Home.css";
import axios from "axios";

const Home = () => {
  const [plant, setPlant] = useState();

  useEffect(() => {
    axios
      .get("/api/plants")
      .then((res) => {
        console.log("retrieved plants", res);
      })
      .catch((err) => {
        if (err) throw err;
      });
  }, []);

  return (
    <div>
      <h3>this will be the homepage</h3>
    </div>
  );
};

export default Home;
