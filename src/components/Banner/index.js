import React from 'react';
import './Banner.css';
import LogoBiess from '../../assets/images/biess.png';
import LogoGPI from '../../assets/images/logofav.png';
import { Container, makeStyles, Typography } from '@material-ui/core';

export const Banner = () => {
  const classes = useStyles();

  return (
    <div>
      <Container className={classes.root}>
        <img src={LogoGPI} className="img-logos" alt="logo" />
        <center>
          <Typography color="initial" className={classes.title}>
            FONDO DE CESANTÍA PRIVADO DE LOS EMPLEADOS, TRABAJADORES Y DOCENTES DEL GOBIERNO MUNICIPAL DE OTAVALO ‌Y EMPLEADOS‌ ‌Y‌ TRABAJADORES‌ ‌DE‌ ‌LA‌ ‌EMAPAO‌ ‌FCPC‌
          </Typography>
          {/* <span className="titulo">FCPC DE JUBILACION PRIVADA DE LOS SERVIDORES DE CARRERA DEL GPI</span> */}
        </center>
        <img src={LogoBiess} className="img-logos2" alt="logo" />
      </Container>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    padding: '2em',
    
  },
  title: {
    fontSize: '2rem',
    fontWeight: 'bold',
    [theme.breakpoints.down('md')]: {
      fontSize: 30,
      // padding: '0px 100px',
    },
  },
}));
