import {
    Box,
    CssBaseline,
    Paper,
    Typography
} from "@mui/material";
import {createTheme, ThemeProvider} from "@mui/material/styles";
import React, {useState} from "react";


const theme = createTheme({
    typography: {
        fontFamily: [
            '"Open Sans"',
            'sans-serif'
        ].join(','),
    },
});

const Experience = () => {
    const [showDetailsSopra, setShowDetailsSopra] = useState(false);
    const [showDetailsTieto, setShowDetailsTieto] = useState(false);
    const [showDetailsResearch, setShowDetailsResearch] = useState(false);
    const [showDetailsPhd, setShowDetailsPhd] = useState(false);
    const [showDetailsEnoro, setShowDetailsEnoro] = useState(false);

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Typography variant="h5" gutterBottom>
                Experience
            </Typography>
            <Box m={2}>
                <Paper elevation={3}>
                    <Box p={2}>
                        <Box display="flex" justifyContent="space-between">
                            <Typography variant="h6" gutterBottom>
                                Senior Full Stack Developer | Technical Architect
                            </Typography>

                            <Typography variant="body2" gutterBottom>
                                Aug 2021 - Present
                            </Typography>
                        </Box>
                        <Box display="flex" justifyContent="space-between">
                            <Typography variant="subtitle1" gutterBottom>
                                <a href="https://www.soprasteria.no/" style={{ color: 'blue' }} target="_blank" rel="noreferrer">
                                    Sopra Steria
                                </a>
                            </Typography>
                            <Typography variant="body2" gutterBottom>
                                Oslo, Norway
                            </Typography>
                        </Box>
                        <Typography variant="subtitle2" gutterBottom>
                            Sopra Steria is Norway's leading consulting company in digitalisation.
                        </Typography>
                    </Box>
                    <Box p={2} style={{ marginTop: "-20px"}}>
                        <Typography variant="body2" gutterBottom>
                            Working as a consultant on a public agency.
                            <br />
                            <b>Tech stack:</b> Java, Kotlin, React, Typescript, UML, Postgres, REST, GraphQL, Kafka, Redis, ELK stack, Prometheus, Grafana, Azure AD, Google Cloud, Kubernetes, Github, Github Actions, Jira, Attribute-based Access Control (ABAC), Universell Utforming (UU)
                        </Typography>
                    </Box>
                </Paper>
            </Box>
            <Box m={2}>
                <Paper elevation={3}>
                    <Box p={2}>
                        <Box display="flex" justifyContent="space-between">
                            <Typography variant="h6" gutterBottom>
                                Tech Lead
                            </Typography>
                            <Typography variant="body2" gutterBottom>
                                Aug 2019 - July 2021
                            </Typography>
                        </Box>
                        <Box display="flex" justifyContent="space-between">
                            <Typography variant="subtitle1" gutterBottom>
                                <a href="https://www.tietoevry.com/" style={{ color: 'blue' }} target="_blank" rel="noreferrer">
                                    TietoEVRY
                                </a>
                            </Typography>
                            <Typography variant="body2" gutterBottom>
                                Oslo, Norway
                            </Typography>
                        </Box>
                        <Typography variant="subtitle2" gutterBottom>
                            Dipesh worked in the Loan Process department, which is a part of the financial department of TietoEVRY. The department creates a solution for processing loans and credit applications for both the private and corporate markets. More than 35 banks use this solution in Norway and Finland.
                        </Typography>
                    </Box>

                    <Box p={2} style={{ marginTop: "-20px"}}>
                        <Typography variant="body2" gutterBottom>
                            Dipesh worked as a tech lead in a department of over 25 developers. He led migration of 300+ applications and components from SVN to GIT. He built and maintained a unified CI/CD Jenkins pipeline with SonarQube, Dependency Analyzer and internal deployment (e.g., IBM Websphere) /Kubernetes.
                            During Dipesh's role as tech lead, he also demonstrated strong technical expertise and leadership skills by taking initiative and implementing new technologies. This included introducing Kubernetes, which greatly improved the department's deployment process and efficiency. Dipesh's responsibilities
                            included overseeing the development and design of the loan processing system, as well as the modernization of existing components. He created an internal tool to monitor project quality and organized competence forums, mentored other developers, and reduced technical debt.
                            <br />
                            <a
                                style={{ color: 'blue', cursor: 'pointer' }}
                                onClick={() => setShowDetailsTieto(!showDetailsTieto)}
                            >
                                {showDetailsTieto ? 'Hide Projects Details' : 'See Projects Details'}
                            </a>
                            {showDetailsTieto && (
                                <ul style={{ marginTop: '10px', marginBottom: '-20px' }}>
                                    <li>Led migration of 300+ applications and components from SVN to GIT</li>
                                    <li>Built and maintained a unified CI/CD Jenkins pipeline with SonarQube, Dependency Analyzer, and Kubernetes/internal deployment</li>
                                    <li>Among the first in the department to deploy an application in Kubernetes</li>
                                    <li>Developed reference projects and updated documentation</li>
                                    <li>Conducted biweekly competence forum in the department to introduce best practices and new technologies</li>
                                    <li>Organized architectural forum for all architects (7+) in the department to discuss optimal solution, reuse solution</li>
                                    <li>Created internal tool to monitor project quality and organized architectural forums</li>
                                    <li>Mentored other developers and reduced technical debt</li>
                                    <li>Worked on Java backend with Spring Boot and contributed to front-end development in JavaScript</li>
                                    <li>Teams followed flexible methodology with principles from product teams such as peer programming, continuous improvement, and close collaboration with users</li>
                                </ul>
                            )}
                            <br />
                            <br />
                            <b>Tech stack:</b> Java, React, Go, UML, Oracle, REST, SOAP, GraphQL, Jenkins, Elasticsearch, Kubernetes, IBM Cloud Private, Apache CXF, Git, Subversion, Mockito, Scrum, Jira
                        </Typography>
                    </Box>
                </Paper>
            </Box>
            <Box m={2}>
                <Paper elevation={3}>
                    <Box p={2}>
                        <Box display="flex" justifyContent="space-between">
                            <Typography variant="h6" gutterBottom>
                                Developer and Architect
                            </Typography>
                            <Box display="flex" flexDirection="column" alignItems="flex-end">
                                <Typography variant="body2" gutterBottom>
                                    Sept 2019 - Nov 2019 (20%)
                                </Typography>
                                <Typography variant="body2" gutterBottom>
                                    Sept 2018 - July 2019
                                </Typography>
                            </Box>
                        </Box>
                        <Box display="flex" justifyContent="space-between">
                            <Typography variant="subtitle1" gutterBottom>
                                <a href="https://www.simula.no/" style={{ color: 'blue' }} target="_blank" rel="noreferrer">
                                    Simula Research Laboratory
                                </a>
                            </Typography>
                            <Typography variant="body2" gutterBottom>
                                Oslo, Norway
                            </Typography>
                        </Box>
                        <Typography variant="subtitle2" gutterBottom>
                            Dipesh worked in the <a href="https://melodic.cloud/" style={{ color: 'blue' }} target="_blank" rel="noreferrer"> MELODIC project
                        </a>, which is a European Union sponsored project to develop a multi-cloud management platform. This project aimed to develop a framework for using the most cost-effective cloud service from different cloud services, for example, AWS, Azure, Google Cloud, Openstack.
                            The solution helps with cloud service selection by utilizing distinct characteristics of various private and public cloud services. The solution looks at dynamic optimization of resource utilization, considers data locality, meets the user's privacy needs and service requirements, and ensures that you are not locked into 1 supplier.
                        </Typography>
                    </Box>
                    <Box p={2} style={{ marginTop: "-20px"}}>
                        <Typography variant="body2" gutterBottom>
                            Dipesh developed services using Java and Spring Boot for data lifecycle management. He utilized different algorithms such as affinity propagation and retrieved data from cloud storage providers such as Amazon S3.
                            He distributed the data with Alluxio and produced statistics of the solution efficiency. Dipesh also experimented with different cloud services using machine learning and published two research papers, one of which won a best paper award.
                            <br />
                            <a
                                style={{ color: 'blue', cursor: 'pointer' }}
                                onClick={() => setShowDetailsResearch(!showDetailsResearch)}
                            >
                                {showDetailsResearch ? 'Hide Projects Details' : 'See Projects Details'}
                            </a>
                            {showDetailsResearch && (
                                <ul style={{ marginTop: '10px', marginBottom: '-20px' }}>
                                    <li>Developed services using Java and Spring Boot for data lifecycle management</li>
                                    <li>Utilized affinity propagation and other clustering algorithms</li>
                                    <li>Retrieved data from cloud storage providers such as Amazon S3</li>
                                    <li>Distributed data using Alluxio and produced statistics</li>
                                    <li>Experimented with different cloud services using machine learning</li>
                                    <li>Ensured best practices were followed</li>
                                    <li>Wrote documentation and provided thorough handover of the project</li>
                                    <li>Published two research papers: <a href="https://link.springer.com/chapter/10.1007/978-3-030-20883-7_1" style={{ color: 'blue' }} target="_blank" rel="noreferrer">1)</a> and <a href="https://link.springer.com/chapter/10.1007/978-3-030-15035-8_101" style={{ color: 'blue' }} target="_blank" rel="noreferrer">2)</a>, one of which won a best paper award</li>
                                </ul>
                            )}
                            <br />
                            <br />
                            <b>Tech stack:</b> Java, Python, Spring Boot, Docker, Postgres, Clustering, Affinity Clustering, Tensorflow, Microsoft Azure, Google Cloud Platform, Amazon Web Services, Amazon S3 Bucket, Java Message Service, Scikit-learn, Keras, Alluxio, Git
                        </Typography>
                    </Box>
                </Paper>
            </Box>
            <Box m={2}>
                <Paper elevation={3}>
                    <Box p={2}>
                        <Box display="flex" justifyContent="space-between">
                            <Typography variant="h6" gutterBottom>
                                Phd Research Fellow, Developer
                            </Typography>
                            <Typography variant="body2" gutterBottom>
                                Sept 2015 - Aug 2018
                            </Typography>
                        </Box>
                        <Box display="flex" justifyContent="space-between">
                            <Typography variant="subtitle1" gutterBottom>
                                <a href="https://www.simula.no/" style={{ color: 'blue' }} target="_blank" rel="noreferrer">
                                    Simula Research Laboratory
                                </a>
                            </Typography>
                            <Typography variant="body2" gutterBottom>
                                Oslo, Norway
                            </Typography>
                        </Box>
                        <Typography variant="subtitle2" gutterBottom>
                            Dipesh worked in the <a href="http://certus-sfi.no/" style={{ color: 'blue' }} target="_blank" rel="noreferrer"> Certus project</a>, which stands for Certus Center for Software Validation and Verification.
                            Certus was an 8-year research project involving Simula Research Laboratory as host institution and ABB Robotics, Cancer Registry of Norway, Cisco Systems Norway, Esito and Kongsberg Maritime as using partners.
                            The Certus center formally started operations on 1 October 2011 with the status of a center for research-based innovation.
                        </Typography>
                    </Box>
                    <Box p={2} style={{ marginTop: "-20px"}}>
                        <Typography variant="body2" gutterBottom>
                            Dipesh worked as a scientific partner in <a href="https://www.cisco.com/" style={{ color: 'blue' }} target="_blank" rel="noreferrer">Cisco Systems Norway</a>, where he applied artificial intelligence techniques and machine learning to optimize test procedures for large-scale systems.
                            For proof of concepts, he also used case studies from other partners (e.g., ABB Robotics) through Certus and open source projects. He obtained a PhD and published seven papers in top software engineering conferences and journals, as well as completing various research assignments.
                            The focus of his research was Evolutionary Computation Based Test Optimization of Large-Scale Systems. In addition, he supervised interns.
                            <br />
                            <a
                                style={{ color: 'blue', cursor: 'pointer' }}
                                onClick={() => setShowDetailsPhd(!showDetailsPhd)}
                            >
                                {showDetailsPhd ? 'Hide Projects Details' : 'See Projects Details'}
                            </a>
                            {showDetailsPhd && (
                                <ul style={{ marginTop: '10px', marginBottom: '-20px' }}>
                                    <li>Obtained a PhD with thesis title <a href="https://www.duo.uio.no/handle/10852/67569" style={{ color: 'blue' }} target="_blank" rel="noreferrer">Evolutionary Computation Based Test Optimization of Large-Scale Systems</a></li>
                                    <li>Proposed REMAP: a dynamic test prioritization method using rule mining and metaheuristic algorithms, published in <a href="https://ieeexplore.ieee.org/abstract/document/8367035" style={{ color: 'blue' }} target="_blank" rel="noreferrer">International Conference on Software Testing, Verification and Validation</a> and <a href="https://www.sciencedirect.com/science/article/abs/pii/S016412121930072X" style={{ color: 'blue' }} target="_blank" rel="noreferrer">Journal of Systems and Software</a></li>
                                    <li>Developed a cost-effective approach to testing untested configurations using program dependence graphs and metaheuristic algorithms, published in <a href="https://www.sciencedirect.com/science/article/abs/pii/S0950584919300540" style={{ color: 'blue' }} target="_blank" rel="noreferrer">Information and Software Technology</a> </li>
                                    <li>Proposed new genetic algorithms based on clustering to enhance the state-of-the-art, published in <a href="https://ieeexplore.ieee.org/abstract/document/7927990" style={{ color: 'blue' }} target="_blank" rel="noreferrer">International Conference on Software Testing, Verification and Validation</a> and <a href="https://ieeexplore.ieee.org/abstract/document/8540431" style={{ color: 'blue' }} target="_blank" rel="noreferrer">IEEE Transactions on Software Engineering</a></li>
                                    <li>Proposed approaches using evolutionary algorithms to select test cases within a time budget, published in <a href="https://dl.acm.org/doi/abs/10.1145/2908812.2908850" style={{ color: 'blue' }} target="_blank" rel="noreferrer">Genetic and Evolutionary Computation Conference</a></li>
                                    <li>Proposed a multi-objective approach to prioritize the test cases, published in <a href="https://link.springer.com/chapter/10.1007/978-3-319-47443-4_11" style={{ color: 'blue' }} target="_blank" rel="noreferrer">International Conference on Testing Software and Systems</a></li>
                                    <li>Supervised summer interns</li>
                                </ul>
                            )}
                            <br />
                            <br />
                            <b>Tech stack:</b> Java, Python, R, Postgres, Jupyter Notebook, Numpy, Scikit-learn, Keras, Pandas, Weka, Git
                        </Typography>
                    </Box>
                </Paper>
            </Box>
            <Box m={2}>
                <Paper elevation={3}>
                    <Box p={2}>
                        <Box display="flex" justifyContent="space-between">
                            <Typography variant="h6" gutterBottom>
                                Research Trainee, Developer
                            </Typography>
                            <Typography variant="body2" gutterBottom>
                                Jan 2015 - Aug 2015
                            </Typography>
                        </Box>
                        <Box display="flex" justifyContent="space-between">
                            <Typography variant="subtitle1" gutterBottom>
                                <a href="https://www.simula.no/" style={{ color: 'blue' }} target="_blank" rel="noreferrer">
                                    Simula Research Laboratory
                                </a>
                            </Typography>
                            <Typography variant="body2" gutterBottom>
                                Oslo, Norway
                            </Typography>
                        </Box>
                        <Typography variant="subtitle2" gutterBottom>
                            Dipesh worked in the <a href="http://certus-sfi.no/" style={{ color: 'blue' }} target="_blank" rel="noreferrer"> Certus project</a>, which stands for Certus Center for Software Validation and Verification.
                            Certus was an 8-year research project involving Simula Research Laboratory as host institution and ABB Robotics, Cancer Registry of Norway, Cisco Systems Norway, Esito and Kongsberg Maritime as using partners.
                            The Certus center formally started operations on 1 October 2011 with the status of a center for research-based innovation.
                        </Typography>
                    </Box>
                    <Box p={2} style={{ marginTop: "-20px"}}>
                        <Typography variant="body2" gutterBottom>
                            Dipesh leveraged the latest techniques in model-based and search-based software engineering to tackle real-world problems in the industry. He rigorously evaluated the results through empirical studies and demonstrated the efficacy of his approach. The practical implementation of his solution was deployed and tested in a cloud environment, showcasing its ability to handle complex software systems.
                            <br />
                            <br />
                            <b>Tech stack:</b> Java, R, UML, Postgres, Git
                        </Typography>
                    </Box>
                </Paper>
            </Box>
            <Box m={2}>
                <Paper elevation={3}>
                    <Box p={2}>
                        <Box display="flex" justifyContent="space-between">
                            <Typography variant="h6" gutterBottom>
                                Graduate Student Researcher
                            </Typography>
                            <Typography variant="body2" gutterBottom>
                                Jan 2014 - Dec 2014
                            </Typography>
                        </Box>
                        <Box display="flex" justifyContent="space-between">
                            <Typography variant="subtitle1" gutterBottom>
                                <a href="https://www.simula.no/" style={{ color: 'blue' }} target="_blank" rel="noreferrer">
                                    Simula Research Laboratory
                                </a>
                            </Typography>
                            <Typography variant="body2" gutterBottom>
                                Oslo, Norway
                            </Typography>
                        </Box>
                        <Typography variant="subtitle2" gutterBottom>
                            Dipesh conducted extensive research on black-box regression testing optimization. He delved into the challenges faced in the industry, modeled complex systems, and identified crucial characteristics for effective test cases. Furthermore, he successfully developed a cutting-edge tool that generates optimal test cases based on various testing objectives, thereby streamlining the testing process.
                            <br />
                            <br />
                            <b>Tech stack:</b> Java, R, UML
                        </Typography>
                    </Box>
                </Paper>
            </Box>
            <Box m={2}>
                <Paper elevation={3}>
                    <Box p={2}>
                        <Box display="flex" justifyContent="space-between">
                            <Typography variant="h6" gutterBottom>
                                QA Engineer
                            </Typography>
                            <Box display="flex" flexDirection="column" alignItems="flex-end">
                                <Typography variant="body2" gutterBottom>
                                    Jan 2014 - Dec 2014 (50%)
                                </Typography>
                                <Typography variant="body2" gutterBottom>
                                    April 2011 - Aug 2013
                                </Typography>
                            </Box>
                        </Box>
                        <Box display="flex" justifyContent="space-between">
                            <Typography variant="subtitle1" gutterBottom>
                                <a href="https://www.hansencx.com/" style={{ color: 'blue' }} target="_blank" rel="noreferrer">
                                    Enoro
                                </a>
                            </Typography>
                            <Typography variant="body2" gutterBottom>
                                Helsinki, Finland
                            </Typography>
                        </Box>
                        <Typography variant="subtitle2" gutterBottom>
                            Enoro Oy provides global software solutions for energy management. The Company offers complete software chain in the meter-to-cash portfolio, as well as offers interaction and designing solutions.
                        </Typography>
                    </Box>
                    <Box p={2} style={{ marginTop: "-20px"}}>
                        <Typography variant="body2" gutterBottom>
                            Dipesh was involved in various aspects of software testing, including test planning and execution in an Agile/Scrum environment, creating and automating test cases, and performing performance testing. He worked closely with developers, demonstrated the product to customers, and gave training and presentations to colleagues. He was also responsible for maintaining the test environment and updating servers. Additionally, he implemented a mobile application for energy data management and created defect reports. Dipesh's responsibilities also included updating the test documentation.
                            <br />
                            <a
                                style={{ color: 'blue', cursor: 'pointer' }}
                                onClick={() => setShowDetailsEnoro(!showDetailsEnoro)}
                            >
                                {showDetailsEnoro ? 'Hide Projects Details' : 'See Projects Details'}
                            </a>
                            {showDetailsEnoro && (
                                <ul style={{ marginTop: '10px', marginBottom: '-20px' }}>
                                    <li>Test planning and participation in the release cycle</li>
                                    <li>Creation and automation of test cases</li>
                                    <li>Automatic installation of customer-specific solutions along with test case</li>
                                    <li>Automatic test scheduling and report generation</li>
                                    <li>Customer demonstrations for acceptance testing</li>
                                    <li>Portability of test cases across different environments and product versions</li>
                                    <li>Prioritization of test cases for regression testing</li>
                                    <li>Defect report creation and analysis</li>
                                    <li>Product license verification</li>
                                    <li>Server updates</li>
                                    <li>Test documentation writing</li>
                                </ul>
                            )}
                            <br />
                            <br />
                            <b>Tech stack:</b> Visual Basic, Selenium, Oracle, TestTrack, Jira, Git, iMacros, SoapUI, AutoIt, In-house Test Automation Tool
                        </Typography>
                    </Box>
                </Paper>
            </Box>

            <Box m={2}>
                <Paper elevation={3}>
                    <Box p={2}>
                        <Box display="flex" justifyContent="space-between">
                            <Typography variant="h6" gutterBottom>
                                Web Developer Trainee
                            </Typography>
                            <Typography variant="body2" gutterBottom>
                                June 2010 - Aug 2010
                            </Typography>
                        </Box>
                        <Box display="flex" justifyContent="space-between">
                            <Typography variant="subtitle1" gutterBottom>
                                <a href="https://www.mountdigit.com/" style={{ color: 'blue' }} target="_blank" rel="noreferrer">
                                  Mountdigit Technology
                                </a>
                            </Typography>
                            <Typography variant="body2" gutterBottom>
                                Kathmandu, Nepal
                            </Typography>
                        </Box>
                        <Typography variant="subtitle2" gutterBottom>
                            Dipesh utilized his expertise in HTML, CSS, Javascript, PHP, and MySQL to develop dynamic websites. He rigorously tested the websites for potential vulnerabilities and used tools such as Adobe Dreamweaver, XAMPP, Smarty, and Adobe Photoshop to enhance the development process.
                            <br />
                            <br />
                            <b>Tech stack:</b> HTML, CSS, Javscript, PHP, MySQL
                        </Typography>
                    </Box>
                </Paper>
            </Box>
        </ThemeProvider>
    );
};

export default Experience;