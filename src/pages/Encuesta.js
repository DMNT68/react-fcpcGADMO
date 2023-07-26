import React from 'react';
import Typography from '@material-ui/core/Typography';
import { Container, makeStyles, Grow, Hidden } from '@material-ui/core';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Lines } from '../components/Lines';
import { Helmet } from 'react-helmet';

export const Encuesta = () => {
  const classes = useStyles();

  return (
    <>
      <Helmet>
        <title>CONOCIMIENTO Y SOLICITUD DE DIFUSIÓN DE ENCUESTA DE EDUCACIÓN FINANCIERA | fcpcGADMO</title>
      </Helmet>
      <Container maxWidth="md" id="contacto">
        <Grow in={true} style={{ transformOrigin: '0 0 0' }} {...(true ? { timeout: 800 } : {})}>
          <Typography variant="h4" color="initial" align="center" className={classes.title}>
            CONOCIMIENTO Y SOLICITUD DE DIFUSIÓN DE ENCUESTA DE EDUCACIÓN FINANCIERA.
          </Typography>
        </Grow>
        <Lines height={3} />
        <div className={classes.marginTopBottomx4}>
          <Typography variant="body1" color="initial" component="p" className={classes.parragraph}>
            En cumplimiento a la Ley Orgánica de protección de datos personales se presenta la siguiente encuesta para ser llenada, lo cual lo deberán realizar desde el miércoles 25 al viernes 28 de julio 2028.
          </Typography>

          <Typography style={{ marginTop:15 }} variant="body1" color="initial" component="p" align="center" className={classes.parragraph}>
            Ingresar al siguiente link:{' '}
            <a href="https://es.surveymonkey.com/r/3NRP7W9" target="_blank" rel="noreferrer">
              https://es.surveymonkey.com/r/3NRP7W9
            </a>
          </Typography>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Hidden only={['xs']}>
            <iframe title="pdf" src="https://fcpcgadmo.com.ec/files/SB-IG-2023-0039-C.pdf" width="100%" height="500px"></iframe>
          </Hidden>
          <Hidden only={['md', 'xl', 'lg', 'sm']}>
            <div>
              <p>
                Abrir PDF &nbsp;
                <a rel="noreferrer" href="https://fcpcgadmo.com.ec/files/SB-IG-2023-0039-C.pdf" target="_blank">
                  aquí
                </a>
                .
              </p>
            </div>
            {/* <div style={{ height: '100vh' }}></div> */}
          </Hidden>
        </div>
      </Container>
    </>
  );
};

const useStyles = makeStyles((theme) => ({
  title: { margin: theme.spacing(4), fontWeight: 'bold' },
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
    marginBottom: theme.spacing(2),
    marginTop: theme.spacing(2),
  },
  containerForm: {
    diplay: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
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
}));
