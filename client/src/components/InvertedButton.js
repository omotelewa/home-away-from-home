import Grid from '@material-ui/core/Grid'
import withStyles from '@material-ui/core/styles/withStyles'
import Link from 'next/link'
import React from 'react'
import Hero from '../components/Hero'
import Layout from '../components/Layout'
import TextSection from './TextSection'
import withRoot from '../components/withRoot'
import InvertedButton from '../components/InvertedButton'
import Typography from '@material-ui/core/Typography'


    

    <Grid container className={classes.contentContainer}>
      <Grid item xs={12} sm={4} md={4} lg={4}>
        <Typography>
          Where are you going? Who do you want to be? How do you want to serve?
          Those are real questions, with real answers—answers that will shape
          your future and the future of the world in which you live.
        </Typography>
      </Grid>
      <Grid item xs={12} sm={4} md={4} lg={4}>
        <Typography>
          Do you want to grow in mind, body, and spirit? Do you want to expand
          your intellectual horizons or take the next step in your career? Do
          you want to serve God and your fellow man in a new way?
        </Typography>
      </Grid>
      <Grid item xs={12} sm={4} md={4} lg={4}>
        <Typography>
          Learning is always personal. Whether it takes place in a classroom or
          “the cloud,” education is about people: your teachers, your
          classmates, and you. It’s about your shared desire to grow in
          knowledge, discover truth, and help one another better serve God and
          others in the world.
        </Typography>
      </Grid>
    </Grid>

    <TextSection
      sectionTitle="Our mission as a Franciscan and Catholic university that embraces the call to dynamic orthodoxy is to educate, to evangelize, and to send forth joyful disciples."
      bgColor="#21412a"
      textColor="#fff"
      borderColor="#998643"
    />
    