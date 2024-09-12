import { Link } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  background-color: #200c00;
  color: #f7f7f7;
  padding: 5px;
  line-height: 1px;
  font-size: 13px;
  text-align: center;

  .flex{
  display:flex;
  align-items:center;
  gap:5px;
  justify-content:center;
  }

  a {
    text-decoration: underlined;
    color: #f7f7f7;
    font-size: 15px;
  }
`;
const BeforeNav = () => {
  return (
    <Wrapper>
      <h3>Save 50% for 12 months</h3>
      <div className="flex">
        <h3>- limited time offer.</h3>
        <Link to="/">Get started today</Link>
      </div>
    </Wrapper>
  );
};

export default BeforeNav;
