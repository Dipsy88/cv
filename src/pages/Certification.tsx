import {Box, CssBaseline, Grid, Paper, Typography} from "@mui/material";
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
                Certification
            </Typography>
            <Grid container spacing={2} style={{ margin: 0 }}>
                <Grid item xs={12} style={{ display: "flex", flexWrap: "wrap" }}>
                    <Paper elevation={3} style={{ margin: "0px 2px", width: "calc(33.33% - 4px)" }}>
                        <Box p={2}>
                            <Typography gutterBottom>
                                <a href="https://www.credly.com/badges/5e829527-ea41-4264-9224-09b333b21375/public_url" style={{ color: 'blue' }}>
                                    Microsoft Certified DevOps Engineer Expert (AZ-400)
                                </a>
                            </Typography>
                            <Box display="flex" justifyContent="space-between">
                                <Typography variant="subtitle2" gutterBottom>
                                    Microsoft
                                </Typography>
                                <Typography variant="subtitle2" gutterBottom>
                                    July 2022 - July 2023
                                </Typography>
                            </Box>
                        </Box>
                    </Paper>
                    <Paper elevation={3} style={{ margin: "0px 2px", width: "calc(33.33% - 4px)" }}>
                        <Box p={2}>
                            <Typography gutterBottom>
                                <a href="https://www.credly.com/badges/a0dc8631-61cb-4833-9c83-9d7b9d004f7b/public_url" style={{ color: 'blue' }}>
                                    Microsoft Certified Azure Developer Associate (AZ-204)
                                </a>
                            </Typography>
                            <Box display="flex" justifyContent="space-between">
                                <Typography variant="subtitle2" gutterBottom>
                                    Microsoft
                                </Typography>
                                <Typography variant="subtitle2" gutterBottom>
                                    Sept 2021 - Sept 2023
                                </Typography>
                            </Box>
                        </Box>
                    </Paper>
                    <Paper elevation={3} style={{ margin: "0px 2px", width: "calc(33.33% - 4px)" }}>
                        <Box p={2}>
                            <Typography  gutterBottom>
                                <a href="https://www.credly.com/badges/ef67d96c-fe85-4b98-b238-def4ae1c2121/public_url" style={{ color: 'blue' }}>
                                    Microsoft Certified Azure Data Fundamentals (DP-900)
                                </a>
                            </Typography>
                            <Box display="flex" justifyContent="space-between">
                                <Typography variant="subtitle2" gutterBottom>
                                    Microsoft
                                </Typography>
                                <Typography variant="subtitle2" gutterBottom>
                                    April 2021
                                </Typography>
                            </Box>
                        </Box>
                    </Paper>
                    <Paper elevation={3} style={{ margin: "0px 2px", width: "calc(33.33% - 4px)" }}>
                        <Box p={2}>
                            <Typography  gutterBottom>
                                <a href="https://www.credly.com/badges/63c59e8b-4c15-492d-bb93-30ccb036f7a2/public_url" style={{ color: 'blue' }}>
                                    Microsoft Certified Azure AI Fundamentals (AI-900)
                                </a>
                            </Typography>
                            <Box display="flex" justifyContent="space-between">
                                <Typography variant="subtitle2" gutterBottom>
                                    Microsoft
                                </Typography>
                                <Typography variant="subtitle2" gutterBottom>
                                    Feb 2021
                                </Typography>
                            </Box>
                        </Box>
                    </Paper>
                    <Paper elevation={3} style={{ margin: "0px 2px", width: "calc(33.33% - 4px)" }}>
                        <Box p={2}>
                            <Typography  gutterBottom>
                                <a href="https://www.credly.com/badges/c8cb26fe-64d7-487b-84d0-281445a5bc0b/public_url" style={{ color: 'blue' }}>
                                    Microsoft Certified Azure Fundamentals (AZ-900)
                                </a>
                            </Typography>
                            <Box display="flex" justifyContent="space-between">
                                <Typography variant="subtitle2" gutterBottom>
                                    Microsoft
                                </Typography>
                                <Typography variant="subtitle2" gutterBottom>
                                    Jan 2021
                                </Typography>
                            </Box>
                        </Box>
                    </Paper>
                    <Paper elevation={3} style={{ margin: "0px 2px", width: "calc(33.33% - 4px)" }}>
                        <Box p={2}>
                            <Typography  gutterBottom>
                                <a href="https://www.credly.com/badges/f7f916c1-3747-427b-b6a6-e395e21108e3/public_url" style={{ color: 'blue' }}>
                                    Big Data Foundations - Level 1
                                </a>
                            </Typography>
                            <Box display="flex" justifyContent="space-between">
                                <Typography variant="subtitle2" gutterBottom>
                                    IBM
                                </Typography>
                                <Typography variant="subtitle2" gutterBottom>
                                    Dec 2018
                                </Typography>
                            </Box>
                        </Box>
                    </Paper>
                    <Paper elevation={3} style={{ margin: "0px 2px", width: "calc(33.33% - 4px)" }}>
                        <Box p={2}>
                            <Typography  gutterBottom>
                                <a href="https://www.credly.com/badges/9f58fe4d-7a03-4975-aa62-a5b331c1a047/public_url" style={{ color: 'blue' }}>
                                    Applied Data Science with Python - Level 2
                                </a>
                            </Typography>
                            <Box display="flex" justifyContent="space-between">
                                <Typography variant="subtitle2" gutterBottom>
                                    IBM
                                </Typography>
                                <Typography variant="subtitle2" gutterBottom>
                                    Dec 2018
                                </Typography>
                            </Box>
                        </Box>
                    </Paper>
                    <Paper elevation={3} style={{ margin: "0px 2px", width: "calc(33.33% - 4px)" }}>
                        <Box p={2}>
                            <Typography  gutterBottom>
                                <a href="https://www.credly.com/badges/874fde74-6808-4814-9b07-e56abcce29c1/public_url" style={{ color: 'blue' }}>
                                    Machine Learning with Python - Level 1
                                </a>
                            </Typography>
                            <Box display="flex" justifyContent="space-between">
                                <Typography variant="subtitle2" gutterBottom>
                                    IBM
                                </Typography>
                                <Typography variant="subtitle2" gutterBottom>
                                    Dev 2018
                                </Typography>
                            </Box>
                        </Box>
                    </Paper>
                    <Paper elevation={3} style={{ margin: "0px 2px", width: "calc(33.33% - 4px)" }}>
                        <Box p={2}>
                            <Typography  gutterBottom>
                                <a href="https://www.credly.com/badges/3c703162-2213-4727-99ec-b4195d0a3a57/public_url" style={{ color: 'blue' }}>
                                    Python for Data Science
                                </a>
                            </Typography>
                            <Box display="flex" justifyContent="space-between">
                                <Typography variant="subtitle2" gutterBottom>
                                    IBM
                                </Typography>
                                <Typography variant="subtitle2" gutterBottom>
                                    Dec 2018
                                </Typography>
                            </Box>
                        </Box>
                    </Paper>
                    <Paper elevation={3} style={{ margin: "0px 2px", width: "calc(33.33% - 4px)" }}>
                        <Box p={2}>
                            <Typography  gutterBottom>
                                <a href="https://www.credly.com/badges/a118787a-ac05-465d-92dd-19e503b6c933/public_url" style={{ color: 'blue' }}>
                                    Hadoop Foundations - Level 1
                                </a>
                            </Typography>
                            <Box display="flex" justifyContent="space-between">
                                <Typography variant="subtitle2" gutterBottom>
                                    IBM
                                </Typography>
                                <Typography variant="subtitle2" gutterBottom>
                                    Nov 2018
                                </Typography>
                            </Box>
                        </Box>
                    </Paper>
                    <Paper elevation={3} style={{ margin: "0px 2px", width: "calc(33.33% - 4px)" }}>
                        <Box p={2}>
                            <Typography  gutterBottom>
                                <a href="https://www.credly.com/badges/ef67d96c-fe85-4b98-b238-def4ae1c2121/public_url" style={{ color: 'blue' }}>
                                    Certified Tester, Foundation Level (CTFL)
                                </a>
                            </Typography>
                            <Box display="flex" justifyContent="space-between">
                                <Typography variant="subtitle2" gutterBottom>
                                    FiSTB- ISTQB
                                </Typography>
                                <Typography variant="subtitle2" gutterBottom>
                                    Feb 2013
                                </Typography>
                            </Box>
                        </Box>
                    </Paper>
                </Grid>
            </Grid>
        </ThemeProvider>
    );
};


export default Education;