import { Box } from "@mui/material";
import styled from "styled-components";

export const Wraper = styled(Box)`
  width: 30%;
  margin: auto;
  @media screen and (max-width: 1200px) {
    width: 50%;
  }
  @media screen and (max-width: 750px) {
    width: 90%;
  }
`;