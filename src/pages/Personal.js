import React, { useEffect } from 'react';
import { Container, Grow, makeStyles, Typography, Grid, Paper } from '@material-ui/core';
import { Lines } from '../components/Lines';
import '../App.css';
import { Helmet } from 'react-helmet';

export const Personal = ({ setPaginaActive }) => {
  const classes = useStyles();
  useEffect(() => {
    setPaginaActive(1);
  }, [setPaginaActive]);
  return (
    <>
      <Helmet>
        <title>Nuestro Personal | fcpcGADMO</title>
      </Helmet>
      <Container maxWidth="md" id="contacto">
        <Grow in={true} style={{ transformOrigin: '0 0 0' }} {...(true ? { timeout: 800 } : {})}>
          <Typography variant="h3" color="initial" align="center" className={classes.marginx4}>
            NUESTRO PERSONAL
          </Typography>
        </Grow>
        <Lines height={3} />
        <div className={classes.marginTopBottomx4}>
          <Grid container spacing={1}>
            <Grid item xs={12} sm={6} className={classes.containerGridItem}>
              <Grow in={true} style={{ transformOrigin: '0 0 0' }} {...(true ? { timeout: 800 } : {})}>
                <Paper elevation={4} className={classes.paper}>
                  <center>
                    <div className="img1" />
                    <div className={classes.value}>
                      <Typography variant="body2" color="initial">
                        Ing. María Isabel Realpe G.
                      </Typography>
                      <Typography variant="body2" color="initial">
                        GERENTE FCPC IMBABURA
                      </Typography>
                    </div>
                  </center>
                </Paper>
              </Grow>
            </Grid>
            <Grid item xs={12} sm={6} className={classes.containerGridItem}>
              <Grow in={true} style={{ transformOrigin: '0 0 0' }} {...(true ? { timeout: 800 } : {})}>
                <Paper elevation={4} className={classes.paper}>
                  <center>
                    <div className="img2" />
                    <div className={classes.value}>
                      <Typography variant="body2" color="initial">
                        Ing. Katherine Daniela Vallejos A.
                      </Typography>
                      <Typography variant="body2" color="initial">
                        CONTADORA GENERAL y ANALISTA DE CRÉDITOS FCPC GADMO EMAPAO
                      </Typography>
                    </div>
                  </center>
                </Paper>
              </Grow>
            </Grid>
          </Grid>
        </div>
      </Container>
    </>
  );
};

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
  marginx4: {
    margin: theme.spacing(4),
  },
  marginTopBottomx4: {
    marginTop: theme.spacing(6),
    marginBottom: theme.spacing(4),
  },
  displayCenterColumn: {
    diplay: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerInput: {
    diplay: 'flex',
    alignItems: 'center',
  },
  value: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  img1: {
    width: 150,
    height: 150,
    backgroundImage: "url('../assets/images/ISABEL-GPI.jpg')",
    backgroundPosition: 'top',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    borderRadius: '100%',
    backgroundColor: '#0F47AF',
  },
  img2: {
    width: 150,
    height: 150,
    backgroundImage: "url('../assets/images/DAYANARA-SEVILLANO.jpeg')",
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    borderRadius: '100%',
    backgroundColor: '#0F47AF',
  },
  paper: {
    padding: theme.spacing(2),
    borderRadius: 15,
    width: theme.spacing(40),
    height: 275,
  },
  containerGridItem: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
}));
