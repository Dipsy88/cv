import {Grid, Hidden} from "@mui/material";
import {createTheme, ThemeProvider} from "@mui/material/styles";
import React, {useState} from "react";
import Contents from "./Contents";
import Navigation from "./Navigation";

const Home = () => {
    // define theme
    const theme = createTheme({
        palette: {
            primary: {
                light: "#63b8ff",
                main: "#0989e3",
                dark: "#005db0",
                contrastText: "#000",
            },
            secondary: {
                main: "#4db6ac",
                light: "#82e9de",
                dark: "#00867d",
                contrastText: "#000",
            },
        },
    });
    const [activeSection, setActiveSection] = useState("about-section");
    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            setActiveSection(sectionId);
        }
    };

    return (
        <div style={{ position: 'relative', overflow: 'hidden'}}>
            <ThemeProvider theme={theme}>
                <Grid container style={{ position: 'relative', zIndex: 1}}>
                    <Hidden smDown>
                        <Grid item style={{width: '250px'}}>
                            <Navigation
                                scrollToSection={scrollToSection}
                                activeSection={activeSection}
                            />
                        </Grid>
                    </Hidden>
                    <Grid item xs md style={{ overflow: 'auto', height: '100vh', background: 'inherit' }}>
                        <Contents setActiveSection={setActiveSection}/>
                    </Grid>
                </Grid>
            </ThemeProvider>

        </div>

    )
}


export default Home;