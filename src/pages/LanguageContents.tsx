import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
            width: '100%',
            backgroundColor: theme.palette.background.paper,
        },
        paper: {
            padding: theme.spacing(2),
            textAlign: 'left',
            color: theme.palette.text.secondary,
            [theme.breakpoints.down('sm')]: {
                display: 'flex',
                flexDirection: 'column',
            },
        },
        heading: {
            fontSize: '1.2rem',
            fontWeight: 600,
            marginBottom: theme.spacing(1),
        },
        proficiency: {
            fontSize: '1rem',
            fontStyle: 'italic',
            marginBottom: theme.spacing(2),
        },
        circle: {
            width: 10,
            height: 10,
            borderRadius: '50%',
            backgroundColor: '#3f51b5',
            display: 'inline-block',
            marginRight: theme.spacing(1),
        },
        emptyCircle: {
            width: 10,
            height: 10,
            borderRadius: '50%',
            backgroundColor: '#e0e0e0',
            display: 'inline-block',
            marginRight: theme.spacing(1),
        },
    }),
);

const languages = [
    { name: 'English', proficiency: 'Proficient', level: 4 },
    { name: 'Norwegian', proficiency: 'Proficient', level: 4 },
    { name: 'Nepali', proficiency: 'Native', level: 5 },
    { name: 'Hindi', proficiency: 'Proficient', level: 4 },
    // Add more languages with their proficiency levels and descriptions here
];

const LanguageContents: React.FC = () => {
    const classes = useStyles();

    const renderCircles = (level: number) => {
        const circles = [];
        for (let i = 1; i <= 5; i++) {
            circles.push(
                <span
                    key={i}
                    className={i <= level ? classes.circle : classes.emptyCircle}
                ></span>
            );
        }
        return circles;
    };

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                {languages.map(({ name, proficiency, level }) => (
                    <Grid item xs={12} sm={6} md={3} key={name}>
                        <Paper className={classes.paper}>
                            <Typography variant="h6" className={classes.heading}>
                                {name}
                            </Typography>
                            <div>{renderCircles(level)}</div>
                            <Typography variant="body1" className={classes.proficiency}>
                                {proficiency}
                            </Typography>
                        </Paper>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
};

export default LanguageContents;