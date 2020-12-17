import { Container, Grow, makeStyles, Typography } from '@material-ui/core';
import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Lines } from '../../components/Lines';

export const ComiteEtica = ({ setPaginaActive }) => {
  const classes = useStyles();
  useEffect(() => {
    setPaginaActive(1);
  }, [setPaginaActive]);

  return (
    <>
      <Helmet>
        <title>Comité de Ética | fcpcGADMO</title>
      </Helmet>
      <Grow in={true} style={{ transformOrigin: '0 0 0' }} {...(true ? { timeout: 800 } : {})}>
        <Container maxWidth="md">
          <Typography variant="h3" color="initial" align="center" className={classes.title}>
            COMITÉ DE ÉTICA
          </Typography>
          <Lines height={3} style={{ marginTop: 10, marginBottom: 10 }} />

          <Typography variant="h5" color="initial" className={classes.subTitle}>
            ARTÍCULO 25.
          </Typography>
          <Typography variant="body1" color="initial" component="p" align="justify" className={classes.parragraph}>
            Los Fondos Complementarios Previsionales Cerrados que son administrados por el Banco del Instituto Ecuatoriano de Seguridad Social (BIESS) deberán someterse a lo que establece la Sección de las normas que regulan la constitución, funcionamiento y liquidación de los Fondos Complementarios Previsionales Cerrados, constante en la Codificación de Resoluciones Monetarias, Financieras, de Valores y Seguros, emitida por los Miembros de la Junta de Política y Regulación Monetaria y Financiera, mediante Resolución No. 375-2017-F, 18-05-2017, publicada en el Suplemento del Registro Oficial No. 22 de 26 de junio del 2017.
          </Typography>
          <Typography variant="h5" color="initial" className={classes.subTitle}>
            ARTÍCULO 26.
          </Typography>
          <Typography variant="body1" color="initial" component="p" align="justify" className={classes.parragraph}>
            El comité de ética es el órgano encargado de velar por el cumplimiento del Código de Ética que debe contener, entre otros aspectos, valores y principios éticos que afiancen las relaciones con los directivos, afiliados, partícipes, empleados, proveedores de productos o servicios y con la sociedad; de tal manera que se promueva el cumplimiento de los principios de responsabilidad social, tales como: cumplimiento de la ley, respeto a las preferencias de los grupos de interés, transparencia y rendición de cuentas.
          </Typography>
          <Typography variant="body1" color="initial" component="p" align="justify" className={classes.parragraph}>
            Estará conformado por lo menos con un representante del consejo de administración y uno de los empleados del Fondo Complementario Provisional Cerrado, cuidando la equidad entre las partes. El funcionario encargado de la administración de recursos o talento humano será el encargado de la secretaría del comité.
          </Typography>
          <Typography variant="h5" color="initial" className={classes.subTitle}>
            ARTÍCULO 27.
          </Typography>
          <Typography variant="body1" color="initial" component="p" align="justify" className={classes.parragraph}>
            Los integrantes del Comité de Ética serán calificados por la Superintendencia de Bancos, en cuanto a su condición legal, idoneidad y técnica, en forma previa a su posesión, de acuerdo a las normas expedidas para el efecto.
          </Typography>
          <Typography variant="h5" color="initial" className={classes.subTitle}>
            ARTÍCULO 28.
          </Typography>
          <Typography variant="body1" color="initial" component="p" align="justify" className={classes.parragraph}>
            El Superintendente de Bancos podrá declarar la inhabilidad superviniente de los vocales del comité de ética, que se encontrar en incursos en impedimentos o inhabilidades legales o reglamentarias, sin perjuicio de las responsabilidades administrativas, civiles o penales a que hubiere lugar. Esta declaración de inhabilidad superviniente causará la inmediata cesación de funciones y la administración procederá a su remoción.
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
