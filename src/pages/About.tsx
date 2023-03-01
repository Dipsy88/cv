import {Box, Button, CssBaseline, Link, Paper, Typography} from "@mui/material";
import {createTheme, ThemeProvider} from "@mui/material/styles";
import {LinkedIn as LinkedInIcon, School as SchoolIcon, GitHub as GitHubIcon} from "@mui/icons-material";
import ResearchGateIcon from '@material-ui/icons/AccountBalance';
import React from "react";
import { withWidth } from "@material-ui/core";

const theme = createTheme({
    typography: {
        fontFamily: [
            '"Open Sans"',
            'sans-serif'
        ].join(','),
    },
});

const About = (props: { width: any; }) => {
    return (
        <ThemeProvider theme={theme} >
            <CssBaseline />
            <Box m={2} >
            <Paper elevation={3} >
                <Box p={2} >
                    <Typography variant="h5">
                        Dipesh Pradhan, PhD
                    </Typography>
                    <Typography variant="subtitle1" >
                        Senior Full Stack Developer | Technical Architect at Sopra Steria
                    </Typography>
                    <Typography variant="body1">
                        Oslo, <a href="mailto:dipesh.pradhan@outlook.com">dipesh.pradhan@outlook.com</a>
                    </Typography>
                    <br />
                    <Typography variant="body2">
                        Motivated professional with extensive experience in software development. I have a passion for learning, and I am always looking to improve myself.
                    </Typography>
                </Box>
                <Box  display="flex" flexWrap="wrap" justifyContent="center">
                    <Link href="https://github.com/dipeshpradhan" target="_blank">
                        <Button variant="contained" color="primary" startIcon={<GitHubIcon />}>
                            Github
                        </Button>
                    </Link>
                    <Box mx={2}/>
                    <Link href="https://www.linkedin.com/in/dipeshpradhan" target="_blank">
                        <Button variant="contained" color="primary" startIcon={<LinkedInIcon />}>
                            LinkedIn
                        </Button>
                    </Link>
                    <Box mx={2}/>
                    <Link href="https://scholar.google.com/citations?user=MTJKnF0AAAAJ&hl=en" target="_blank">
                        <Button variant="contained" color="primary" startIcon={<SchoolIcon />}>
                            Google Scholar
                        </Button>
                    </Link>
                    <Box mx={2}/>
                    <Link href="https://www.researchgate.net/profile/Dipesh-Pradhan" target="_blank">
                        <Button variant="contained" color="primary" startIcon={<ResearchGateIcon />}>
                            Research Gate
                        </Button>
                    </Link>
                </Box>
                <Box mt={2} display="flex" justifyContent="center">
                    <Link href="path/to/resume.pdf" download>
                        <Button variant="contained" color="secondary">
                            Download my resume
                        </Button>
                    </Link>
                </Box>
            </Paper>
            </Box>
        </ThemeProvider>
    );
};
export default withWidth()(About);