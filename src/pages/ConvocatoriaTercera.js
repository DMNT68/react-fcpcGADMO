import React from 'react';
import Typography from '@material-ui/core/Typography';
import { Container, makeStyles, Grow, Hidden } from '@material-ui/core';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Lines } from '../components/Lines';
import { Helmet } from 'react-helmet';

export const ConvocatoriaTercera = ({ setPaginaActive }) => {
  const classes = useStyles();
  const fileName = 'CONVOCATORIA-ASAMBLEA-FCPC-GADMO-21-DE-AGOSTO-2023.pdf';
  const url = `https://fcpcgadmo.com.ec/files/${fileName}`;
  const headerTitle = 'Convocatoria tercera asamblea extraordinaria 2023';
  const title = 'CONVOCATORIA TERCERA ASAMBLEA EXTRAORDINARIA 2023';
  const fcpc = 'fcpcGADMO';

  return (
    <>
      <Helmet>
        <title>{headerTitle} | {fcpc}</title>
      </Helmet>
      <Container maxWidth="md" id="contacto">
        <Grow in={true} style={{ transformOrigin: '0 0 0' }} {...(true ? { timeout: 800 } : {})}>
          <Typography variant="h4" color="initial" align="center" className={classes.title}>
            {title}
          </Typography>
        </Grow>
        <Lines height={3} />
        <div className={classes.marginTopBottomx4}></div>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Hidden only={['xs']}>
            <iframe title="pdf" src={url} width="100%" height="500px"></iframe>
          </Hidden>
          <Hidden only={['md', 'xl', 'lg', 'sm']}>
            <div>
              <p>
                Abrir PDF &nbsp;
                <a rel="noreferrer" href={url} target="_blank">
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
