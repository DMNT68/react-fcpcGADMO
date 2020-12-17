import React, { useEffect } from 'react';
import { Avatar, Card, CardContent, CardMedia, Container, Grid, Grow, Hidden, IconButton, List, ListItem, ListItemAvatar, ListItemText, makeStyles, Tooltip, Typography } from '@material-ui/core';
import education from '../assets/svg/undraw_education.svg';
import finance from '../assets/svg/undraw_finance.svg';
import credit from '../assets/svg/undraw_Profile_data.svg';
import financial from '../assets/svg/undraw_financial_data.svg';
import security from '../assets/svg/undraw_security.svg';
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import ListAltOutlinedIcon from '@material-ui/icons/ListAltOutlined';
import VerifiedUserOutlinedIcon from '@material-ui/icons/VerifiedUserOutlined';
import YouTubeIcon from '@material-ui/icons/YouTube';
import { Lines } from '../components/Lines';
import { Helmet } from 'react-helmet';

export const Education = ({ setPaginaActive }) => {
  const classes = useStyles();

  useEffect(() => {
    setPaginaActive(1);
  }, [setPaginaActive]);

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
              <Typography variant="body1" color="initial"  align="justify">
                FONDO DE CESANTÍA PRIVADO DE LOS EMPLEADOS, TRABAJADORES Y DOCENTES DEL GOBIERNO MUNICIPAL DE OTAVALO FCPC pone a disposición de todos sus partícipes y ciudadanía en general el Programa de Educación Financiera por lo cual le invitamos a registrarse en la Plataforma de manera gratuita en el siguiente enlace:
              </Typography>
              <center>
                <a href="https://www.edufin-fcpcbiessimbabura.com.ec" target="_blank" rel="noreferrer">
                  https://www.edufin-fcpcbiessimbabura.com.ec/
                </a>
              </center>
            </div>
          </div>
        </Grow>
        <Grow in={true} style={{ transformOrigin: '0 0 0' }} {...(true ? { timeout: 900 } : {})}>
          <div>
            <Typography variant="h6" color="initial">
              El programa de Educación Financiera se compone de los siguientes módulos:
            </Typography>
          </div>
        </Grow>

        <Grid container direction="row" justify="center" alignItems="center" className={classes.space}>
          <Grid item xs={12} sm={6} md={4} className={classes.gridItem}>
            <Grow in={true} style={{ transformOrigin: '0 0 0' }} {...(true ? { timeout: 1000 } : {})}>
              <Card className={classes.cards}>
                <CardMedia className={classes.media} title="Módulo 1" image={education} />
                <CardContent>
                  <Typography variant="h5" color="initial">
                    MÓDULO 1
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    Conceptos básicos, estructura, actores y funcionamiento del FONDO COMPLEMENTARIO PREVISIONAL CERRADO
                  </Typography>
                </CardContent>
              </Card>
            </Grow>
          </Grid>
          <Grid item xs={12} sm={6} md={4} className={classes.gridItem}>
            <Grow in={true} style={{ transformOrigin: '0 0 0' }} {...(true ? { timeout: 1000 } : {})}>
              <Card className={classes.cards}>
                <CardMedia className={classes.media} title="Módulo 1" image={finance} />
                <CardContent className={classes.contentCard}>
                  <Typography variant="h5" color="initial">
                    MÓDULO 2
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    Planifica tus finanzas y ¡Ahorra!
                  </Typography>
                </CardContent>
              </Card>
            </Grow>
          </Grid>
          <Grid item xs={12} sm={6} md={4} className={classes.gridItem}>
            <Grow in={true} style={{ transformOrigin: '0 0 0' }} {...(true ? { timeout: 1000 } : {})}>
              <Card className={classes.cards}>
                <CardMedia className={classes.media} title="Módulo 1" image={credit} />
                <CardContent className={classes.contentCard}>
                  <Typography variant="h5" color="initial">
                    MÓDULO 3
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    Crédito para vivir o vivir para pagar
                  </Typography>
                </CardContent>
              </Card>
            </Grow>
          </Grid>
          <Grid item xs={12} sm={6} md={4} className={classes.gridItem}>
            <Grow in={true} style={{ transformOrigin: '0 0 0' }} {...(true ? { timeout: 1000 } : {})}>
              <Card className={classes.cards}>
                <CardMedia className={classes.media} title="Módulo 1" image={financial} />
                <CardContent className={classes.contentCard}>
                  <Typography variant="h5" color="initial">
                    MÓDULO 4
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    Derechos y obligaciones del usuario del sistema financiero
                  </Typography>
                </CardContent>
              </Card>
            </Grow>
          </Grid>
          <Grid item xs={12} sm={6} md={4} className={classes.gridItem}>
            <Grow in={true} style={{ transformOrigin: '0 0 0' }} {...(true ? { timeout: 1000 } : {})}>
              <Card className={classes.cards}>
                <CardMedia className={classes.media} title="Módulo 1" image={security} />
                <CardContent className={classes.contentCard}>
                  <Typography variant="h5" color="initial">
                    MÓDULO 5
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p" >
                    Sistema de Seguridad Social
                  </Typography>
                </CardContent>
              </Card>
            </Grow>
          </Grid>
        </Grid>
        <Grow in={true} style={{ transformOrigin: '0 0 0' }} {...(true ? { timeout: 1000 } : {})}>
          <div>
            <Typography variant="body2" color="textSecondary" align="center" component="p" className={classes.space}  align="justify">
              Ud. puede acceder a la información las 24 horas del día sin ninguna restricción.
            </Typography>
            <Typography variant="h5" color="initial" align="center">
              Pasos a seguir:
            </Typography>
          </div>
        </Grow>
        <Grid container justify="center" alignItems="center" className={classes.space}>
          <Grow in={true} style={{ transformOrigin: '0 0 0' }} {...(true ? { timeout: 1000 } : {})}>
            <Grid item xs={12} sm={8}>
              <List>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar className={classes.bckgAvatar}>
                      <AddCircleOutlineOutlinedIcon fontSize="large" />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText  align="justify" primary="1. Crear una cuenta nueva en el siguiente enlace llenar los datos y escoger la opción al FONDO DE CESANTÍA PRIVADO DE LOS EMPLEADOS, TRABAJADORES Y DOCENTES DEL GOBIERNO MUNICIPAL DE OTAVALO FCPC " secondary={<a href="https://www.edufin-fcpcbiessimbabura.com.ec/">https://www.edufin-fcpcbiessimbabura.com.ec/ </a>} />
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar className={classes.bckgAvatar}>
                      <ListAltOutlinedIcon fontSize="large" />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText  align="justify" primary="2. Escoja el curso de su preferencia con el distintivo FONDO DE CESANTÍA PRIVADO DE LOS EMPLEADOS, TRABAJADORES Y DOCENTES DEL GOBIERNO MUNICIPAL DE OTAVALO FCPC  y matricularse" />
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar className={classes.bckgAvatar}>
                      <VerifiedUserOutlinedIcon fontSize="large" />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText  align="justify" primary="3. Revisar los contenidos y obtener su certificado." />
                </ListItem>
              </List>
            </Grid>
          </Grow>
        </Grid>
        <Grow in={true} style={{ transformOrigin: '0 0 0' }} {...(true ? { timeout: 1000 } : {})}>
          <div>
            <Typography variant="subtitle2" color="initial" align="center">
              Puede encontrar más información sobre el registro inicial e inscripción a los cursos en nuestro canal de youtube
            </Typography>
            <center>
              <Tooltip arrow placement="top" title="Clic para ir nuesto canal de Youtube">
                <IconButton href="https://www.youtube.com/channel/UCRvQ_6FQzWuAPl5raOc7WGw">
                  <YouTubeIcon style={{ color: '#FF0000', fontSize: 40 }} />
                </IconButton>
              </Tooltip>
            </center>
            <Hidden only={['xs']} className={classes.space}>
              <center>
                <Grid container spacing={4} justify="center" alignItems="center" className={classes.space}>
                  <Grid item xs={12} sm={12}>
                    <iframe title="video 1" width="560" height="315" src="https://www.youtube.com/embed/fz6T0qNLOxw" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                  </Grid>
                  <Grid item xs={12} sm={12}>
                    <iframe title="video 2" width="560" height="315" src="https://www.youtube.com/embed/1SzZuQL2gpE" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                  </Grid>
                </Grid>
              </center>
            </Hidden>
          </div>
        </Grow>
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
