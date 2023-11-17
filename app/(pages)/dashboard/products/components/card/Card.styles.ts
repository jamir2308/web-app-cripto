import { CardIconProps } from "@/app/models/ProductModel";
import { Box, Paper } from "@mui/material";
import styled from "styled-components";

export const CardIconStyled = styled(Box) <CardIconProps>`
  width: 30%;
  height: 50px;
  background-color: ${(props) => props.$bgColor};
  border-radius: 12px;
  display: flex;
  align-items: center;
`;

export const DetailContainer = styled(Paper)`
  padding: 5%;
  margin-top: 20px;
  border-radius: 15px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
`;