import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Header from "./components/Header";

import Footer from "./components/Footer";
import Sidenav from "./components/Sidenav";


function App() {
  return (

    <div>
      <Header />
      <Sidenav />
      <Footer />
    </div>

  );
}

export default App;