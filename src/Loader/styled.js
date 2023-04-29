import styled from "styled-components";
import { ReactComponent as logo } from "../Logo/logo.svg"

export const Loader = styled(logo)` 
.animate {
  animation: draw 0.8s linear infinite;
}

@keyframes draw {
  0% {
    opacity: 0;
  }
  25% {
    opacity: 0.8;
  }
  50% {
    opacity: 1;
  }
  75% {
    opacity: 0.8;
  }
  100% {
    opacity: 0;
  }
}
`;