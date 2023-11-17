"use client";

import { Box, Container } from "@mui/material";
import Header from "@/app/components/layout/header/Index";
import { ReactNode } from "react";
import { Content } from "@/app/styles/global";

function Index({ children }: { children: ReactNode }) {
  return (
    <Container disableGutters maxWidth={false}>
      <Box>
        <Header />
      </Box>
      <Box>
        <Content>{children}</Content>
      </Box>
    </Container>
  );
}

export default Index;
