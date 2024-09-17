import { Route, Routes } from "react-router-dom";
import BeforeNav from "../components/BeforeNav";
import NavBar from "../components/NavBar";
import HeroSection from "../pages/HeroSection";
import SubHero from "../pages/SubHero";
import styled from "styled-components";
import Slide from "../pages/Slide";
// import Review from "../pages/Review";


const Wrapper = styled.div`
  .navbar {
    position: sticky;
    top: 0;
    z-index: 1000;
  }
`;

const Home = () => {
  return (
    <Wrapper>
      <Routes>
        <Route path="/" element={<BeforeNav />}></Route>
      </Routes>
      <div className="navbar">
        <NavBar />
      </div>
      <HeroSection />
      <SubHero />
      <Slide />
      {/* <Review /> */}
    </Wrapper>
  );
};

export default Home;
