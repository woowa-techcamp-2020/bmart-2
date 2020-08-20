import styled from 'styled-components';

const StyledWrapper = styled.div`
  width: 100%;
  position: relative;
  overflow: hidden;
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
  border-radius: 15px;
  flex: 0 0 auto;
  scroll-snap-align: start;
  scroll-snap-stop: always;
`;

const StyledThumb = styled.img`
  width: 100%;
`;
export { StyledWrapper, StyledCarousel, StyledHourse, StyledThumb };
