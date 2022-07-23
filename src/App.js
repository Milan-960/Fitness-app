import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import { Suspense } from "react";
import { Box } from "@mui/material";

import BaseRoutes from "Routes/Routes";

import './App.css';

function App() {
  return (
    <div className="App">
      <Box width="400px">
          <Suspense>
            <Router>
              <BaseRoutes />
            </Router>
          </Suspense>
      </Box>
    </div>
  );
}

export default App;
