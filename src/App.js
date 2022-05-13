import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./style/global.css";
import "bootstrap/dist/css/bootstrap.min.css";

import UploadFiles from "./components/UploadFiles";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";


function App() {
  return (
    <div className="container" style={{ width: "600px" }}>
      <BrowserRouter>
	<Navbar />
	 

      <UploadFiles />
	  <Footer />
	    </BrowserRouter>
    </div>
  );
}

export default App;
