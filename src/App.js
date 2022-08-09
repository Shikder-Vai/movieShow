import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import ShowDetails from "./components/ShowDetails";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/showDetail/:id" element={<ShowDetails />} />
      </Routes>
    </div>
  );
}

export default App;
