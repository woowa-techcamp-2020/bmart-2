import styled, { css, keyframes } from 'styled-components';

interface AnimationTestType {
  timing?: boolean;
  onClick?: any;
  disabled?: boolean;
  url?: string;
}

const makeCircle = keyframes`
  0% {
    border-radius: 0;
  }
  40% {
    border-radius: 50%;
    width: 100px;
    height: 100px;
    transform: translate3d(0, 0, 0);
  }
  70% {
    border-radius: 50%;
    width: 100px;
    height: 100px;
    transform: translate3d(0, -40px, 0);
  }
  100% {
    border-radius: 50%;
    width: 100px;
    height: 100px;
    transform: translate3d(0, 250px, 0);
  }
`;

const btnAnimation = keyframes`
  10% {
    transform: scale(0.95);
  }
  20% {
    transform: scale(1);
  }

  80% {
    transform: scale(1);
  }
  87% {
    transform: scale(1.08);
  }
  92% {
    transform: scale(1);
  }
  95% {
    transform: scale(1.04);
  }
  97% {
    transform: scale(1);
  }
  100% {
    transform: scale(1);
  }
`;

export const StyledFoodWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 400px;
`;

export const StyledFood = styled.div`
  width: 100%;
  height: 100%;
  background: white;
  background-image: url(${(props: AnimationTestType) => props.url});
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-size: cover;
  ${(props: AnimationTestType) =>
    props.timing &&
    css`
      animation: ${makeCircle} 1.5s;
    `}
`;

export const StyeldAnimationWrapper = styled.div`
  width: 100%;
  height: 600px;
  background: #ddd;
  padding: 32px;
  box-sizing: border-box;
`;

export const StyledCartButton = styled.div`
  width: 100%;
  height: 100px;
  border-radius: 16px;
  background: green;
  text-align: center;
  color: white;
  font-size: 20px;
  ${(props: AnimationTestType) =>
    props.timing &&
    css`
      animation: ${btnAnimation} 1.5s;
      pointer-events: none;
      background: red;
    `}
`;
