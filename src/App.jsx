import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BeforeNav from "./components/BeforeNav";
import Home from "./home/Home";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/*" element={<Home />} />
        <Route path="/home/before-nav" element={<BeforeNav />} />
      </Routes>
    </Router>
  );
};

export default App;
