import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navigations from "./components/Navigations";
import Home from "./pages/Home";
import Universities from "./pages/Universities";
// import Footer from "./components/Footer";
import PostalLookup from "./pages/PostalLookup";


function App() {
  return (
    <>
    <div className="App">
        <Navigations />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/universities" element={<Universities />} />
          <Route path="/postalLookup" element={<PostalLookup />} />
        </Routes>
        {/* <Footer /> */}
    </div>
    </>
  );
}

export default App;
