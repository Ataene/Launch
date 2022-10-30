import React from "react";
import { useEffect } from "react";
import { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
import Modal from "../components/Modal";
// import { fetchItem } from "../redux/ActionCreators";

const Home = () => {
//   const items = useSelector((state) => state);
//   const dispatch = useDispatch();

  const [data, setData] = useState([]);
  const [modal, setModal] = useState(false);
  const openModal = () => {
    setModal(!modal);
  };

  //Without using redux for API call, useContext is what I understand more.
  const dataUrl = `https://jsonplaceholder.typicode.com/posts? _start=0&_limit=20`;
  const getData = async () => {
    try {
      const response = await fetch(dataUrl);
      let responseData = await response.json();
      setData(responseData);
      // dispatch(setItem(responseData))
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getData()
    // dispatch(fetchItem())
  }, []);
  return (
    <>
      <div>
        {data.map((item) => (
          <div key={item.id}>
            <hi
              style={{
                color: "green",
                justifyContent: "center",
                display: "flex",
              }}
            >
              {item.title}
            </hi>
            <p
              style={{
                color: "red",
                justifyContent: "center",
                display: "flex",
              }}
            >
              {item.body}
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
        <button onClick={openModal} style={{ color: "green", fontSize: 20 }}>
          Submit Post
        </button>
      </div>
    </>
  );
};

export default Home;
