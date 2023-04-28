import styled from "styled-components";

export const Logo = styled.img`
  position: fixed;
  top: 80vh;
  left: 45vw;
  width: 10px;
  height: 10px;
  animation: cube 10s ease-in forwards infinite;
  z-index: -1;
  
  &:nth-child(2) {
    animation-delay: 2s;
    left: 25vw;
    top: 45vh;
  }
  
  &:nth-child(3) {
    animation-delay: 4s;
    left: 75vw;
    top: 50vh;
  }
  
  &:nth-child(4) {
    animation-delay: 6s;
    left: 90vw;
    top: 30vh;
  }
  
  &:nth-child(5) {
    animation-delay: 8s;
    left: 10vw;
    top: 85vh;
  }
  
  &:nth-child(6) {
    animation-delay: 10s;
    left: 20vw;
    top: 25vh;
  }

  @keyframes cube {
    from {
      transform: scale(0) rotate(0deg) translate(-25%, -25%);   
      opacity: 1;
    }
    
    to {
      transform: scale(20) rotate(960deg) translate(-25%, -25%); 
      opacity: 0;
    }
`;