import React from 'react';
import styled from 'styled-components';
import UnderNavImg from '../components/UnderNavImg';
const Properties = () => {
  return (
    <div>
      <UnderNavImg />
      <StyledContainer>
        <iframe
          src="https://las.mlsmatrix.com/Matrix/public/IDX.aspx?idx=95b259a"
          width="105%"
          height="1000px"
          frameborder="0"
          marginwidth="0"
          marginheight="0"
        />
      </StyledContainer>
    </div>
  );
};

const StyledContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  margin-bottom: -40px;
`;
export default Properties;
