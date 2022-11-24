import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import SliderTest from "./pages/SliderTest";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/slider" element={<SliderTest />} /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
