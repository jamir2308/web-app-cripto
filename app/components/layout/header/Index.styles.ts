import { Box } from "@mui/material";
import styled from "styled-components";

export const Wraper = styled(Box)`
  position: fixed;
  z-index: 1000;
  width: 100%;
  top: 0px;
  flex-shrink: 0;
  background: var(--white-theme-gray-0, #fff);
  box-shadow: 0px 2.76726px 2.21381px 0px rgba(178, 183, 219, 0.01),
    0px 6.6501px 5.32008px 0px rgba(178, 183, 219, 0.02),
    0px 12.52155px 10.01724px 0px rgba(178, 183, 219, 0.03),
    0px 22.33631px 17.86905px 0px rgba(178, 183, 219, 0.03),
    0px 41.77761px 33.42209px 0px rgba(178, 183, 219, 0.04),
    0px 100px 80px 0px rgba(178, 183, 219, 0.05);

    .mobile {
      display: none;
    }

  @media screen and (max-width: 500px) {
    .desktop {
      display: none;
    }
    .mobile {
      display: block;
    }
  }
`;

export const Selected = styled(Box)`
  &.active {
    div {
      color: #90b2b9;
    }
    & :hover {
      color: #566a6e;
    }
  }
`;
