import React, { useEffect, useState } from "react";

const PostalLookup = () => {
  const [postalCode, setPostalCode] = useState([]);
  const [code, setCode] = useState("");
  const dataUri = `https://api.zippopotam.us/us/${code}`;

  const handleSubmit = async (event) => {
    if (event.key === "Enter") {
      try {
        const response = await fetch(dataUri);
        let data = await response.json();
        setPostalCode(data);
        setCode("");

      } catch (error) {
        console.log(error.message);
      }
    }
  };
  console.log("111", postalCode)

  useEffect(() => {
    handleSubmit();
  }, []);

  return (
    <>
      <input
        style={{ marginTop: 50 }}
        type="text"
        placeholder="Enter Code"
        value={code}
        onChange={(e) => {
          setCode(e.target.value);
        }}
        onKeyDown={handleSubmit}
      />
      <div>
        <p>Country: {postalCode.country}</p>
        <p>Abbreviation: {postalCode["country abbreviation"]}</p>
        <p>State: {postalCode.places[0].state}</p>
        <p>Longitude: {postalCode.places[0].longitude}</p>
        <p>Latitude: {postalCode.places[0].latitude}</p>
        <p>Place: {postalCode.places[0]["place name"]}</p>
      </div>
    </>
  );
};

export default PostalLookup;
