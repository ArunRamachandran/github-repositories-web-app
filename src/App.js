import React from "react";
import { Routes, Route } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { Dashboard } from "./pages/Dashboard";
import { AdditionalDetails } from "./pages/AdditionalDetails";
import { ErrorPage } from "./pages/ErrorPage";


const PageRoutes = () => (
  <Routes>
    <Route exact path="/" element={<Dashboard />} />
    <Route exact path="/details" element={<AdditionalDetails />} />
    <Route path="*" element={<ErrorPage />} />
  </Routes>
)

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <PageRoutes />
    </div>
  );
}

export default App;
