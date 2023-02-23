import React from 'react';
import { Container, Grid, Grow, makeStyles, Typography, Button } from '@material-ui/core';
import LocationOnRoundedIcon from '@material-ui/icons/LocationOnRounded';
import PhoneRoundedIcon from '@material-ui/icons/PhoneRounded';
import EmailRoundedIcon from '@material-ui/icons/EmailRounded';
import '../Home.css';
import { Lines } from '../../../components/Lines';
import { ADDRESS, EMAIL, PHONE_NUMBER } from '../../constantes';

export const Contactos = () => {
  const classes = useStyles();
  return (
    <div id="contacto" className="background-contacto">
      <Container maxWidth="md" className={classes.containerContac}>
        <Grid container spacing={1} justify="center" alignItems="center">
          <Grid item xs={12} sm={6} className={classes.containerGridItem}>
            <Typography variant="h4" color="initial">
              CONTACTANOS
            </Typography>
            <div style={{ width: '20%' }}>
              <Lines height={3} />
            </div>
            <Button variant="contained" color="primary" onClick={() => (window.location.href = '/contacto')} className={classes.marginTopBottomx4}>
              VER MÁS
            </Button>
          </Grid>
          <Grid item xs={12} sm={6} className={classes.containerGridItem}>
            <div>
              <Grow in={true} style={{ transformOrigin: '0 0 0' }} {...(true ? { timeout: 800 } : {})}>
                <div className={classes.displayCenterColumn}>
                  <Typography variant="subtitle1" color="initial" className={classes.typographyWithIcon}>
                    <LocationOnRoundedIcon color="primary" className={classes.mrIcon} /> Ubicación
                  </Typography>
                  <Typography variant="subtitle1" color="textSecondary" className={classes.value}>
                    {ADDRESS}
                  </Typography>
                </div>
              </Grow>
              <Grow in={true} style={{ transformOrigin: '0 0 0' }} {...(true ? { timeout: 800 } : {})}>
                <div className={classes.displayCenterColumn}>
                  <Typography variant="subtitle1" color="initial" className={classes.typographyWithIcon}>
                    <PhoneRoundedIcon color="primary" className={classes.mrIcon} /> Teléfono
                  </Typography>
                  <Typography variant="subtitle1" color="textSecondary" className={classes.value}>
                    {PHONE_NUMBER}
                  </Typography>
                </div>
              </Grow>
              <Grow in={true} style={{ transformOrigin: '0 0 0' }} {...(true ? { timeout: 800 } : {})}>
                <div className={classes.displayCenterColumn}>
                  <Typography variant="subtitle1" color="initial" className={classes.typographyWithIcon}>
                    <EmailRoundedIcon color="primary" className={classes.mrIcon} /> Correo electrónico
                  </Typography>
                  <Typography variant="subtitle1" color="textSecondary" className={classes.value}>
                    {EMAIL}
                  </Typography>
                </div>
              </Grow>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
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
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginBottom: theme.spacing(2),
    marginTop: theme.spacing(2),
  },
  containerGridItem: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  containerInput: {
    diplay: 'flex',
    alignItems: 'center',
  },
  value: {
    marginLeft: theme.spacing(4.5),
  },
  typographyWithIcon: {
    display: 'flex',
    alignItems: 'center',
  },
  mrIcon: {
    marginRight: theme.spacing(1.5),
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
  },
  containerContac: {
    [theme.breakpoints.down('sm')]: {
      height: 'auto',
      marginTop: theme.spacing(4),
      marginBottom: theme.spacing(4),
    },
    color: 'white',
    height: '80vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));
