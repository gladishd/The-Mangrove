// https://github.com/gladishd/mern-auth-client/blob/master/src/components/politicians/Politicians.js
import React, { useEffect, useState } from "react";
import PoliticianForm from "../mern-auth-client/src/components/politicians/PoliticianForm";
import PoliticianList from "../mern-auth-client/src/components/politicians/PoliticianList";
import axios from "axios";
// import { default as Navbar } from "../mern-auth-client/src/components/layout/Navbar.js"

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
      {/* <Navbar /> */}
    </div>
  );
};

export default Politicians;
