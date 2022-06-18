import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import List from "./Pages/List/List";
import Hotel from "./Pages/Hotel/Hotel";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/" element={<List />}></Route>
        <Route exact path="/hotels/:id" element={<Hotel />}>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
