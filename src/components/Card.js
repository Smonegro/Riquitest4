import React from "react";
import styled from "styled-components";

const Card = (props) => {
  return <GeneralDiv {...props}>{props.children}</GeneralDiv>;
};

export default Card;

const GeneralDiv = styled.div`
  background: #f3f3f3;
  box-shadow: 0 2px 30px white;
  border-radius: 10px;
  box-sizing: border-box;
`;
