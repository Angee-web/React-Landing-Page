import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { reviews } from "../utils/reviews";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  position: relative;
  height: 100vh;
  text-align: center;
  font-size: 20px;

  .arrows {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 100%;
    display: flex;
    justify-content: space-between;

    button {
      background: white;
      border: none;
      padding: 10px;
      font-size: 24px;
      cursor: pointer;
      color: lightblue;
      font-size: 50px;

      &:focus {
        outline: none;
      }
    }
  }

  .card-container {
    display: flex;
    transition: transform 0.5s ease;
    overflow: hidden;
    width: 100%;

    .card {
      background: white;
      border: 1px solid;
      padding: 20px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      text-align: center;
      margin: 10px;
      width: 100%; /* Default for small screens */

      @media (min-width: 768px) {
        width: 45%; /* 2 cards for medium screens */
      }

      @media (min-width: 1024px) {
        width: 22%; /* 4 cards for large screens */
      }

      .content {
        text-align: left;
        line-height: 1.5;
      }
    }
  }

  .dots {
    display: flex;
    justify-content: center;
    margin-top: 20px;

    .dot {
      width: 10px;
      height: 10px;
      background-color: ${({ isActive }) => (isActive ? "#000" : "#ccc")};
      border-radius: 50%;
      margin: 0 5px;
      cursor: pointer;
    }
  }
`;

const Review = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [cardsPerSlide, setCardsPerSlide] = useState(1);

  // Update number of cards based on screen size
  useEffect(() => {
    const updateCardsPerSlide = () => {
      if (window.innerWidth >= 1024) {
        setCardsPerSlide(4); // Large screen: 4 cards
      } else if (window.innerWidth >= 768) {
        setCardsPerSlide(2); // Medium screen: 2 cards
      } else {
        setCardsPerSlide(1); // Small screen: 1 card
      }
    };

    window.addEventListener("resize", updateCardsPerSlide);
    updateCardsPerSlide();

    return () => window.removeEventListener("resize", updateCardsPerSlide);
  }, []);

  const totalSlides = Math.ceil(reviews.length / cardsPerSlide);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? totalSlides - 1 : prevSlide - 1
    );
  };

  const getTransformStyle = () => {
    return `translateX(-${currentSlide * (100 / cardsPerSlide)}%)`;
  };

  return (
    <Wrapper>
      <div className="arrows">
        <button onClick={prevSlide}>{"<"}</button>
        <button onClick={nextSlide}>{">"}</button>
      </div>

      <div
        className="card-container"
        style={{ transform: getTransformStyle() }}
      >
        {reviews.map((review, index) => (
          <div className="card" key={index}>
            <p>{review.review}</p>
            <div className="content">
              <h4>{review.name}</h4>
              <p>{review.age}</p>
              <p>{review.occupation}</p>
              <p>
                {review.rating} stars <span>⭐️⭐</span>
              </p>
              <p>{review.country}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="dots">
        {Array(totalSlides)
          .fill(null)
          .map((_, index) => (
            <div
              className="dot"
              key={index}
              isActive={index === currentSlide}
              onClick={() => setCurrentSlide(index)}
            ></div>
          ))}
      </div>
    </Wrapper>
  );
};

export default Review;
