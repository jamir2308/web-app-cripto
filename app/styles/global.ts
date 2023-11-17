'use client'

import { Grid } from '@mui/material';
import styled, { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
      box-sizing: border-box;
      padding: 0;
      margin: 0;
    }

    html,
    body {
      max-width: 100vw;
      overflow-x: hidden;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    p,
    a,
    button, li, a, span, small, label {
      margin: 0;
    }

    a {
      text-decoration: none;
    }
`;

export const Content = styled(Grid)`
  background-color: #f2f3f7;
  margin-top: 50px;
  padding: 30px 100px;
  box-shadow: 0px 8px 24px 0px #55657540 inset;
  min-height: 100vh;
  border-radius: 10px 10px 0 0;
  overflow-y: scroll;
  @media screen and (max-width: 767px) {
    padding: 30px;
  }
`;