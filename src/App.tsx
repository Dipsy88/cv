import React from 'react';
import { Box, CssBaseline, Paper, Typography } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Home from "./pages/Home";
import {BrowserRouter as Router} from "react-router-dom";

function App() {

    return (
            <Home/>
    )

}

export default App;
