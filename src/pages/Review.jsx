import React, { useState } from "react";
import styled from "styled-components";
import { reviews } from "../utils/reviews";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  position: relative;
  height: 100vh;
  padding: 40px;
  text-align: center;
  font-size: 20px;

  @media (max-width: 768px) {
    overflow: hidden;
  }

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

      &:focus {
        outline: none;
      }
    }
  }

  .card-container {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;

    @media (max-width: 768px) {
      transform: ${({ currentSlide }) => `translateX(-${currentSlide * 100}%)`};
    }

    .card {
      background: white;
      border: 1px solid ;
      padding: 20px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      text-align: center;
      max-width: 300px;

      @media (min-width: 768px) {
        width: 300px;
      }

      .content{
      text-align: left;
      line-height: 0.5;
      }
    }
  }

  .dots {
    display: flex;
    justify-content: center;
    margin-top: 40px;

    @media (min-width: 768px) {
      display: none;
    }

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

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % reviews.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? reviews.length - 1 : prevSlide - 1
    );
  };

  return (
    <Wrapper>
      <div className="arrows">
        <button onClick={prevSlide}>{"<"}</button>
        <button onClick={nextSlide}>{">"}</button>
      </div>

      <div className="dots-and-card">
        <div className="card-container" currentSlide={currentSlide}>
          {reviews.map((review, index) => (
            <div className="card" key={index}>
              <p>{review.review}</p>
              <div className="content">
                <h4>{review.name}</h4>
                <p>{review.age}</p>
                <p>{review.occupation}</p>
                <p>
                  <span>⭐️⭐⭐⭐</span>
                </p>
                <p>{review.country}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="dots">
          {reviews.map((_, index) => (
            <div
              className="dot"
              key={index}
              isActive={index === currentSlide}
              onClick={() => setCurrentSlide(index)}
            ></div>
          ))}
        </div>
      </div>
    </Wrapper>
  );
};

export default Review;
