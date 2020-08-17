import styled from 'styled-components';

const StyledWrapper = styled.div`
  width: 100%;
  background-color: blue;
  position: relative;
  overflow: hidden;
  ::-webkit-scrollbar {
    height: 0px; /* Remove scrollbar space */
  }
`;

const StyledCarousel = styled.div`
  display: flex;
  overflow-x: auto;
`;

const StyledHourse = styled.div`
  width: 80%;
  padding-right: 5%;
  display: inline-block;
  border-radius: 15px;
  flex: 0 0 auto;
`;

const StyledThumb = styled.img`
  width: 100%;
`;
export { StyledWrapper, StyledCarousel, StyledHourse, StyledThumb };
