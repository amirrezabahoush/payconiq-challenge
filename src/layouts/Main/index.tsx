import React from "react";
import { Container } from "@mui/material";
import { Outlet } from "react-router-dom";
import ErrorBoundary from "../../components/ErrorBoundary";
import Header from "./Header";

const MainLayout = () => {
  return (
    <ErrorBoundary name="Layout">
      <div>
        <Header />
        <Container>
          <Outlet />
        </Container>
      </div>
    </ErrorBoundary>
  );
};
export default MainLayout;
