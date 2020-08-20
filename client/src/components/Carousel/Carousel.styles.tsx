import styled, { keyframes, css } from 'styled-components';

const StyledWrapper = styled.div`
  width: 100%;
  position: relative;
  overflow: hidden;
  margin-top: 1vh;
`;

const StyledCarousel = styled.div`
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  ::-webkit-scrollbar {
    height: 0px; /* Remove scrollbar space */
  }
`;

const StyledHourse = styled.div`
  width: 80%;
  margin-left: -5%;
  padding-left: 10%;
  display: inline-block;
  flex: 0 0 auto;
  scroll-snap-align: start;
  scroll-snap-stop: always;
  align-items: center;
  display: flex;
`;

const StyledThumb = styled.img`
  width: 100%;
  border-radius: 6vw;
  box-shadow: ${(props) => props.theme.shadow};
  height: 90%;
`;

const bigger = keyframes`
  from {
    height: 90%
  }
  to {
    height: 100%;
  }
`;

const StyledCurrentThumb = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 6vw;
  box-shadow: ${(props) => props.theme.shadow};
  ${css`
    animation: ${bigger} 0.3s forwards;
  `}}
`;

const StyledPaginationWrapper = styled.div`
  width: 100%;
  height: 5vw;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1vw;
  box-sizing: border-box;
`;

const StyledBullet = styled.label`
  width: 2vw;
  height: 2vw;
  margin-right: 2vw;
  border-radius: 100%;
  background-color: #dfdfdf;
  input {
    display: none;
  }
`;

const StyledCheckedBullet = styled.label`
  width: 2.5vw;
  height: 2.5vw;
  margin-right: 2vw;
  border-radius: 100%;
  background-color: #000;
  input {
    display: none;
  }
`;

export {
  StyledWrapper,
  StyledCarousel,
  StyledHourse,
  StyledThumb,
  StyledPaginationWrapper,
  StyledBullet,
  StyledCheckedBullet,
  StyledCurrentThumb,
};
