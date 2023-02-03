import {Box, CssBaseline, Paper, Typography} from "@mui/material";
import {createTheme, ThemeProvider} from "@mui/material/styles";
import React from "react";

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
            <Box m={2}>
                <Paper elevation={3}>
                    <Box p={2}>
                        <Box display="flex" justifyContent="space-between">
                            <Typography variant="h6" gutterBottom>
                                Technical Skills
                            </Typography>
                            <Box>
                                <Typography variant="caption">
                                    95%
                                </Typography>
                            </Box>
                        </Box>
                        <Box p={2}>
                            <Typography variant="body2" gutterBottom>
                                Java, Kotlin, React, Postgres, REST, GraphQL, Kafka, Redis, ELK stack, Prometheus, Grafana, Azure AD, Google Cloud, Kubernetes, Github, Github Actions
                            </Typography>
                        </Box>
                    </Box>
                </Paper>
            </Box>
            <Box m={2}>
                <Paper elevation={3}>
                    <Box p={2}>
                        <Box display="flex" justifyContent="space-between">
                            <Typography variant="h6" gutterBottom>
                                Other Skills
                            </Typography>
                            <Box>
                                <Typography variant="caption">
                                    85%
                                </Typography>
                            </Box>
                        </Box>
                        <Box p={2}>
                            <Typography variant="body2" gutterBottom>
                                Agile, Scrum, DevOps, Microservices, Docker, Git, CI/CD
                            </Typography>
                        </Box>
                    </Box>
                </Paper>
            </Box>
        </ThemeProvider>
    );
};

export default Skills;