import React from 'react'

const Modal = () => {
    const container = {
        display: "flex",
        with: "100%",
        height: "100vh",
        position: "fixed",
        justifyContent: "center",
        alighnItems: "center",
        border: "1px solid green",
        visibility: "hidden",
    }
    const modal = {
        width: "90%",
        height: "90%",
        backgroundColor: "red"
    }
    const closeButton = {
        position: "absolute",
        cursor: "pointer",
        top: "10px",
        right: "10px",
        width: "10px",
        height: "10"
    }
  return (
    <>
    <div style={container}>
        <div style={modal}>
            <label>Enter Name</label>
            <input type="text">Enter Name</input>
            <button style={closeButton}>X</button>
        </div>
    </div>
    </>
  )
}

export default Modal