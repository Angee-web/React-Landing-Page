import styled from "styled-components";

const Wrapper = styled.div`
  background-color: #eaddca;
  display: flex;
  gap: 40px;
  align-items: center;
  justify-content: center;
  padding: 20px;
  box-sizing: border-box;

  /* Media queries for responsiveness */
  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
    padding: 20px;
    text-align: center;
  }

  .text {
    display: flex;
    flex-direction: column;
    max-width: 30%;
    overflow-wrap: break-word;

    h1 {
      margin: 0;
      font-size: 2.25rem; /* Adjusted font size for responsiveness */
    }

    h3 {
      margin: 0.5rem 0;
      font-size: 1.3rem;
    }

    p {
      margin: 1rem 0;
      font-size: 1rem;
    }

    .vol {
      border: 2px solid #201600;
      padding: 8px 16px;
      width: auto;
      border-radius: 18px;
      transition: transform 0.3s ease, box-shadow 0.3s ease;
      cursor: pointer;
      background-color: #ffff00;
      margin: 0 auto;

      &:hover {
        transform: translateY(-10px);
        box-shadow: 0px 4px 0px rgba(32, 12, 0);
      }
    }

    @media (max-width: 768px) {
      max-width: 50%;
    }
  }

  .image {
    max-width: 30%;
    img {
      width: 70%; /* Responsive width */
      height: auto;
      object-fit: cover;

      @media (max-width: 768px) {
        width: 100%;
        height: auto;
      }
    }
      @media (max-width: 768px) {
      max-width: 100%;
    }
  }
`;

const HeroSection = () => {
  const imageUrl =
    "https://plus.unsplash.com/premium_photo-1723809794305-9a9598bd6294?q=80&w=1787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  return (
    <Wrapper>
      {/* text */}
      <div className="text">
        <h1>
          Promote Peace and Love. Share the ideals that help our society
          progress.
        </h1>
        <h3>
          Together we can make a better community where the next generation can
          thrive at their peak.
        </h3>

        <p className="vol">Volunteer Today</p>
      </div>

      {/* picture */}
      <div className="image">
        <img src={imageUrl} alt="hero image" />
      </div>
    </Wrapper>
  );
};

export default HeroSection;
