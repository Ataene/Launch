import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Modal from "../components/Modal";
import { fetchItem, fetchItems } from "../redux/ActionCreators";

const Home = () => {
  const items = useSelector((state) => state.items);
  const selectedItem = useSelector((state) => state.selectedItem);
  const dispatch = useDispatch();

  const [modal, setModal] = useState(false);
  const [search, setSearch] = useState("");
  const openModal = () => {
    setModal(!modal);
  };

  console.log("22", items);
  useEffect(() => {
    dispatch(fetchItems());
  }, []);

  useEffect(() => {
    console.log(items);
  }, [items]);

  const handleSearch = () => {
    dispatch(fetchItem(search));
  };

  return (
    <>
      <div>
        {items &&
          items.slice(0, 5).map((item) => (
            <div key={item.id}>
              <hi
                style={{
                  color: "green",
                  justifyContent: "center",
                  display: "flex",
                }}
              >
                {item.title.slice(0, 20)}
              </hi>
              <p
                style={{
                  color: "red",
                  justifyContent: "center",
                  display: "flex",
                }}
              >
                {item.body.slice(0, 50)}
              </p>
              <p
                style={{
                  color: "red",
                  justifyContent: "center",
                  display: "flex",
                }}
              >
                {item.id}
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
      <input
        value={search}
        onChange={(event) => {
          setSearch(event.target.value);
        }}
        placeholder="Search Items"
      />
      <button type="button" onClick={handleSearch}>
        Search
      </button>
      <div>
        {selectedItem && 
        <div key={selectedItem.id}>
          <hi
            style={{
              color: "green",
              justifyContent: "center",
              display: "flex",
            }}
          >
            {selectedItem.title.slice(0, 20)}
          </hi>
          <p
            style={{
              color: "red",
              justifyContent: "center",
              display: "flex",
            }}
          >
            {selectedItem.body.slice(0, 50)}
          </p>
          <p
            style={{
              color: "red",
              justifyContent: "center",
              display: "flex",
            }}
          >
            {selectedItem.id}
          </p>
        </div>
        }
      </div>
    </>
  );
};

export default Home;
