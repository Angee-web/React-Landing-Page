import React from "react";
import styled, { keyframes, css } from "styled-components";
import { useInView } from "react-intersection-observer";

// Keyframes for sliding in animations
const slideInLeft = keyframes`
  from {
    transform: translateX(-100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

const slideInRight = keyframes`
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  align-items: center;
  justify-content: center;
  text-align: center;

  /* Media query for medium and small screens */
  @media (max-width: 768px) {
    padding: 2rem 0;
    margin-top: 55rem;
  }

  @media (min-width: 768px) {
    padding: 2rem 0;
    margin-top: 0rem;
  }

  .container {
    display: flex;
    gap: 5rem;
    align-items: center;
    justify-content: center;
    max-width: 1200px;
    padding: 20px 0px;

    /* Flex for large screens */
    @media (min-width: 769px) {
      flex-direction: row;
      gap: 1rem;
    }

    /* Center and stack content for small and medium screens */
    @media (max-width: 768px) {
      flex-direction: column;
      text-align: center;
    }
  }

  .img {
    /* Apply sliding animation when in view */
    ${({ inView }) =>
      inView &&
      css`
        animation: ${slideInLeft} 3s ease-out;
      `}
    img {
      max-width: 700px;
      height: auto;
      align-self: flex-start;

      @media (max-width: 768px) {
        max-width: 90%;
      }
    }
  }

  .text {
    display: flex;
    flex-direction: column;
    max-width: 60%;
    text-align: left;

    /* Apply sliding animation when in view */
    ${({ inView }) =>
      inView &&
      css`
        animation: ${slideInRight} 3s ease-out;
      `}

    @media (max-width: 768px) {
      max-width: 100%;
      padding: 20px;
    }

    h4 {
      font-size: 3rem; /* Increased font size */
      margin-bottom: 2rem; /* Increased margin for spacing */
    }

    p {
      font-size: 1.5rem; /* Increased font size */
      margin-bottom: 2.5rem; /* Increased margin for spacing */
    }

    .vol {
      border: 2px solid #201600;
      font-size: 1.3rem; /* Slightly increased button font size */
      padding: 14px 28px; /* Adjusted padding for the button */
      width: fit-content;
      border-radius: 24px;
      transition: transform 0.3s ease, box-shadow 0.3s ease;
      cursor: pointer;
      background-color: white;
      align-self: flex-start; /* Align button to the left on large screens */

      &:hover {
        transform: translateY(-10px);
        box-shadow: 0px 4px 0px rgba(32, 12, 0);
      }

      @media (max-width: 768px) {
        align-self: left;
      }
    }
  }
`;

const Slide = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger animation only once when the component comes into view
    threshold: 0.1, // Adjust the threshold as needed
  });

  return (
    <Wrapper ref={ref} inView={inView}>
      <div className="container">
        {/* image */}
        <div className="img">
          <img src="https://eep.io/images/yzco4xsimv0y/2ewurCGaai01QOo0c24QAq/dc5c8ae42584033c0851f19894ee1251/ILLO_Hero_Transactional-Sending_Receiving-1520.png?w=1600&fm=avif&q=60" />
        </div>

        {/* text */}
        <div className="text">
          <h4>Trying to decide if uDo na iHunaya is the right fit for you?</h4>
          <p>
            See how many people we have helped and experience true community at
            its finest. We have a suite of additional tools that can help you be
            the best version of yourself there is. Optimize every opportunity
            and seize the future for yourself.
          </p>
          <button className="vol">Learn more</button>
        </div>
      </div>
    </Wrapper>
  );
};

export default Slide;
