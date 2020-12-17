import React, { useEffect } from 'react';
import { Container, Grow, makeStyles, Typography } from '@material-ui/core';
import { Lines } from '../../components/Lines';
import { Helmet } from 'react-helmet';

export const Introduction = ({ setPaginaActive }) => {
  const classes = useStyles();
  useEffect(() => {
    setPaginaActive(1);
  }, [setPaginaActive]);

  return (
    <>
      <Helmet>
        <title>Introducción | fcpcGADMO</title>
      </Helmet>
      <Grow in={true} style={{ transformOrigin: '0 0 0' }} {...(true ? { timeout: 800 } : {})}>
        <Container maxWidth="md">
          <Typography variant="h4" color="initial" align="center" className={classes.title}>
            INTRODUCCIÓN
          </Typography>
          <Lines height={3} style={{ marginTop: 10, marginBottom: 10 }} />
          <Typography variant="body1" color="initial" component="p" align="justify" className={classes.parragraph}>
            <span style={{ fontWeight: 'bold' }}>EL FONDO DE CESANTÍA PRIVADO DE LOS EMPLEADOS, TRABAJADORES Y DOCENTES DEL GOBIERNO MUNICIPAL DE OTAVALO FCPC,</span> basado en el buen servicio a sus partícipes, en el cumplimiento del pago oportuno e intacto de la jubilación y cesantía, en la obtención de rendimientos forjó su prestigio y cimentó una gran confianza a sus integrantes.
          </Typography>
          <Typography variant="body1" color="initial" component="p" align="justify" className={classes.parragraph}>
            El fiel cumplimiento de los objetivos del Fondo siempre deberá estar enmarcado en decisiones correctas que deben ser tomadas a la luz de la legalidad, la corrección, el respeto y la justicia.
          </Typography>
          <Typography variant="body1" color="initial" component="p" align="justify" className={classes.parragraph}>
            Este Código de Ética, más allá del cumplimiento de la obligación de presentar un documento requerido por la Superintendencia de Bancos, establece los estándares éticos del comportamiento que se espera de todos los empleados que prestan sus servicios al <span style={{ fontWeight: 'bold' }}>EL FONDO DE CESANTÍA PRIVADO DE LOS EMPLEADOS, TRABAJADORES Y DOCENTES DEL GOBIERNO MUNICIPAL DE OTAVALO FCPC</span>,como de sus partícipes; además, servirá de guía para el desempeño ético en la gestión eficiente de los recursos de los partícipes para con proveedores naturales o jurídicos que prestan sus servicios al Fondo para el normal desarrollo de las actividades.
          </Typography>
        </Container>
      </Grow>
    </>
  );
};

const useStyles = makeStyles((theme) => ({
  title: { margin: theme.spacing(4), fontWeight: 'bold' },
  subTitle: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
    fontWeight: 'bold',
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
  containerTotal: {
    height: '100vh',
  },
}));
