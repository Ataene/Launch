import React from "react";
import { useEffect } from "react";
import { useState } from "react";
// import Postal from "../components/Postal";

const Universities = () => {

  const[ loading, setLoading ] = useState("")
  // const[ error, setError ] = useState("")
  const [university, setUniversity] = useState([]);
  const [country, setCountry] = useState("");
  const dataUri = `http://universities.hipolabs.com/search?country=Canada`;

  //Display the list of country, Pending and Error states not handle yet.
  
  useEffect(() => {
    const getUniversity = async () => {
      try {
        const response = await fetch(dataUri);
        let data = await response.json();
        setUniversity(data);
        setCountry("");
        setLoading("")
      } catch (error) {
        console.log(error.message);
      }
    };
    getUniversity();
  }, []);
  return (
    <div>
      <div>
        <h1 style={{ color: "orange" }}>Limit of two items</h1>
        {university.slice(0, 2).map((item) => (
          <div key={item.id}>
            <hi
              style={{
                color: "green",
                justifyContent: "center",
                display: "flex",
              }}
            >
              {item.country}
            </hi>
            <p
              style={{
                color: "red",
                justifyContent: "center",
                display: "flex",
              }}
            >
              {item.name}
            </p>
          </div>
        ))}
      </div>
      <hr />
      <h1
        style={{
          color: "green",
          justifyContent: "center",
          display: "flex",
        }}
      >
        Post begins here
      </h1>
      <div
        style={{
          color: "green",
          justifyContent: "center",
          display: "flex",
          marginBottom: 20,
        }}
      ></div>
      {/* <Postal /> */}
    </div>
  );
};

export default Universities;
