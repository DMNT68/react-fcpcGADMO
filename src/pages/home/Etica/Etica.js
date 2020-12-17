import React from 'react';
// import { Link } from 'react-router-dom';
import { Button, Container, makeStyles, Typography } from '@material-ui/core';
import '../Home.css';
import { Lines } from '../../../components/Lines';

export const Etica = () => {
  const classes = useStyles();

  return (
    <div className="background-little-light">
      <div className="background-ethic">
        <div className="container" id="codigo">
          <Container maxWidth="sm" className={classes.containerEthic}>
            <div className={classes.mbx4}>
              <center>
                <Typography variant="h2" color="initial" align="center">
                  CÓDIGO DE ÉTICA Y BUEN GOBIERNO
                </Typography>
                <Typography variant="h6" color="textSecondary" align="center">
                  FCPC - GADMO - EMAPAO
                </Typography>
                <div style={{ width: '20%' }}>
                  <Lines height={3} />
                </div>
              </center>
            </div>
            <Typography variant="subtitle2" color="textSecondary" align="center" className={classes.mbx4}>
              Más que un documento requerido por la Superintendencia de Bancos, nuestro código de ética y buen gobierno establece los estándares éticos del comportamiento que se espera de todos y la gestión eficiente de los recursos.
            </Typography>
            <center className={classes.mbx4}>
              <Button variant="contained" color="primary" onClick={() => (window.location.href = '/codigoEtica')}>
                Ver más
              </Button>
            </center>
          </Container>
        </div>
      </div>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  mbx4: {
    marginBottom: theme.spacing(6),
  },
  containerEthic: {
    [theme.breakpoints.down('sm')]: {
      height: 'auto',
      marginTop: theme.spacing(4),
      marginBottom: theme.spacing(4),
    },
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  colorWhite: {
    color: '#fff',
  },
}));
