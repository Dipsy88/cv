import {
    CssBaseline,
    Typography
} from "@mui/material";
import {createTheme, ThemeProvider} from "@mui/material/styles";
import React from "react";
import SkillsContents from "./SkillsContents";

const theme = createTheme({
    typography: {
        fontFamily: [
            '"Open Sans"',
            'sans-serif'
        ].join(','),
    },
});

const Skills = () => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Typography variant="h5" gutterBottom>
                Skills
            </Typography>
            <br/>
            <SkillsContents/>
            <br/>
        </ThemeProvider>
    );
};

export default Skills;