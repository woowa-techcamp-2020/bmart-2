import styled from 'styled-components';

export const StyledSummaryWrapper = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding: 2vh 1vh;
`;

export const StyledSummaryContent = styled.div`
  width: 100%;
  box-shadow: ${(props) => props.theme.shadow};
  padding: 2vh 3vh;
  box-sizing: border-box;
  border-radius: 3vh;
`;

export const StyledSummaryInfo = styled.div`
  display: flex;
  font-weight: bold;
  margin-bottom: 1vh;
  h4 {
    flex: 1;
  }
`;
