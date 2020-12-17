import React, { useEffect } from 'react';
import { Grid, Grow, Hidden } from '@material-ui/core';

import { Institucion } from './Institucion/Institucion';
import { SlidesShow } from './SlideShow/SlideShow';
import { Etica } from './Etica/Etica';
import { EduFinaciera } from './EduFinaciera/EduFinaciera';
import { Contactos } from './Contactos/Contactos';
import './Home.css';
import { Helmet } from 'react-helmet';

export const Home = ({ setPaginaActive }) => {
  useEffect(() => {
    setPaginaActive(0);
  }, [setPaginaActive]);

  return (
    <>
      <Helmet>
        <title>Inicio | fcpcGADMO</title>
        <meta name="desciption" content="Inicio | FONDO DE CESANTÍA PRIVADO DE LOS EMPLEADOS, TRABAJADORES Y DOCENTES DEL GOBIERNO MUNICIPAL DE OTAVALO FCPC" data-react-helmet="true" />
      </Helmet>
      <Grow in={true} style={{ transformOrigin: '0 0 0' }} {...(true ? { timeout: 800 } : {})}>
        <Grid container>
          <Grid item xs={12} sm={12}>
            <Hidden only={['xs']}>
              <SlidesShow />
            </Hidden>
          </Grid>
          <Grid item xs={12} sm={12}>
            <Institucion />
          </Grid>
          <Grid item xs={12} sm={12}>
            <Etica />
          </Grid>
          <Grid item xs={12} sm={12}>
            <EduFinaciera />
          </Grid>
          <Grid item xs={12} sm={12} style={{ backgroundColor: '#fff' }}>
            <Contactos />
          </Grid>
        </Grid>
      </Grow>
    </>
  );
};
