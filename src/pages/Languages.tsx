import {
    Box,
    CssBaseline, Paper,
    Typography
} from "@mui/material";
import {createTheme, ThemeProvider} from "@mui/material/styles";
import React from "react";
import LanguageContents from "./LanguageContents";

const theme = createTheme({
    typography: {
        fontFamily: [
            '"Open Sans"',
            'sans-serif'
        ].join(','),
    },
});

const Languages = () => {
    return (
        <ThemeProvider theme={theme} >
            <CssBaseline />
            <Typography variant="h5" gutterBottom>
                Languages
            </Typography>
            <br />
            <LanguageContents />
            <br />
        </ThemeProvider>
    );
};

export default Languages;