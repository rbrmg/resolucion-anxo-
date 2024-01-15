import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home";
import Error from "./Pages/Error/Error";

function App() {
  return (
    <>
      <header>
        <h1>Eventos y State</h1>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
