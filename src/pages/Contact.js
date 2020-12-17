import React, { useState, useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import { Container, Grid, makeStyles, TextField, Button, Backdrop, CircularProgress, Grow } from '@material-ui/core';
import LocationOnRoundedIcon from '@material-ui/icons/LocationOnRounded';
import PhoneRoundedIcon from '@material-ui/icons/PhoneRounded';
import EmailRoundedIcon from '@material-ui/icons/EmailRounded';
import PersonRoundedIcon from '@material-ui/icons/PersonRounded';
import MessageRoundedIcon from '@material-ui/icons/MessageRounded';
import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import emailjs from 'emailjs-com';
import { useSnackbar } from 'notistack';
import { Lines } from '../components/Lines';
import { Helmet } from 'react-helmet';

const initForm = {
  nombre: '',
  email: '',
  mensaje: '',
};

export const Contact = ({ setPaginaActive }) => {
  const classes = useStyles();
  const { enqueueSnackbar } = useSnackbar();
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState(initForm);
  // 0.35129888899434164, -78.11857991534079
  const map = {
    lng: -78.26270923118615,
    lat: 0.22646082388389588,
    zoom: 18,
  };
  const Map = ReactMapboxGl({
    accessToken: 'pk.eyJ1IjoiYW5kcmVzc2FsZ2Fkb2MxIiwiYSI6ImNrMXRyN2c2bDAxZHUzb3FmcmRpdWIwdDIifQ.uT9V4dExJjvVNRWPQaZT_Q',
  });

  useEffect(() => {
    setPaginaActive(1);
  }, [setPaginaActive]);

  const onChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // eslint-disable-next-line
    const emailValid = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (form.nombre === '') {
      enqueueSnackbar('Debe llenar el campo nombre', { variant: 'error', autoHideDuration: 1000 });
    } else if (form.emai === '') {
      enqueueSnackbar('Debe llenar el campo correo electrónico', { variant: 'error', autoHideDuration: 1000 });
    } else if (!emailValid.test(form.email)) {
      enqueueSnackbar('Debe enviar un correo válido', { variant: 'error', autoHideDuration: 1000 });
    } else if (form.mensaje === '') {
      enqueueSnackbar('Debe llenar el campo mensaje', { variant: 'error', autoHideDuration: 1000 });
    } else {
      setOpen(true);

      emailjs.send('default_service', 'template_2058wvm', form, 'user_1qYziVW3nPypXpz5VjWvL').then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
          setForm(initForm);
          setOpen(false);
          enqueueSnackbar('Mensaje enviado', { variant: 'success', autoHideDuration: 2000 });
        },
        (err) => {
          console.log('FAILED...', err);
          setOpen(false);
          enqueueSnackbar('Ha ocurrido error intentelo mas tarde', { variant: 'error,  autoHideDuration: 2000' });
        }
      );
    }
  };

  return (
    <>
      <Helmet>
        <title>Contacto | fcpcGADMO</title>
      </Helmet>
      <Container maxWidth="md" id="contacto">
        <Backdrop className={classes.backdrop} open={open}>
          <CircularProgress color="primary" />
        </Backdrop>
        <Grow in={true} style={{ transformOrigin: '0 0 0' }} {...(true ? { timeout: 800 } : {})}>
          <Typography variant="h3" color="initial" align="center" className={classes.marginx4}>
            CONTACTO
          </Typography>
        </Grow>
        <Lines height={3} />
        <div className={classes.marginTopBottomx4}>
          <Grow in={true} style={{ transformOrigin: '0 0 0' }} {...(true ? { timeout: 800 } : {})}>
            <Typography variant="subtitle2" color="textPrimary">
              Ponemos a tu disposición varias formas de contactarnos:
            </Typography>
          </Grow>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6} style={{ width: '100%' }}>
              <Grow in={true} style={{ transformOrigin: '0 0 0' }} {...(true ? { timeout: 800 } : {})}>
                <div className={classes.displayCenterColumn}>
                  <Typography variant="subtitle1" color="initial" className={classes.typographyWithIcon}>
                    <LocationOnRoundedIcon color="primary" className={classes.mrIcon} /> Ubicación
                  </Typography>
                  <Typography variant="subtitle1" color="textSecondary" className={classes.value}>
                    Calle Abdón Calderón 405 entre Bolívar y Sucre frente a DELTEX, edificio blanco y café
                  </Typography>
                </div>
              </Grow>
              <Grow in={true} style={{ transformOrigin: '0 0 0' }} {...(true ? { timeout: 800 } : {})}>
                <div className={classes.displayCenterColumn}>
                  <Typography variant="subtitle1" color="initial" className={classes.typographyWithIcon}>
                    <PhoneRoundedIcon color="primary" className={classes.mrIcon} /> Teléfono
                  </Typography>
                  <Typography variant="subtitle1" color="textSecondary" className={classes.value}>
                    062926812
                  </Typography>
                </div>
              </Grow>
              <Grow in={true} style={{ transformOrigin: '0 0 0' }} {...(true ? { timeout: 800 } : {})}>
                <div className={classes.displayCenterColumn}>
                  <Typography variant="subtitle1" color="initial" className={classes.typographyWithIcon}>
                    <EmailRoundedIcon color="primary" className={classes.mrIcon} /> Correo electrónico
                  </Typography>
                  <Typography variant="subtitle1" color="textSecondary" className={classes.value}>
                    fcpcotavalo@outlook.com
                  </Typography>
                </div>
              </Grow>
            </Grid>
            <Grid item xs={12} sm={6} style={{ width: '100%' }}>
              <Grow in={true} style={{ transformOrigin: '0 0 0' }} {...(true ? { timeout: 800 } : {})}>
                <div className={classes.containerForm}>
                  <Grid container spacing={1} alignItems="flex-end" className={classes.containerInput}>
                    <Grid item xs={1}>
                      <PersonRoundedIcon color="primary" />
                    </Grid>
                    <Grid item xs={10}>
                      <TextField color="primary" className={classes.margin} name="nombre" label="Nombre" variant="outlined" value={form.nombre} onChange={onChange} fullWidth />
                    </Grid>
                  </Grid>
                  <Grid container spacing={1} alignItems="flex-end" className={classes.containerInput}>
                    <Grid item xs={1}>
                      <EmailRoundedIcon color="primary" />
                    </Grid>
                    <Grid item xs={10}>
                      <TextField color="primary" className={classes.margin} name="email" label="Correo Electrónico" variant="outlined" value={form.email} onChange={onChange} fullWidth />
                    </Grid>
                  </Grid>
                  <Grid container spacing={1} alignItems="flex-end" className={classes.containerInput}>
                    <Grid item xs={1}>
                      <MessageRoundedIcon color="primary" />
                    </Grid>
                    <Grid item xs={10}>
                      <TextField color="primary" className={classes.margin} name="mensaje" label="Mensaje" variant="outlined" value={form.mensaje} onChange={onChange} fullWidth />
                    </Grid>
                  </Grid>
                </div>
              </Grow>
              <center>
                <Grow in={true} style={{ transformOrigin: '0 0 0' }} {...(true ? { timeout: 800 } : {})}>
                  <Button variant="contained" color="primary" className={classes.margin} onClick={handleSubmit}>
                    ENVIAR
                  </Button>
                </Grow>
              </center>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Map
                // eslint-disable-next-line
                style="mapbox://styles/mapbox/streets-v9"
                containerStyle={{
                  height: '50vh',
                  width: '100%',
                }}
                center={[map.lng, map.lat]}
                zoom={[map.zoom]}
              >
                <Layer type="symbol" id="marker" layout={{ 'icon-image': 'marker-15' }}>
                  <Feature coordinates={[map.lng, map.lat]} />
                </Layer>
              </Map>
            </Grid>
          </Grid>
        </div>
      </Container>
    </>
  );
};

const useStyles = makeStyles((theme) => ({
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
