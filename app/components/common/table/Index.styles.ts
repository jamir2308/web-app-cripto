import { Container, TableRow } from "@mui/material";
import styled from "styled-components";

export const StyledTableRow = styled(TableRow)`
  background-color: white;
  margin-bottom: 10px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);

  &:nth-of-type(odd),
  &:nth-of-type(even) {
    background-color: white;
  }

  &:last-child td,
  &:last-child th {
    border: 0;
  }

  & td:first-of-type {
    border-top-left-radius: 6px;
    border-bottom-left-radius: 6px;
  }

  & td:last-of-type {
    border-top-right-radius: 6px;
    border-bottom-right-radius: 6px;
  }

  & th:first-of-type {
    border-top-left-radius: 3px;
    border-bottom-left-radius: 3px;
  }

  & th:last-of-type {
    border-top-right-radius: 3px;
    border-bottom-right-radius: 3px;
  }

  th {
    padding: 10px 20px;
  }
`;

export const StyledTableContainer = styled(Container)`
  & .MuiPaper-root {
    overflow: hidden;
  }

  & .MuiTable-root {
    border-collapse: separate;
    border-spacing: 0 10px;
    border-radius: 50px;
  }
`;