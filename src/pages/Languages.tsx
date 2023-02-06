import {
    Box, Button,
    CssBaseline, Link, Paper,
    Typography
} from "@mui/material";
import {createTheme, Theme, ThemeProvider} from "@mui/material/styles";
import React from "react";
import SkillsContents from "./SkillsContents";
import {GitHub as GitHubIcon, LinkedIn as LinkedInIcon, School as SchoolIcon} from "@mui/icons-material";
import ResearchGateIcon from "@material-ui/icons/AccountBalance";

const theme = createTheme({
    typography: {
        fontFamily: [
            '"Open Sans"',
            'sans-serif'
        ].join(','),
    },
});

const Interests = () => {
    return (
        <ThemeProvider theme={theme} >
            <CssBaseline />
            <Typography variant="h5" gutterBottom>
                Interests
            </Typography>
            <Box m={2} >
                <Paper elevation={3} >
                    <Box p={2} >
                        English
                    </Box>
                </Paper>
            </Box>
            <Box m={2} >
                <Paper elevation={3} >
                    <Box p={2} >

                    </Box>
                </Paper>
            </Box>
        </ThemeProvider>
    );
};

export default Interests;