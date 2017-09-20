import React from "react";
import styled from "styled-components";

const HR = () => <StyledHR />;

const StyledHR = styled.hr`
  border-style: solid;
  border-width: 1px 0 0 0;
  width: 99%;
  max-width: 1000px;
`;

export default HR;
