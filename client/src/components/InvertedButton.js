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
          Where are you going?  What Type of accomodation do you like when you vacation.
        </Typography>
      </Grid>
      <Grid item xs={12} sm={4} md={4} lg={4}>
        <Typography>
          Your Business is Our Business, Making your Stay Fun!
        </Typography>
      </Grid>
      <Grid item xs={12} sm={4} md={4} lg={4}>
        <Typography>
          We Have short terms stays for 2 Nights and 3 Days and Long Term Stays for a Maximum of Up to Two Weeks on a single booking!   Guests cannot stay longer than 14 Days per rental.
        </Typography>
      </Grid>
    </Grid>

    // <TextSection
    //   sectionTitle="Home Away From Home, Our Business is to Make You Feel At Home Away From Home."
    //   bgColor="#21412a"
    //   textColor="#fff"
    //   borderColor="#998643"
    // />
  