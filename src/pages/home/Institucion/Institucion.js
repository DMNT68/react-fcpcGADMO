import React from 'react';
import { Button, Container, Grid, List, ListItem, ListItemIcon, ListItemText, makeStyles, Paper, Typography } from '@material-ui/core';
// import { Link } from 'react-router-dom';
import SettingsIcon from '@material-ui/icons/Settings';
import LocalMallRoundedIcon from '@material-ui/icons/LocalMallRounded';
import AccountBalanceRoundedIcon from '@material-ui/icons/AccountBalanceRounded';
import '../Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { Lines } from '../../../components/Lines';
import BeenhereRoundedIcon from '@material-ui/icons/BeenhereRounded';
import Brightness5RoundedIcon from '@material-ui/icons/Brightness5Rounded';
import ClassRoundedIcon from '@material-ui/icons/ClassRounded';
import MenuBookRoundedIcon from '@material-ui/icons/MenuBookRounded';

export const Institucion = () => {
  const classes = useStyles();

  return (
    <div className="slide background-little-light slide">
      <div className="background-inst">
        <div id="institucion">
          <Container className={classes.mainContainer}>
            <Typography variant="h3" color="initial" align="center">
              LA INSTITUCIÓN
            </Typography>
            <div style={{width: '20%',}}>
              <Lines height={3}/>
            </div>
            
            <Grid container spacing={1} justify="center" alignItems="center" className={classes.mainGrid}>
              <Grid item xs={12} sm={4} className={classes.grids}>
                <Paper elevation={5} className={classes.papers}>
                  <Typography variant="h5" className={classes.marginTopBottom} color="initial">
                    FILOSOFÍA INSTITUCIONAL
                  </Typography>
                  <List dense>
                    <ListItem>
                      <ListItemIcon>
                        <SettingsIcon />
                      </ListItemIcon>
                      <ListItemText primary="MISIÓN" />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <AccountBalanceRoundedIcon />
                      </ListItemIcon>
                      <ListItemText primary="VISIÓN" />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <FontAwesomeIcon icon={faPaperPlane} fixedWidth size="lg" />
                      </ListItemIcon>
                      <ListItemText primary="VALORES INTITUCIONALES" />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <LocalMallRoundedIcon />
                      </ListItemIcon>
                      <ListItemText primary="PRODUCTOS" />
                    </ListItem>
                  </List>
                  <Button variant="outlined" style={{marginTop:10}} color="primary" onClick={() => (window.location.href = '/institucion')}>
                      Ver más
                    </Button>
                </Paper>
              </Grid>
              <Grid item xs={12} sm={4} className={classes.grids}>
                <Paper elevation={5} className={classes.papers}>
                  <Typography variant="h5" className={classes.marginTopBottom} color="initial">
                    PLANIFICACIÓN ESTRATÉGICA
                  </Typography>
                  <List dense>
                    <ListItem>
                      <ListItemIcon>
                        <Brightness5RoundedIcon />
                      </ListItemIcon>
                      <ListItemText primary="GENERACIÓN DE VALOR" />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <BeenhereRoundedIcon />
                      </ListItemIcon>
                      <ListItemText primary="OBJETIVOS" />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <ClassRoundedIcon/>
                      </ListItemIcon>
                      <ListItemText primary="ORGANIGRAMA" />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <MenuBookRoundedIcon />
                      </ListItemIcon>
                      <ListItemText primary="POLITICAS" />
                    </ListItem>
                  </List>
                  <Button variant="outlined" style={{marginTop:10}} color="primary" onClick={() => (window.location.href = '/planificacionEstrategica')}>
                      Ver más
                    </Button>
                </Paper>
              </Grid>
            </Grid>
          </Container>
        </div>
      </div>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    [theme.breakpoints.down('sm')]: {
      height: 'auto',
      marginTop: theme.spacing(4),
      marginBottom: theme.spacing(4),
      padding: 'auto auto',
    },
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: theme.spacing(6),
    marginBottom: theme.spacing(6),
    height: '100vh',
  },
  grids: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: theme.spacing(4),
  },
  papers: {
    padding: theme.spacing(4),
    backgroundColor:'rgba(255,255,255,0.95)'
  },
  marginTopBottom: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(4),
  },
  colorWhite: {
    color: '#fff',
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(4),
    fontWeight: 'bold',
  },

  mainGrid:{
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  }
}));
