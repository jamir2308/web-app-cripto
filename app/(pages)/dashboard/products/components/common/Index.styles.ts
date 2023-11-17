import { CardIconProps } from "@/app/models/ProductModel";
import { Box } from "@mui/material";
import styled from "styled-components";

export const CardDetails = styled(Box) <CardIconProps>`
  width: 100%;
  height: 100px;
  background-color: ${(props) => props.$bgColor || "#f2f1f6"};
  border-radius: 12px;
  padding: 8%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const WraperItems = styled(Box)`
  width: 100%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  border-radius: 12px;
  border: 1px solid #f2f1f6;
  padding: 20px;
  justify-content: center;
`;

export const StyledBox = styled(Box)`
  margin: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;