import React from "react";
import { Suspense } from "react";
import { Box } from "@mui/material";

import BaseRoutes from "Routes/BaseRoutes";
import Navbar from "Components/Navbar/Navbar";
import Footer from "Components/Footer/Footer";

import "./App.css";

function App() {
  return (
    <>
      <Box width="400px" sx={{ width: { xl: "1488px" } }} m="auto">
        <Suspense>
          <Navbar />
          <BaseRoutes />
          <Footer />
        </Suspense>
      </Box>
    </>
  );
}

export default App;
