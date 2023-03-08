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

const Education = () => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Typography variant="h5" gutterBottom>
                Education
            </Typography>
            <h3>Degrees</h3>
            <Box m={2}>
                <Paper elevation={3}>
                    <Box p={2}>
                        <Box display="flex" justifyContent="space-between">
                            <Typography variant="h6" gutterBottom>
                                Doctor of Philosophy (PhD) Informatics: Software Engineering
                            </Typography>
                            <Typography variant="body2" gutterBottom>
                                Aug 2015 - July 2018
                            </Typography>
                        </Box>
                        <Box display="flex" justifyContent="space-between">
                            <Typography variant="subtitle1" gutterBottom>
                                <a href="https://www.uio.no/" style={{ color: 'blue' }} target="_blank" rel="noreferrer">
                                    University of Oslo (UiO)
                                </a>
                            </Typography>
                            <Typography variant="body2" gutterBottom>
                                Oslo, Norway
                            </Typography>
                        </Box>
                        <Typography variant="body2" gutterBottom>
                            <b>Courses:</b> Open Distributed Processing (INF9040), Statistical Methods and Applications (STK9900), Communicating Scientific Research (INF9051SP), Science, Ethics, and Society (MNSES9100)
                            <br />
                            <b>Thesis Title:</b> <a href="https://www.duo.uio.no/handle/10852/67569" style={{ color: 'blue' }} target="_blank" rel="noreferrer">Evolutionary Computation Based Test Optimization of Large-Scale Systems</a>
                        </Typography>
                    </Box>
                </Paper>
            </Box>
            <Box m={2}>
                <Paper elevation={3}>
                    <Box p={2}>
                        <Box display="flex" justifyContent="space-between">
                            <Typography variant="h6" gutterBottom>
                                Master of Science (MS) Informatics: Programming and Network - A
                            </Typography>
                            <Typography variant="body2" gutterBottom>
                                Aug 2013 - July 2015
                            </Typography>
                        </Box>
                        <Box display="flex" justifyContent="space-between">
                            <Typography variant="subtitle1" gutterBottom>
                                <a href="https://www.uio.no/" style={{ color: 'blue' }} target="_blank" rel="noreferrer">
                                    University of Oslo (UiO)
                                </a>
                            </Typography>
                            <Typography variant="body2" gutterBottom>
                                Oslo, Norway
                            </Typography>
                        </Box>
                        <Typography variant="body2" gutterBottom>
                            <b>Courses:</b> Open Source Software Development (Java with spring framework, maven, hibernate, web APIs, javascript) (INF5750), Process Improvement and Agile Methods in Systems Development (INF5181), Estimation and Planning of Software Projects (INF5520), Model-Based System Development (INF5120), Selected Topics in Static Analysis (INF5906), Unassailable IT Systems (INF5150), Development of Mobile Information Systems and Services (INF5261)
                            <br />
                            <b>Activities and organizations:</b> Aiesec UiO
                        </Typography>
                    </Box>
                </Paper>
            </Box>
            <Box m={2}>
                <Paper elevation={3}>
                    <Box p={2}>
                        <Box display="flex" justifyContent="space-between">
                            <Typography variant="h6" gutterBottom>
                                Bachelor of Engineering (BE) Information Technology - B
                            </Typography>
                            <Typography variant="body2" gutterBottom>
                                Aug 2008 - Dec 2011
                            </Typography>
                        </Box>
                        <Box display="flex" justifyContent="space-between">
                            <Typography variant="subtitle1" gutterBottom>
                                <a href="https://www.metropolia.fi/en" style={{ color: 'blue' }} target="_blank" rel="noreferrer">
                                    Metropolia University of Applied Sciences
                                </a>
                            </Typography>
                            <Typography variant="body2" gutterBottom>
                                Helsinki, Finland
                            </Typography>
                        </Box>
                        <Typography variant="body2" gutterBottom>
                            The four year degree program in Information technology educates engineers, who have the knowledge and skills required for a career within the fields of telecommunications, software engineering and electronics.
                            <br />
                            <b>Major:</b> Software Engineering
                            <br />
                            <b>Minor:</b> Information Security
                        </Typography>
                    </Box>
                </Paper>
            </Box>
            <h3>Trainings</h3>
            <Box m={2}>
                <Paper elevation={3}>
                    <Box p={2}>
                        <Box display="flex" justifyContent="space-between">

                            <Typography variant="h6" gutterBottom>
                                <a href="https://bit.ly/3YHlseR" style={{ color: '#0077c2', textDecoration: 'none', fontWeight: 'normal' }} target="_blank" rel="noreferrer">
                                    Arkitektskolen
                                </a>
                            </Typography>
                            <Typography variant="body2" gutterBottom>
                                Feb 2022 - Oct 2022
                            </Typography>
                        </Box>
                        <Typography variant="subtitle1" gutterBottom>
                            <a href="https://www.soprasteria.no/" style={{ color: 'blue' }} target="_blank" rel="noreferrer">
                                Sopra Steria
                            </a>
                        </Typography>
                    </Box>
                    <Box p={2}>
                        <Box display="flex" justifyContent="space-between">
                            <Typography variant="h6" gutterBottom>
                                Certus biannual workshops
                            </Typography>
                            <Typography variant="body2" gutterBottom>
                                Jan 2015 - Aug 2018
                            </Typography>
                        </Box>
                        <Typography variant="subtitle1" gutterBottom>
                            <a href="http://certus-sfi.no/" style={{ color: 'blue' }} target="_blank" rel="noreferrer">
                                Certus
                            </a>
                        </Typography>
                    </Box>
                    <Box p={2}>
                        <Box display="flex" justifyContent="space-between">
                            <Typography variant="h6" gutterBottom>
                                <a href="https://bit.ly/3RYLDvt" style={{ color: '#0077c2', textDecoration: 'none', fontWeight: 'normal' }} target="_blank" rel="noreferrer">
                                    Data Science: Data to Insights
                                </a>
                            </Typography>
                            <Typography variant="body2" gutterBottom>
                                Oct 2016 - Nov 2016
                            </Typography>
                        </Box>
                        <Typography variant="subtitle1" gutterBottom>
                            <a href="https://professional.mit.edu/" style={{ color: 'blue' }} target="_blank" rel="noreferrer">
                                Massachusetts Institute of Technology - Professional Education
                            </a>
                        </Typography>
                    </Box>
                    <Box p={2}>
                        <Box display="flex" justifyContent="space-between">
                            <Typography variant="h6" gutterBottom>
                                <a href="https://bit.ly/3ltFwTR" style={{ color: '#0077c2', textDecoration: 'none', fontWeight: 'normal' }} target="_blank" rel="noreferrer">
                                    Introduction to Databases
                                </a>
                            </Typography>
                            <Typography variant="body2" gutterBottom>
                                Jan 2013 - March 2013
                            </Typography>
                        </Box>
                        <Typography variant="subtitle1" gutterBottom>
                            <a href="https://online.stanford.edu/" style={{ color: 'blue' }} target="_blank" rel="noreferrer">
                                Stanford University
                            </a>
                        </Typography>
                    </Box>
                    <Box p={2}>
                        <Box display="flex" justifyContent="space-between">
                            <Typography variant="h6" gutterBottom>
                                <a href="https://bit.ly/3ROvgSf" style={{ color: '#0077c2', textDecoration: 'none', fontWeight: 'normal' }} target="_blank" rel="noreferrer">
                                    Summer school in Network Security and Forensics
                                </a>
                            </Typography>
                            <Typography variant="body2" gutterBottom>
                                July 2012 - Aug 2012
                            </Typography>
                        </Box>
                        <Typography variant="subtitle1" gutterBottom>
                            <a href="https://www.uni-rostock.de/internationales/rostock-international-house/sommerschulen/basoti/basoti-2012/" style={{ color: 'blue' }} target="_blank" rel="noreferrer">
                                Universität Rostock, University of Tartu, Universität Bremen, Universität zu Lübeck, Hochschule für Technik und Wirtschaft Dresden
                            </a>
                        </Typography>
                    </Box>
                </Paper>
            </Box>

        </ThemeProvider>
    );
};


export default Education;