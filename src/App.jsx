import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Suspense } from "react";
import { Box } from "@mui/material";

import BaseRoutes from "Routes/Routes";

import "./App.css";

function App() {
  return (
    <>
      <Box width="400px">
        <Suspense>
          <Router>
            <BaseRoutes />
          </Router>
        </Suspense>
      </Box>
    </>
  );
}

export default App;
