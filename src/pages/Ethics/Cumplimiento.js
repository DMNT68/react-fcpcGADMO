import { Container, Grow, makeStyles, Typography } from '@material-ui/core';
import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Lines } from '../../components/Lines';

export const Cumplimiento = ({ setPaginaActive }) => {
  const classes = useStyles();
  useEffect(() => {
    setPaginaActive(1);
  }, [setPaginaActive]);

  return (
    <>
      <Helmet>
        <title>Cumplimiento | fcpcGADMO</title>
      </Helmet>
      <Grow in={true} style={{ transformOrigin: '0 0 0' }} {...(true ? { timeout: 800 } : {})}>
        <Container maxWidth="md">
          <Typography variant="h3" color="initial" align="center" className={classes.title}>
            CUMPLIMIENTO
          </Typography>
          <Lines height={3} style={{ marginTop: 10, marginBottom: 10 }} />

          <Typography variant="h5" color="initial" className={classes.subTitle}>
            ARTÍCULO 29.
          </Typography>
          <Typography variant="body1" color="initial" component="p" align="justify" className={classes.parragraph}>
            El cumplimiento del Código de Ética permitirá a los empleados, partícipes y proveedores del Fondo, tener una convivencia armónica, la inobservancia de las normas constantes en el presente código serán consideradas como “falta grave” y como tal serán sancionadas de acuerdo a lo que establece el Código del Trabajo, los reglamentos y normatividad aplicable al Fondo.
          </Typography>
          <Typography variant="body1" color="initial" component="p" align="justify" className={classes.parragraph}>
            Adicional a lo mencionado en el párrafo que precede, el partícipe, empleado y proveedor del Fondo quedará sujeto a las sanciones de tipo legal que correspondan por la violación de los principios del presente Código, precautelando y garantizando el debido proceso y el derecho a la legítima defensa.
          </Typography>
          <Typography variant="body1" color="initial" component="p" align="justify" className={classes.parragraph}>
            No existirán represalias en contra de las personas que suministren información sobre la violación del presente Código de Ética, por el contrario, se guardará absoluta confidencialidad en torno al hecho informado a las instancias jerárquicas del Fondo.
          </Typography>
        </Container>
      </Grow>
    </>
  );
};

const useStyles = makeStyles((theme) => ({
  title: {
    margin: theme.spacing(4),
    fontWeight: 'bold',
    [theme.breakpoints.down('sm')]: {
      fontSize: 32,
    },
  },
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
}));
