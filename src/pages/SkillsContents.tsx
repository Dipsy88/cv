import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import ts from 'typescript';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      root: {
        flexGrow: 1,
        width: '100%',
        backgroundColor: theme.palette.background.paper,
      },
      paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        height: '100%',
        [theme.breakpoints.down('sm')]: {
          display: 'flex',
          flexDirection: 'column'
        },
      },
      heading: {
        padding: theme.spacing(2),
        position: 'sticky',
        top: 0,
      },
      list: {
        textAlign: 'left',
        paddingLeft: theme.spacing(2),
      }
    }),
);

const skills = {
  "Front-End Development": { items: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React'], color: '#3f51b5' },
  "Back-End Development": { items: ['Java', 'Kotlin', 'Go', 'Python', 'Groovy'], color: '#4caf50' },
  "Databases": { items: ['MySQL', 'MSSQL', 'PostgreSQL', 'Oracle', 'MongoDB'], color: '#f44336' },
  "Cloud Platforms": { items: ['Azure', 'Google Cloud', 'AWS', 'IBM Cloud Private'], color: '#b388ff' },
  "Infrastructure Technologies": { items: ['Kubernetes', 'Docker', 'Alluxio'], color: '#ffc107' },
  "Logging and Monitoring": { items: ['ELK Stack', 'Prometheus', 'Grafana'], color: '#bcaaa4' },
  "Java Frameworks": { items: ['Spring Boot', 'Spring', 'Apache CXF', 'JAX-RS', 'JSP'], color: '#00acc1' },
  "Built, SCM, and CI Tools ": { items: ['Maven', 'Gradle', 'Git', 'Subversion', 'Jenkins', 'Github Workflow'], color: '#00bfa5' },
  "Collaboration Tools ": { items: ['Slack', 'Microsoft Teams', 'Jira', 'Confluence', 'UML'], color: '#f9a825' },
  "Testing Tools": { items: ['JUnit', 'Mockito', 'Selenium'], color: '#ff9100' },
   "API Techologies": { items: ['REST', 'Graph QL', 'SOAP'], color: '#ffb74d' },
  "Message Queues": { items: ['Kafka', 'JMS'], color: '#ff7043' },
};

const SkillsContents: React.FC = () => {
  const classes = useStyles();

  return (
      <div className={classes.root}>
        <Grid container spacing={3}>
          {Object.entries(skills).map(([heading, { items, color }]) => (
              <Grid item xs={12} sm={6} md={4} key={heading}>
                <Paper className={classes.paper}>
                  <Typography variant="h6" className={classes.heading} style={{ backgroundColor: color, color: 'white' }}>
                    {heading}
                  </Typography>
                  <ul className={classes.list}>
                    {items.map((item) => (
                        <li key={item}>{item}</li>
                    ))}
                  </ul>
                </Paper>
              </Grid>
          ))}
        </Grid>
      </div>
  );
};

export default SkillsContents;