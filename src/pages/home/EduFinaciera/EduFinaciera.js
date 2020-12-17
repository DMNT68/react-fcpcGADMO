import React from 'react';
import { Button, Container, Grid, makeStyles, Typography } from '@material-ui/core';
// import { Link } from 'react-router-dom';
import '../Home.css';
import { Lines } from '../../../components/Lines';

export const EduFinaciera = () => {
  const classes = useStyles();
  return (
    <div className="background-little-light slide">
      <div className="background-edu">
        <div className="container" id="educacion">
          <Container className={classes.containerEdu}>
            <Grid container spacing={4} justify="center" alignItems="center">
              <Grid item xs={12} sm={6}>
                <center>
                  <Typography variant="h3" color="initial" align="center">
                    EDUCACIÓN FINANCIERA
                  </Typography>
                  <div style={{ width: '20%' }}>
                    <Lines height={3} />
                  </div>
                </center>
              </Grid>
              <Grid item xs={12} sm={6} className={classes.parrafo}>
                <Typography variant="body1" color="textSecondary" align="justify">
                  FONDO DE CESANTÍA PRIVADO DE LOS EMPLEADOS, TRABAJADORES Y DOCENTES DEL GOBIERNO MUNICIPAL DE OTAVALO FCPC pone a disposición de todos sus partícipes y ciudadanía en general el Programa de Educación Financiera por lo cual le invitamos a registrarse en la Plataforma de manera gratuita en el siguiente enlace:
                </Typography>
                <center>
                  <a href="https://www.edufin-fcpcbiessimbabura.com.ec" target="_blank" rel="noreferrer">
                    https://www.edufin-fcpcbiessimbabura.com.ec/
                  </a>
                </center>
              </Grid>
              <Grid item xs>
                <center>
                  <Button onClick={() => (window.location.href = '/educacionFinanciera')} variant="outlined" color="primary">
                    VER MÁS
                  </Button>
                </center>
              </Grid>
            </Grid>
          </Container>
        </div>
      </div>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  containerGrid: {
    maxHeight: '100vh',
  },
  containerEdu: {
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
  parrafo: {
    [theme.breakpoints.down('sm')]: {
      paddingLeft: theme.spacing(4),
      paddingRight: theme.spacing(4),
    },
  },
  colorWhite: {
    color: '#fff',
  },
}));
