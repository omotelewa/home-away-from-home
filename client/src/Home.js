import Grid from '@material-ui/core/Grid'
import withStyles from '@material-ui/core/styles/withStyles'
import Link from 'next/link'
import React from 'react'
import Hero from './components/Hero'
import Layout from './components/Layout'
import TextSection from './components/TextSection'
import withRoot from '../components/withRoot'
import InvertedButton from './components/InvertedButton'
import Typography from '@material-ui/core/Typography'

export const Home = () =>{
  return(
    <div>
      <Layout>
      <Hero
        backgroundImg="https://cdn.pixabay.com/photo/2018/01/11/19/02/architecture-3076685_960_720.jpg"
        titleText="Great Rentals Home Away From Home Year Round"
        subtitleText={
          <span>Excellence In Service; Your Home Away From Home</span>
        }
        primaryBtnText="Reserve"
        primaryBtnLink="#"
        secondaryBtnText="Inquire"
        secondaryBtnLink="#"
        tertiaryBtnText="Visit"
        tertiaryBtnLink="#"
        minimumHeight="60vh"
      />
  
      <Grid container>
        <Grid item xs={12} sm={4} md={4} lg={4}>
          <Typography>
            Where are you going? How do you want to serve?
            Those are real questions, with real answers—answers that will shape
            your vacation for a lifetime.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={4} md={4} lg={4}>
          <Typography>
            Do you want to relax and enjoy your time then reserve with Home Away From Home.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={4} md={4} lg={4}>
          <Typography>
            Vacationing is always personal. Whether it takes place in your city or
            “the abroad,” vacation is about family: your time, your
            friends, and you. It’s about your shared desire to have a restful vacation, so location matters.
          </Typography>
        </Grid>
      </Grid>
  
      { <TextSection
        sectionTitle="Our mission is to make sure all our residents have a memorable and unjoyable stay."
        bgColor="#21412a"
        textColor="#fff"
        borderColor="#998643"
      /> }
            
    </Layout>

  
    </div>
      
  )}

const styles = theme => ({
  white: {
    color: '#fff'
  },
  card: {
    width: '100%'
  },
  media: {
    minHeight: 280,
    [theme.breakpoints.up('xl')]: {
      minHeight: 1366
    },
    [theme.breakpoints.up('lg')]: {
      minHeight: '400px'
    }
  },
  gridItemFix: {
    width: '100%',
    padding: '16px',
    [theme.breakpoints.down('sm')]: {
      padding: '8px'
    }
  },
  contentContainer: {
    width: '100%',
    maxWidth: '70%',
    margin: '32px auto',
    [theme.breakpoints.down('md')]: {
      maxWidth: '85%'
    },
    [theme.breakpoints.down('sm')]: {
      maxWidth: '95%'
    }
  },
  listItem: {
    paddingLeft: 0,
    paddingRight: 0,
    alignItems: 'start'
  },
  avatar: {
    width: '80px',
    height: '80px',
    borderRadius: 0
  },
  avatarBig: {
    width: '200px',
    height: '200px',
    [theme.breakpoints.down('sm')]: {
      width: '100px',
      height: '100px'
    }
  },
  listItemTextBig: {
    fontSize: '34px',
    [theme.breakpoints.down('sm')]: {
      fontSize: '24px'
    }
  },
  videoIframe: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    border: 'none'
  },
  videoIframeContainer: {
    width: '100%',
    height: 0,
    overflow: 'hidden',
    position: 'relative',
    paddingBottom: '56.25%'
  },
  listGridItem: {
    paddingBottom: 0
  },
  headerListItem: {
    listStyleType: 'none',
    fontSize: '20px'
  },
  listGridContainer: {
    paddingTop: '8px'
  },
  list: {
    padding: 0,
    margin: 0
  },
  listHeader: {
    margin: '4px 0',
    fontWeight: 400,
    fontSize: '24px'
  },
  section: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    padding: '38px 0',
    textAlign: 'center'
  },
  innerContainer: {
    width: '70%',
    margin: '0 auto'
  },
  sectionText: {
    fontSize: '28px',
    fontWeight: 400,
    lineHeight: 1.5
  },
  heroBtn: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '16px'
  },
  invertedBtn: {
    color: '#21412a',
    backgroundColor: 'transparent',
    border: '2px #21412a solid',
    boxShadow: 'none'
  }
})


//export default withRoot(withStyles(styles))
