import {Avatar, Box, Container, CssBaseline, Grid, LinearProgress, Paper, Slider, Typography} from "@mui/material";
import React, {useState} from "react";
import dipesh from '../assets/images/dipesh.png'

interface NavigationProps {
    scrollToSection:  (sectionId: string) => void
    activeSection: string
}

type Props = NavigationProps


const Navigation = (props: Props) => {
    const { activeSection } = props;

    return (
            <div>
                <CssBaseline />
                <Container fixed>
                    <Box p={1} display="flex"
                          flexDirection="column"
                          justifyContent="center" sx={{ bgcolor: '#cfe8fc', height: '100vh' }}>
                        <Box display="flex" alignItems="center" justifyContent="center">
                            <Avatar src={dipesh} alt="pic" style={{ width: "100px", height: "100px"}} />
                        </Box>
                        <Box display="flex" alignItems="center" justifyContent="center">
                            <Typography
                                align="center"
                                style={{ color: activeSection === 'about-section' ? 'blue' : 'black' }}
                                onClick={() => {
                                    props.scrollToSection("about-section");
                                }}
                            >
                                ABOUT
                            </Typography>
                        </Box>
                        <Box display="flex" alignItems="center" justifyContent="center">
                            <Typography
                                align="center"
                                style={{ color: activeSection === 'experience-section' ? 'blue' : 'black' }}
                                onClick={() => {
                                    props.scrollToSection("experience-section");
                                }}
                            >
                                EXPERIENCE
                            </Typography>
                        </Box>
                        <Box display="flex" alignItems="center" justifyContent="center">
                            <Typography
                                align="center"
                                style={{ color: activeSection === 'education-section' ? 'blue' : 'black' }}
                                onClick={() => {
                                    props.scrollToSection("education-section");
                                }}
                            >
                                EDUCATION
                            </Typography>
                        </Box>
                        <Box display="flex" alignItems="center" justifyContent="center">
                            <Typography
                                align="center"
                                style={{ color: activeSection === 'certification-section' ? 'blue' : 'black' }}
                                onClick={() => {
                                    props.scrollToSection("certification-section");
                                }}
                            >
                                CERTIFICATION
                            </Typography>
                        </Box>
                        <Box display="flex" alignItems="center" justifyContent="center">
                            <Typography
                                align="center"
                                style={{ color: activeSection === 'skills-section' ? 'blue' : 'black' }}
                                onClick={() => {
                                    props.scrollToSection("skills-section");
                                }}
                            >
                                SKILLS
                            </Typography>
                        </Box>

                        <Box display="flex" alignItems="center" justifyContent="center" mt={2}>
                            <Typography
                                align="center"
                                style={{ color: activeSection === 'skills-section' ? 'blue' : 'black' }}
                                onClick={() => {
                                    props.scrollToSection("skills-section");
                                }}
                            >

                            </Typography>
                        </Box>
                        <Typography variant="body2" style={{ marginBottom: "-20px"}} gutterBottom >
                        COMPETENCE
                        </Typography>
                        <Box display="flex" flexDirection="column" mt={3}>
                            <Box display="flex" alignItems="center" mb={1}>
                                <Typography variant="subtitle2" style={{ width: "100px"}}>Architecture</Typography>
                                <Box ml={-2}>
                                    <LinearProgress variant="determinate" value={85} style={{ width: "80px"}}/>
                                </Box>
                            </Box>
                            <Box display="flex" alignItems="center" mb={1}>
                                <Typography variant="subtitle2" style={{ width: "100px"}}>Backend</Typography>
                                <Box ml={-2}>
                                    <LinearProgress variant="determinate" value={90} style={{ width: "80px"}}/>
                                </Box>
                            </Box>
                            <Box display="flex" alignItems="center" mb={1}>
                                <Typography variant="subtitle2" style={{ width: "100px"}}>Frontend</Typography>
                                <Box ml={-2}>
                                    <LinearProgress variant="determinate" value={80} style={{ width: "80px"}}/>
                                </Box>
                            </Box>
                            <Box display="flex" alignItems="center" mb={1}>
                                <Typography variant="subtitle2" style={{ width: "100px"}}>Database</Typography>
                                <Box ml={-2}>
                                    <LinearProgress variant="determinate" value={80} style={{ width: "80px"}}/>

                                </Box>
                            </Box>
                            <Box display="flex" alignItems="center" mb={1}>
                                <Typography variant="subtitle2" style={{ width: "100px"}}>Testing</Typography>
                                <Box ml={-2}>
                                    <LinearProgress variant="determinate" value={70} style={{ width: "80px"}}/>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Container>
            </div>

    )
}


export default Navigation;