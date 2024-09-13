import styled from "styled-components";
import { subImages } from "../utils/subhero";
import { useRef } from "react";

const Wrapper = styled.div`
  height: 100vh;
  padding: 40px;
  text-align: center;
  font-size: 20px;

  .text {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    word-break: break-word;
    overflow-wrap: break-word;
    max-width: 50%;
    margin: 0 auto;

    @media (max-width: 768px) {
      word-break: normal;
      overflow-wrap: normal;
      max-width: 90%;
    }
  }

  .sub-hero-card-container {
    position: relative;
    overflow: hidden;
    width: 100%;
    display: flex;
    justify-content: center;
    

    .sub-hero-card {
      display: flex;
      align-items: center;
      justify-content: flex-start; /* Flex cards from the start the container */
      flex-wrap: nowrap;
      overflow-x: auto;
      scroll-snap-type: x mandatory;
      gap: 5px;
      margin-top: 20px;
      -ms-overflow-style: none; /* IE and Edge */
      scrollbar-width: none; /* Firefox */

      &::-webkit-scrollbar {
        display: none; /* Safari and Chrome */
      }

      .card {
        border: 1px solid;
        padding: 6px;
        overflow: hidden;
        width: 250px;
        height: 400px;
        transition: transform 0.3s ease, box-shadow 0.3s ease;
        perspective: 1000px;
        flex: 0 0 auto; /* Prevent cards from shrinking */
        scroll-snap-align: center;
        display: inline-block;

        &:hover {
          transform: translateY(-15px) scale(1.0);
        }

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
    }

    .arrow {
      position: absolute;
      top: 50%;
      width: 30px;
      height: 30px;
      background-color: rgba(0, 0, 0, 0.5);
      color: white;
      display: flex;
      font-weight: bold;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      z-index: 10;
      transform: translateY(-50%);
      display: none; /* Hide arrows by default */

      &.left {
        left: 10px;
      }

      &.right {
        right: 10px;
      }
    }
  }

  @media (max-width: 768px) {
    .sub-hero-card-container {
      justify-content: flex-start; /* Align cards to the start on small screens */
      padding: 0;
    }

    .sub-hero-card {
      .card {
        width: 80%;
        height: auto;
      }

      .arrow {
        display: block; /* Show arrows on mobile */
      }
    }
  }
`;


const SubHero = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      const scrollAmount =
        direction === "left"
          ? scrollLeft - clientWidth
          : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({
        left: Math.max(0, Math.min(scrollAmount, scrollWidth)),
        behavior: "smooth",
      });
    }
  };

  return (
    <Wrapper>
      <div className="sub">
        <div className="text">
          <h1>
            More than 1000 volunteers working with us to build a community of
            love.
          </h1>
          <p>
            Whether you're a new contact or sharing your latest story, you can
            be sure to find a family in just a few clicks.
          </p>
        </div>

        <div className="sub-hero-card-container">
          <div className="arrow left" onClick={() => scroll("left")}>
            &lt;
          </div>

          <div className="sub-hero-card" ref={scrollRef}>
            {subImages.map((item, index) => (
              <div key={index} className="card">
                <img src={item.imageUrl} alt="image" />
              </div>
            ))}
          </div>

          <div className="arrow right" onClick={() => scroll("right")}>
            &gt;
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default SubHero;
