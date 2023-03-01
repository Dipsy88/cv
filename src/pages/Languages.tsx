import {
    Box,
    CssBaseline, Paper,
    Typography
} from "@mui/material";
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