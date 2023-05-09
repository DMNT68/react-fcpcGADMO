import React from 'react';
import { Container, Grow, Hidden, IconButton, makeStyles, Tooltip, Typography } from '@material-ui/core';

import YouTubeIcon from '@material-ui/icons/YouTube';
import { Lines } from '../components/Lines';
import { Helmet } from 'react-helmet';

export const Education = ({ setPaginaActive }) => {
  const classes = useStyles();

  /* Creación de una matriz de objetos. */
  const MODULOS = [
    { name: 'EVALUACIÓN MÓDULO I', link: 'https://docs.google.com/forms/d/e/1FAIpQLSd7wiau4sxustDeia-4Clku5DYxihyFOEHy7646Cm2ULUKM6Q/viewform?usp=sf_link' },
    { name: 'EVALUACIÓN MÓDULO II', link: 'https://docs.google.com/forms/d/e/1FAIpQLScIJ-RqDJFIm_zwZ8ss2Imk1pz1BY5fKMNZXKGZoFOiA-6O4Q/viewform?usp=sf_link' },
    { name: 'EVALUACIÓN MÓDULO III', link: 'https://docs.google.com/forms/d/e/1FAIpQLSc8peF0IOMxP_NYenjgZrrNxXw4AMC-nZeJY7d46d2yU8YjQg/viewform?usp=sf_link' },
    { name: 'EVALUACIÓN MÓDULO IV', link: 'https://docs.google.com/forms/d/e/1FAIpQLScyNVh4d9Rr52d62KSW9N0VwEATnKNRxJakviPaDrf7djNC8g/viewform?usp=sf_link' },
    { name: 'EVALUACIÓN MÓDULO V', link: 'https://docs.google.com/forms/d/e/1FAIpQLSc_aEpjtEzGlbQ8urqyEQeUDkEkRMk1qeZtPSQJMDqOjPJsQw/viewform?usp=sf_link' },
  ];

  const VIDEOS = [
    { name: 'MÓDULO I', link: 'https://www.youtube.com/embed/iccesVU2SpA' },
    { name: 'MÓDULO II', link: 'https://www.youtube.com/embed/kgJAz09k4xc' },
    { name: 'MÓDULO III', link: 'https://www.youtube.com/embed/3MTuHCJSqNI' },
    { name: 'MÓDULO IV', link: 'https://www.youtube.com/embed/wbKB_Jbn9tE' },
    { name: 'MÓDULO V', link: 'https://www.youtube.com/embed/z6D-axeD_Wc' },
  ];

  const MATERIALPDF = [
    { name: 'MÓDULO I', link: 'https://fcpcgadmo.com.ec/files/material/Programa-de-Educacion-Financiera-32-(3934)-MODULO-1.pdf' },
    { name: 'MÓDULO II', link: 'https://fcpcgadmo.com.ec/files/material/Programa-de-Educacion-Financiera-32-(3934)-MODULO-2.pdf' },
    { name: 'MÓDULO III', link: 'https://fcpcgadmo.com.ec/files/material/Programa-de-Educacion-Financiera-32-(3934)-MODULO-3.pdf' },
    { name: 'MÓDULO IV', link: 'https://fcpcgadmo.com.ec/files/material/Programa-de-Educacion-Financiera-32-(3934)-MODULO-4.pdf' },
    { name: 'MÓDULO V', link: 'https://fcpcgadmo.com.ec/files/material/Programa-de-Educacion-Financiera-32-(3934)-MODULO-5.pdf' },
  ];

  const DIAPOSITIVASPDF = [
    { name: 'MÓDULO I', link: 'https://fcpcgadmo.com.ec/files/material/MODULO-1-GADMO.pdf' },
    { name: 'MÓDULO II', link: 'https://fcpcgadmo.com.ec/files/material/MODULO-2-GADMO.pdf' },
    { name: 'MÓDULO III', link: 'https://fcpcgadmo.com.ec/files/material/MODULO-3-GADMO.pdf' },
    { name: 'MÓDULO IV', link: 'https://fcpcgadmo.com.ec/files/material/MODULO-4-GADMO.pdf' },
    { name: 'MÓDULO V', link: 'https://fcpcgadmo.com.ec/files/material/MODULO-5-GADMO.pdf' },
  ];

  const ENCUESTA = 'https://docs.google.com/forms/d/e/1FAIpQLSez-Csl2UZrprSU4Vv1u0xsno-tnNJUuWWJiWVkbCyZzBvGAw/viewform?usp=sf_link';
  const LINK_YT = 'https://www.youtube.com/channel/UCRvQ_6FQzWuAPl5raOc7WGw';

  return (
    <>
      <Helmet>
        <title>Educación Financiera | fcpcGADMO</title>
      </Helmet>
      <Container maxWidth="md">
        <Grow in={true} style={{ transformOrigin: '0 0 0' }} {...(true ? { timeout: 800 } : {})}>
          <div>
            <Typography variant="h3" color="initial" align="center" className={classes.space}>
              EDUCACIÓN FINANCIERA
            </Typography>
            <Lines height={3} />
            <div className={classes.space}>
              <Typography variant="body2" color="initial" align="justify">
                La información contenida en esta página web administrada por el Fondo tiene propiedad intelectual de la administración por cuanto queda prohibido su uso total o parcial.
              </Typography>
            </div>
            <div className={classes.space}>
              <Typography variant="body1" color="initial" align="justify">
                El FONDO DE CESANTÍA PRIVADO DE LOS EMPLEADOS, TRABAJADORES Y DOCENTES DEL GOBIERNO MUNICIPAL DE OTAVALO ‌Y EMPLEADOS‌ ‌Y‌ TRABAJADORES‌ ‌DE‌ ‌LA‌ ‌EMAPAO‌ ‌FCPC‌ pone a disposición de todos sus partícipes y ciudadanía en general el Programa de Educación Financiera, por cuanto a continuación usted podrá encontrar los 5 módulos y toda la información a ser conocida para posteriormente ingresar a los links de las evaluaciones, con lo cual usted podrá acceder a la certificación de aprobación del Programa de Educación Financiera.{' '}
              </Typography>
            </div>
          </div>
        </Grow>
        <Grow in={true} style={{ transformOrigin: '0 0 0' }} {...(true ? { timeout: 900 } : {})}>
          <div>
            <Typography variant="h5" color="initial" align="justify">
              <strong>Módulos Programa de Educación Financiera</strong>
            </Typography>
            <div style={{ marginTop: '20px' }}>
              {MATERIALPDF.map((pdf, idx) => (
                <div key={idx} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: 20 }}>
                  <Hidden only={['xs']}>
                    <iframe title={pdf.name} src={pdf.link} width="100%" height="500px"></iframe>
                  </Hidden>
                  <Hidden only={['md', 'xl', 'lg', 'sm']}>
                    <div>
                      <p>
                        Abrir PDF {pdf.name} &nbsp;
                        <a rel="noreferrer" href={pdf.link} target="_blank">
                          aquí
                        </a>
                        .
                      </p>
                    </div>
                  </Hidden>
                </div>
              ))}
            </div>
          </div>
        </Grow>

        <div style={{ marginTop: '30px' }}>
          <Typography variant="h6" color="initial" align="justify">
            <strong>Links de evaluación por módulo</strong>
          </Typography>
          {MODULOS.map((modulo) => (
            <div key={modulo.name} style={{ marginTop: '20px' }}>
              <Hidden only={['xs']}>
                <Typography variant="body2" color="initial" align="justify">
                  <strong>{modulo.name}</strong>
                </Typography>
                <li>
                  <a href={modulo.link} target="_blank" rel="noreferrer">
                    {modulo.link}
                  </a>
                </li>
              </Hidden>
              <Hidden only={['md', 'xl', 'lg', 'sm']}>
                <center>
                  <Typography variant="body2" color="initial" align="center">
                    <strong>{modulo.name}</strong>
                  </Typography>
                  <div>
                    <p>
                      <a rel="noreferrer" href={ENCUESTA} target="_blank">
                        Abrir evalución
                      </a>
                    </p>
                  </div>
                </center>
              </Hidden>
            </div>
          ))}
        </div>

        <div style={{ marginTop: '30px' }}>
          <Typography variant="h6" color="initial" align="justify">
            <strong>Link de encuesta de satisfacción obligatoria </strong>
          </Typography>

          <div style={{ marginTop: '20px' }}>
            <Typography variant="body2" color="textSecondary" component="p" className={classes.space}>
              Encuesta de Satisfacción
            </Typography>
            <Hidden only={['xs']}>
              <li>
                <a href={ENCUESTA}>{ENCUESTA}</a>
              </li>
            </Hidden>
            <Hidden only={['md', 'xl', 'lg', 'sm']}>
              <center>
                <Typography variant="body2" color="textSecondary" align="center" component="p" className={classes.space}>
                  Encuesta de Satisfacción
                </Typography>
                <p>
                  <a rel="noreferrer" href={ENCUESTA} target="_blank">
                    Abrir encuesta
                  </a>
                </p>
              </center>
            </Hidden>
          </div>
        </div>

        <div style={{ marginTop: '30px' }}>
          <Typography variant="h6" color="initial" align="justify">
            <strong>Material didáctico por módulo</strong>
          </Typography>

          <div style={{ marginTop: '20px' }}>
            {DIAPOSITIVASPDF.map((pdf, idx) => (
              <div key={idx} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: 20 }}>
                <Hidden only={['xs']}>
                  <iframe title={pdf.name} src={pdf.link} width="100%" height="500px"></iframe>
                </Hidden>
                <Hidden only={['md', 'xl', 'lg', 'sm']}>
                  <div>
                    <p>
                      Abrir PDF {pdf.name} &nbsp;
                      <a rel="noreferrer" href={pdf.link} target="_blank">
                        aquí
                      </a>
                    </p>
                  </div>
                </Hidden>
              </div>
            ))}
          </div>

          <div style={{ marginTop: '20px' }}>
            <Hidden only={['xs']} className={classes.space}>
              <center>
                {VIDEOS.map((video, idx) => (
                  <div key={idx} style={{ marginBottom: 20 }}>
                    <iframe title={video.name} width="560" height="315" src={video.link} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                  </div>
                ))}
              </center>
            </Hidden>
            <Hidden only={['sm', 'xl', 'md', 'lg']}>
              <center>
                <p>Mirar los videos en nuestro canal de youtube</p>
                <Tooltip arrow placement="top" title="Clic para ir nuesto canal de Youtube">
                  <IconButton href={LINK_YT}>
                    <YouTubeIcon style={{ color: '#FF0000', fontSize: 40 }} />
                  </IconButton>
                </Tooltip>
              </center>
            </Hidden>
          </div>
        </div>
      </Container>
    </>
  );
};

const useStyles = makeStyles((theme) => ({
  media: {
    height: 140,
    backgroundSize: 'contain',
    textAlign: 'center',
  },
  cards: {
    padding: 10,
    width: '90%',
    height: 300,
    marginTop: theme.spacing(4),
  },
  videos: {
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center ',
  },
  space: {
    margin: '2rem 0rem',
  },
  bckgAvatar: {
    backgroundColor: '#fff',
    color: '#0F47AF',
  },
  gridItem: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentCard: {
    marginTop: theme.spacing(2),
  },
}));
