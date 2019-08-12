import React, { Component } from 'react';
import { Grid, Typography, CardMedia, Card } from '@material-ui/core/';
import { makeStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';
import Image from '../assets/Images/prog3.svg'
// import Image from '../assets/Images/pic.jpg'
import icon_html from '../assets/icons/html.svg'
import icon_css from '../assets/icons/css.svg'
import icon_react from '../assets/icons/react_b.svg'
import icon_js from '../assets/icons/js.svg'
import icon_python from '../assets/icons/python2.svg'
import icon_xd from '../assets/icons/xd.svg'
// import icon_ps from '../assets/icons/ps.svg'


const pageStyle = makeStyles({
    heading: {
        marginTop: 230,
        fontWeight: 900,
        marginLeft: 225,
        letterSpacing: 1.75,
        //color: '#8146c9',
        color: '#fc37aa',
    },
    subheading: {
        marginTop: 150,
        fontWeight: 900,
        marginLeft: 225,
        letterSpacing: 1.75,
        color: '#252525',
        // color: '#fc37aa',
    },
    sub1: {
        marginTop: 15,
        marginLeft: 225,
        letterSpacing: 0.25,
        fontWeight: 350,
        wordWrap: 'breakWord',
    },
    sub2: {
        marginTop: 100,
        marginLeft: 225,
        letterSpacing: 0.5,
        fontWeight: 500,
        wordWrap: 'breakWord',
        color: '#8146c9',
    },
    root: {

    },

    sub3: {
        marginTop: 25,
        marginLeft: 210,
    },
    media: {
        marginLeft: 250,
        marginTop: 75,
        maxWidth: 283,
        height: 198,
    },

});

function Home() {
    const classes = pageStyle()
    return (
        <div className='clearfix'>
            <Grid container spacing={40}>
                <Grid item xs={5}>
                    <Typography variant="h2" align={"left"} className={classes.heading} >
                        Hi, I'm Vinayak H
                        </Typography>
                    <Typography align={"left"} className={classes.sub1}>
                        Seasoned Product Designer and Developer with over 5 years
                        of experience in education start-ups. My work focuses on UI, UX, and Front-End Development.
                        </Typography>
                    <Typography align={"left"} className={classes.sub1}>
                        If I'm not designing or coding or adjusting pixels, you would find me in Gym, Cooking, Brewing, or playing UKE.
                        </Typography>

                    <Typography align={"left"} className={classes.sub2}>
                        HTML | CSS | Javascript | ReactJs | Python | Adobe XD |
                    </Typography>

                </Grid>
                <Grid item xs={7}>
                    <img class='pc-person' src={Image} alt="image" />

                </Grid>
                {/* <Grid container
                    direction="row"
                    justify="left"
                    alignItems="left"
                    space={10}>
                    <Grid item xs={1}>
                        <img className={classes.sub3} src={icon_html} alt="html" />
                    </Grid>
                    <Grid item xs={1}>
                        <img className={classes.sub3} src={icon_css} alt="html" />
                    </Grid>
                    <Grid item xs={1}>
                        <img className={classes.sub3} src={icon_js} alt="html" />
                    </Grid>
                    <Grid item xs={1}>
                        <img className={classes.sub3} src={icon_react} alt="html" />
                    </Grid>
                    <Grid item xs={1}>
                        <img className={classes.sub3} src={icon_python} alt="html" />
                    </Grid>
                    <Grid item xs={1}>
                        <img className={classes.sub3} src={icon_xd} alt="html" />
                    </Grid>
                </Grid> */}
            </Grid>
        </div>
    );
}


export default Home;