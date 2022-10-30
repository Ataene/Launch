import React, { useEffect, useState } from "react";

const Postal = () => {
  const countryUri = `https://countriesnow.space/api/v0.1/countries/info?returns=none`;

  const [countryList, setCountryList] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const getCountry = async () => {
      try {
        const response = await fetch(countryUri);
        let SearchData = await response.json();
        setCountryList(SearchData);
        // setCountry("")
      } catch (error) {
        console.log(error.message);
      }
    };
    getCountry();
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    let newData = [];
    if (search !== "") {
      data = newData.filter((item) => item.search === search);
    } else {
        newData = SearchData;
      setCountryList(data);
    }
  };
  return (
    <>
      {/* <div>
        <label>Choose your Country </label>
        <select>
          <option>{setCountryList.country}</option>
          <option></option>
          <option></option>
          <option></option>
        </select>
      </div> */}
      <div
      style={{
        margin: "0 auto",
        width: "900px",
        backgroundColor: "#E5E7E9",
        height: "400px",
        marginTop: "50px",
      }}
    >
      <div style={{ width: "300px", marginTop: "20px", height: "70px" }}>
        <input
          type="text"
          className="form-control"
          placeholder="Enter Name"
          onChange={(e) => handleChange(e.target.value)}
        ></input>
        <button onClick={(e) => handleSearch(e)}>Search</button>
      </div>
      <br></br>
      <br></br>
      <div style={{ width: "800px" }}>
        <table className="table  table-bordered table-hover">
          <thead>
            <tr>
              <td>Id</td>
              <td>Price</td>
              <td>Name</td>
              <td>Active</td>
            </tr>
          </thead>
          <tbody>
            {searchData &&
              searchData.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{item._id}</td>
                    <td>{item.price}</td>
                    <td>{item.name}</td>
                    <td>{item.isActive}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
    </>
  );
};

export default Postal;
