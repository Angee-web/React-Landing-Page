import styled from "styled-components";
import { GiMonkey } from "react-icons/gi";
import { FaSearch, FaBars, FaTimes } from "react-icons/fa"; // Import icons
import { BsFillTelephoneFill } from "react-icons/bs";
import { useState } from "react";

// Keyframes for the bounce animation
const bounceAnimation = `
  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-15px);
    }
    60% {
      transform: translateY(-10px);
    }
  }
`;

const Wrapper = styled.div`
  background-color: #eaddca;
  padding: 3px 20px;
  display: flex;
  justify-content: space-between;
  gap: 10px;
  align-items: center;

  &:hover {
    background-color: #f7f7f7;
  }

  .logo {
    display: flex;
    align-items: center;
    gap: 5px;
    font-size: 20px;
    font-weight: bold;

    .icon {
      width: 50px;
      height: 50px;
      transition: transform 0.3s ease;

      &:hover {
        /* Apply the bounce animation on hover */
        animation: bounce 1s;
      }
    }
  }

  .navlinks {
    display: flex;
    gap: 12px;

    p {
      padding: 5px;
      &:hover {
        background: #e0dfdc;
        border-radius: 10px;
      }
    }

    @media (max-width: 768px) {
      display: none; /* Hide nav links on mobile */
    }
  }

  .search,
  .number {
    a {
      color: inherit;
      text-decoration: none;
    }

    &:hover {
      background-color: #e0dfdc;
      border-radius: 10px;
      padding: 5px;
    }

    @media (max-width: 768px) {
      display: none; /* Hide on mobile */
    }
  }

  .reglog {
    display: flex;
    gap: 13px;

    .yel {
      background-color: #ffff00;
    }

    p {
      border: 2px solid;
      padding: 8px 15px;
      border-radius: 18px;
      transition: transform 0.3s ease, box-shadow 0.3s ease;
      cursor: pointer;

      &:hover {
        transform: translateY(-10px);
        box-shadow: 0px 4px 0px rgb(32, 12, 0);
      }
    }

    @media (max-width: 768px) {
      display: none; /* Hide on mobile */
    }
  }

  .hamburger {
    display: none;
    font-size: 30px;
    cursor: pointer;

    @media (max-width: 768px) {
      display: block; /* Show hamburger on mobile */
    }
  }

  /* Include bounce animation styles */
  ${bounceAnimation}
`;

const Hamburger = styled.div`
  background-color: #eaddca;
  padding: 10px;

  .dropP {
    &:hover {
      background-color: #e0dfdc;
      border-radius: 10px;
      padding: 5px;
    }
  }

  .searchD,
  .numberD {
    a {
      color: inherit;
      text-decoration: none;
    }

    &:hover {
      background-color: #e0dfdc;
      border-radius: 10px;
      padding: 5px;
    }
  }

  .reglogD {
    display: flex;
    gap: 13px;

    .yelD {
      background-color: #ffff00;
    }

    p {
      border: 2px solid;
      padding: 8px 15px;
      border-radius: 18px;
      transition: transform 0.3s ease, box-shadow 0.3s ease;
      cursor: pointer;

      &:hover {
        transform: translateY(-10px);
        box-shadow: 0px 4px 0px rgb(32, 12, 0);
      }
    }
  }
`;

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <Wrapper>
        <div className="logo">
          <GiMonkey className="icon" />
          <span>uDo na iHUNAYA</span>
        </div>

        {/* Normal navlinks */}
        <div className="navlinks">
          <p>Solutions</p>
          <p>Resources</p>
          <p>Pricing</p>
        </div>

        {/* Search */}
        <div className="search">
          <a href="/" rel="noopener noreferrer">
            <FaSearch />
          </a>
        </div>

        {/* Number */}
        <div className="number">
          <a
            href="tel:+2349039558051"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsFillTelephoneFill />
            +2349039558051
          </a>
        </div>

        {/* Reg and log */}
        <div className="reglog">
          <div>
            <p className="yel">Sign Up</p>
          </div>
          <div>
            <p>Log In</p>
          </div>
        </div>

        {/* Hamburger menu for mobile */}
        <div className="hamburger" onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </Wrapper>

      {/* Dropdown menu */}
      <Hamburger>
        {menuOpen && (
          <div className="dropdown">
            <p className="dropP">Solutions</p>
            <p className="dropP">Resources</p>
            <p className="dropP">Pricing</p>

            <div className="searchD">
              <a href="/" rel="noopener noreferrer">
                <FaSearch />
              </a>
            </div>

            <div className="numberD">
              <a
                href="tel:+2349039558051"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsFillTelephoneFill />
                +2349039558051
              </a>
            </div>

            <div className="reglogD">
              <div>
                <p className="yelD">Sign Up</p>
              </div>
              <div>
                <p>Log In</p>
              </div>
            </div>
          </div>
        )}
      </Hamburger>
    </>
  );
};

export default NavBar;
