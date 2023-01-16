// https://github.com/gladishd/mern-auth-client/blob/master/src/components/politicians/Politicians.js
import React, { useEffect, useState } from "react";
import PoliticianForm from "./PoliticianForm";
import PoliticianList from "./PoliticianList";
import axios from "axios";

console.log("is the pages/Politician.js even loaded ? ")

function Politicians() {
  console.log("is /pages/Politician function invoked that is ? ")
  const [politicians, setPoliticians] = useState([]);

  async function getPoliticians() {
    const politicianRes = await axios.get("http://localhost:5000/politician/")
    setPoliticians(politicianRes.data);
  }

  useEffect(() => {
    getPoliticians();
  }, []);

  return (
    <div>
      <PoliticianForm getPoliticians={getPoliticians} />
      <PoliticianList politicians={politicians} />
    </div>
  );
};

export default Politicians;
