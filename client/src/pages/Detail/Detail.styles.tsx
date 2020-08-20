import styled from 'styled-components';

interface DetailPageType {
  src?: string;
  open?: boolean;
}

export const StyledDetialWrapper = styled.div`
  width: 100%;
  min-height: calc(100vh - 60px);
`;

export const StyledImage = styled.div`
  padding: 16px;
  margin: 16px 0;
  height: 50vh;
  border-radius: 12px;
  background-image: url('${(props: DetailPageType) => props.src}');
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const StyledCartButton = styled.div`
  position: fixed;
  width: calc(100% - 32px);
  border-radius: 16px;
  background: #dd4470;
  bottom: 24px;
  height: 48px;
  color: white;
  font-size: 16px;
  font-weight: 700;
  line-height: 48px;
  text-align: center;
`;

export const StyledNameText = styled.div`
  width: 100%;
  font-size: 18px;
  margin-bottom: 8px;
`;

export const StyledPriceText = styled.div`
  width: 100%;
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 4px;
`;

export const InfoContent = styled.div`
  width: 100%;
  display: flex;
  padding: 4px 0;
  line-height: 16px;
  div {
    line-height: 16px;
  }
`;

export const InfoTitle = styled.div`
  width: 66px;
  font-weight: 600;
`;
