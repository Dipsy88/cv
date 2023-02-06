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
                        Dipesh values the time he gets to spend with his family and cherishes the memories they create together. He enjoys taking scenic walks on the forest and immersing himself in nature.
                        As a tech-savvy individual, Dipesh is always seeking to expand his knowledge and stay updated on the latest advancements in technology. He also has a keen interest in history and is inspired by movies that are based on real-life events. With his commitment to family, personal growth, and learning, Dipesh brings a diverse range of interests and a valuable perspective to any situation.                    </Box>
                </Paper>
            </Box>
        </ThemeProvider>
    );
};

export default Interests;