import React from 'react';
import { Carousel } from 'antd';
import { Button, makeStyles, Typography } from '@material-ui/core';

import '../Home.css';

export const SlidesShow = () => {
  const classes = useStyles();

  return (
    <Carousel autoplay>
      <div className="slide first-slide">
        <div className="background-little-black slide">
          <Typography variant="h3" color="initial" align="center" className={classes.title1}>
            FONDO DE CESANTÍA PRIVADO DE LOS EMPLEADOS, TRABAJADORES Y DOCENTES DEL GOBIERNO MUNICIPAL DE OTAVALO Y EMPLEADOS‌ ‌Y‌ ‌ TRABAJADORES‌ ‌DE‌ ‌LA‌ ‌EMAPAO‌ FCPC
          </Typography>
          <Button variant="contained" color="primary" className={classes.marginBtn} onClick={() => (window.location.href = '/institucion')}>
            INGRESE AQUÍ
          </Button>
        </div>
      </div>
      <div className="slide second-slide">
        <div className="background-little-black slide">
          <Typography variant="h3" color="initial" align="center" className={classes.title}>
            PLANIFICACIÓN ESTRATÉGICA
          </Typography>
          <Button variant="contained" color="primary" className={classes.marginBtn} onClick={() => (window.location.href = '/planificacionEstrategica')}>
            INGRESE AQUÍ
          </Button>
        </div>
      </div>
      <div className="slide third-slide">
        <div className="background-little-black slide">
          <Typography variant="h3" color="initial" align="center" className={classes.title}>
            CÓDIGO DE ÉTICA Y BUEN GOBIERNO
          </Typography>
          <Button variant="contained" color="primary" className={classes.marginBtn} onClick={() => (window.location.href = '/codigoEtica')}>
            INGRESE AQUÍ
          </Button>
        </div>
      </div>
      <div className="slide fourth-slide">
        <div className="background-little-black slide">
          <Typography variant="h3" color="initial" align="center" className={classes.title}>
            PLATAFORMA DE EDUCACIÓN FINANCIERA
          </Typography>
          <Button variant="contained" color="primary" className={classes.marginBtn} onClick={() => (window.location.href = '/educacionFinanciera')}>
            INGRESE AQUÍ
          </Button>
        </div>
      </div>
    </Carousel>
  );
};

const useStyles = makeStyles((theme) => ({
  marginBtn: { margin: theme.spacing(4), borderRadius: 15 },
  title1: {
    padding: '0px 200px',
    fontWeight: 'bold',
    color: '#fff',
    [theme.breakpoints.down('md')]: {
      fontSize: 30,
      padding: '0px 100px',
    },
  },
  title: {
    padding: '0px 200px',
    fontWeight: 'bold',
    color: '#fff'
  },
}));
