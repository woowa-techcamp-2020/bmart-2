import styled from 'styled-components';

const StyledWrapper = styled.div`
  width: 100%;
  background-color: blue;
  position: relative;
  overflow: hidden;
`;

const StyledCarousel = styled.div`
  width: 1000%;
  transform: translate(-7.5%);
`;

const StyledHourse = styled.div`
  width: 8%;
  margin-right: 0.5%;
  display: inline-block;
  border-radius: 15px;
`;

const StyledThumb = styled.img`
  width: 100%;
`;
export { StyledWrapper, StyledCarousel, StyledHourse, StyledThumb };
