import { Route, Routes } from "react-router-dom";
import BeforeNav from "../components/BeforeNav";
import NavBar from "../components/NavBar";
import HeroSection from "../pages/HeroSection";

const Home = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<BeforeNav />}></Route>
      </Routes>
      <NavBar />
      <HeroSection />
    </div>
  );
};

export default Home;
