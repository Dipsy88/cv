import {Box, CssBaseline, Paper, Typography} from "@mui/material";
import {createTheme, ThemeProvider} from "@mui/material/styles";
import React, { useEffect } from "react";
import Education from "./Education";
import About from "./About";
import Experience from "./Experience";
import {BrowserRouter as Router, Route, Routes, useLocation} from "react-router-dom";
import Skills from "./Skills";
import Certification from "./Certification";

interface ContentsProps {
    setActiveSection: (sectionId: string) => void
}

type Props = ContentsProps

const Contents = (props: Props) => {
    const { setActiveSection } = props;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const sectionId = entry.target.id;
                setActiveSection(sectionId);
            }
        });
    });

    useEffect(() => {
        const aboutSection = document.getElementById("about-section");
        const experienceSection = document.getElementById("experience-section");
        const educationSection = document.getElementById("education-section");
        const scrollPos = window.scrollY;

        if (aboutSection) observer.observe(aboutSection);
        if (educationSection) observer.observe(educationSection);
        if (experienceSection) observer.observe(experienceSection);

        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <Router>
            <Box
                display="flex"
                flexDirection="column"
                alignItems="left"
                sx={{
                    bgcolor: "#cfe8fc",

                    padding: "1rem",
                }}
            >
                <div id="about-section">
                    <About />
                </div>
                <br />
                <div id="experience-section">
                    <Experience />
                </div>
                <br />
                <div id="education-section">
                    <Education />
                </div>
                <br />
                <div id="certification-section">
                    <Certification />
                </div>
                <br />
                <div id="skills-section">
                    <Skills />
                </div>

            </Box>
        </Router>
    );
};


export default Contents;