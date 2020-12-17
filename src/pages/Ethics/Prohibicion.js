import { Container, Grow, makeStyles, Typography } from '@material-ui/core';
import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Lines } from '../../components/Lines';

export const Prohibicion = ({ setPaginaActive }) => {
  const classes = useStyles();
  useEffect(() => {
    setPaginaActive(1);
  }, [setPaginaActive]);

  return (
    <>
      <Helmet>
        <title>Prohibicion de sobornos y corrupción | fcpcGADMO</title>
      </Helmet>
      <Grow in={true} style={{ transformOrigin: '0 0 0' }} {...(true ? { timeout: 800 } : {})}>
        <Container maxWidth="md" className={classes.main}>
          <Typography variant="h3" color="initial" align="center" className={classes.title}>
            PROHIBICIÓN DE SOBORNOS Y CORRUPCIÓN
          </Typography>
          <Lines height={3} style={{ marginTop: 10, marginBottom: 10 }} />

          <Typography variant="h5" color="initial" className={classes.subTitle}>
            ARTÍCULO 18.- PROHIBICIÓN DE SOBORNOS Y CORRUPCIÓN
          </Typography>
          <Typography variant="body1" color="initial" component="p" align="justify" className={classes.parragraph}>
            Bajo ninguna circunstancia el Fondo o sus personeros darán o recibirán soborno en forma directa o indirecta, a sabiendas. Además, él o la Representante Legal o Gerente no respaldaran operaciones que impliquen ofrecer o dar sobornos, actuarán con la diligencia y el cuidado que sean razonables para no respaldar involuntariamente ese tipo de operaciones.
          </Typography>
          <Typography variant="body1" color="initial" component="p" align="justify" className={classes.parragraph}>
            Si un empleado o representante del Fondo se encuentra en la situación de que se le solicita el pago de un soborno, debe informar el incidente al BIESS u organismo de control para que tomen las acciones pertinentes.
          </Typography>
        </Container>
      </Grow>
    </>
  );
};

const useStyles = makeStyles((theme) => ({
  main: {
    height: '70vh',
    [theme.breakpoints.down('sm')]: {
      height: 'auto',
    },
  },
  title: {
    margin: theme.spacing(4),
    fontWeight: 'bold',
    [theme.breakpoints.down('sm')]: {
      fontSize: 26,
    },
  },
  subTitle: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
    fontWeight: 'bold',
    [theme.breakpoints.down('sm')]: {
      fontSize: 24,
    },
  },
  parragraph: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
    // marginLeft: theme.spacing(4),
  },
  list: {
    marginLeft: theme.spacing(4),
    [theme.breakpoints.down('sm')]: {
      marginLeft: theme.spacing(2),
    },
  },
}));
