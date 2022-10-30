import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

const Universities = () => {

  const [ university, setUniversity ] = useState([]);
  const [ country, setCountry ] = useState("")
  const dataUri = `http://universities.hipolabs.com/search?country=${country}`

  const getUniversity = async () => {
    try {
      const response = await fetch(dataUri);
      let data = await response.json();
      setUniversity(data);
    } catch (error) {
      console.log(error.message)
    }
  }

  useEffect(() => {
    getUniversity()
  }, []);
  return (
    <div>
       <div>
        {university.map((item) => (
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
      >
      </div>
    </div>
  )
}

export default Universities