import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import NavbarHiden from '../components/NavbarHiden';
import { Home } from '../pages/home/Home';
import { Institution } from '../pages/institucion/Institution';
import { Ethics } from '../pages/Ethics/Ethics';
import { Education } from '../pages/Education';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';
import { Contact } from '../pages/Contact';
import { Introduction } from '../pages/Ethics/Introduction';
import { ConceptosJustificacion } from '../pages/Ethics/ConceptosJustificacion';
import { DisposionesPreliminares } from '../pages/Ethics/DisposionesPreliminares';
import { Normas } from '../pages/Ethics/Normas';
import { Prohibicion } from '../pages/Ethics/Prohibicion';
import { Conflictos } from '../pages/Ethics/Conflictos';
import { ActividadesPoliticas } from '../pages/Ethics/ActividadesPoliticas';
import { MedioAmbiente } from '../pages/Ethics/MedioAmbiente';
import { ComiteEtica } from '../pages/Ethics/ComiteEtica';
import { Cumplimiento } from '../pages/Ethics/Cumplimiento';
import { MedidasDisciplinarias } from '../pages/Ethics/MedidasDisciplinarias';
import { AccesoPoliticas } from '../pages/Ethics/AccesoPoliticas';
import { Planificacion } from '../pages/institucion/Planificacion';
import { Button, IconButton, Typography } from '@material-ui/core';
import NotFound from '../assets/svg/undraw_page_not_found.svg';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import ApartmentRoundedIcon from '@material-ui/icons/ApartmentRounded';
import CollectionsBookmarkRoundedIcon from '@material-ui/icons/CollectionsBookmarkRounded';
import ContactPhoneRoundedIcon from '@material-ui/icons/ContactPhoneRounded';
import LocalLibraryRoundedIcon from '@material-ui/icons/LocalLibraryRounded';
import CloseRoundedIcon from '@material-ui/icons/CloseRounded';
import { Layout } from 'antd';
import { Lines } from '../components/Lines';
import { Personal } from '../pages/Personal';
import PeopleAltRoundedIcon from '@material-ui/icons/PeopleAltRounded';
import PlaylistAddCheckOutlinedIcon from '@material-ui/icons/PlaylistAddCheckOutlined';
import DescriptionIcon from '@material-ui/icons/Description';
import GavelIcon from '@material-ui/icons/Gavel';
import { Gestion } from '../pages/Gestion';
import { Ley } from '../pages/Ley';
import { Anexo1 } from '../pages/Anexo1';
import { Quejas } from '../pages/Quejas';

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    minHeight: '90vh',
  },
  footer: {
    alignSelf: 'flex-end',
    background: theme.palette.primary.main,
    width: '100%',
    textAlign: 'center',
    padding: '1em',
    color: '#fff',
  },
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    // padding: theme.spacing(3),
    maxWidth: '100vw',
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
  notFound: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '90vh',
    flexDirection: 'column',
  },
  backgroundFooter: {
    backgroundColor: '#fff',
  },
}));

export const Responsive = () => {
  const classes = useStyles();
  const { Footer } = Layout;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [selectedIndex, setSelectedIndex] = useState('Inicio');

  const [paginaActive, setPaginaActive] = useState(0);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
    console.log(paginaActive);
  };
  const handleListItemClick = (event, name) => {
    setSelectedIndex(name);
  };

  const routes = [
    { icon: <HomeRoundedIcon color="primary" />, path: '/', name: 'Inicio', more: [] },
    {
      icon: <ApartmentRoundedIcon color="primary" />,
      path: '/institucion',
      name: 'La Intitución',
      more: [
        { icon: <ArrowRightIcon color="primary" />, path: '/institucion', name: 'Filosofia institucional' },
        { icon: <ArrowRightIcon color="primary" />, path: '/planificacionEstrategica', name: 'Planificación Estratégica' },
      ],
    },
    {
      icon: <CollectionsBookmarkRoundedIcon color="primary" fontSize="small" />,
      path: '/codigoEtica',
      name: 'Código de Ética',
      more: [
        { icon: <ArrowRightIcon color="primary" fontSize="small" />, path: '/introduccion', name: 'Introducción' },
        { icon: <ArrowRightIcon color="primary" fontSize="small" />, path: '/conceptosJustificación', name: 'Conceptos y Justificación' },
        { icon: <ArrowRightIcon color="primary" fontSize="small" />, path: '/disposionesPreliminares', name: 'Disposiciones Preliminares' },
        { icon: <ArrowRightIcon color="primary" fontSize="small" />, path: '/normas', name: 'Normas' },
        { icon: <ArrowRightIcon color="primary" fontSize="small" />, path: '/prohibicion', name: 'Prohíbicion' },
        { icon: <ArrowRightIcon color="primary" fontSize="small" />, path: '/conflictos', name: 'Conflictos' },
        { icon: <ArrowRightIcon color="primary" fontSize="small" />, path: '/actividadesPoliticas', name: 'Actividades Políticas' },
        { icon: <ArrowRightIcon color="primary" fontSize="small" />, path: '/medioAmbiente', name: 'Medio Ambiente' },
        { icon: <ArrowRightIcon color="primary" fontSize="small" />, path: '/comiteEtica', name: 'Comite de Ética' },
        { icon: <ArrowRightIcon color="primary" fontSize="small" />, path: '/cumplimiento', name: 'Cumplimiento' },
        { icon: <ArrowRightIcon color="primary" fontSize="small" />, path: '/medidasDisciplinarias', name: 'Medidas Disciplinarias' },
        { icon: <ArrowRightIcon color="primary" fontSize="small" />, path: '/accesoPoliticas', name: 'Acceso a las Políticas' },
      ],
    },
    { icon: <LocalLibraryRoundedIcon color="primary" />, path: '/educacionFinanciera', name: 'Educación Financiera', more: [] },
    { icon: <PeopleAltRoundedIcon color="primary" />, path: '/personal', name: 'Nuestro Personal', more: [] },
    { icon: <ContactPhoneRoundedIcon color="primary" />, path: '/contacto', name: 'Contacto', more: [] },
    { icon: <PlaylistAddCheckOutlinedIcon color="primary" />, path: '/gestionperiodo2015-2021', name: 'Gestion Periodo 2015-2021', more: [] },
    { icon: <GavelIcon color="primary" />, path: '/ley-orgánica-de-proteccion-de-datos-personales', name: 'CUMPLIMIENTO A LA  LEY ORGÁNICA DE PROTECCIÓN DE DATOS PERSONALES.', more: [] },
    { icon: <DescriptionIcon color="primary" />, path: '/anexo1', name: 'ANEXO 1 - INDICADORES DE GOBIERNO CORPORATIVO.', more: [] },
    { icon: <PlaylistAddCheckOutlinedIcon color="primary" />, path: '/quejas-y-sugerencias', name: 'QUEJAS Y SUGERENCIAS.', more: [] },
  ];

  const drawer = (
    <div>
      <div className={classes.toolbar} style={{ display: 'flex', justifyContent: 'right', flexDirection: 'row-reverse' }}>
        <IconButton aria-label="" onClick={handleDrawerToggle}>
          <CloseRoundedIcon color="primary" />
        </IconButton>
      </div>
      <Divider />
      <List dense>
        {routes.map((item, index) => (
          <div key={index}>
            <ListItem
              selected={selectedIndex === item.name}
              button
              key={index}
              onClick={(e) => {
                handleDrawerToggle();
                handleListItemClick(e, item.name);
              }}
              component={Link}
              to={item.path}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.name} />
            </ListItem>
            <Divider />
            <List dense>
              {item.more.map((option, i) => (
                <ListItem
                  selected={selectedIndex === option.name}
                  button
                  key={`sub${i}`}
                  component={Link}
                  onClick={(e) => {
                    handleDrawerToggle();
                    handleListItemClick(e, option.name);
                  }}
                  to={option.path}
                  className={classes.nested}
                >
                  <ListItemIcon>{option.icon}</ListItemIcon>
                  <ListItemText primary={option.name} />
                </ListItem>
              ))}
            </List>
          </div>
        ))}
      </List>
    </div>
  );

  return (
    <div className={classes.root}>
      <Router>
        <NavbarHiden handleDrawerToggle={handleDrawerToggle} />
        <nav className={classes.drawer} aria-label="mailbox folders">
          {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
          <Hidden smUp implementation="css">
            <Drawer
              // container={container}
              variant="temporary"
              anchor="right"
              open={mobileOpen}
              onClose={handleDrawerToggle}
              classes={{
                paper: classes.drawerPaper,
              }}
              ModalProps={{
                keepMounted: true, // Better open performance on mobile.
              }}
            >
              {drawer}
            </Drawer>
          </Hidden>
        </nav>
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <Switch>
            <Route path="/" exact={true}>
              <Home setPaginaActive={setPaginaActive} />
            </Route>
            <Route path="/institucion" exact={true}>
              <Institution setPaginaActive={setPaginaActive} />
            </Route>
            <Route path="/codigoEtica" exact={true}>
              <Ethics setPaginaActive={setPaginaActive} />
            </Route>
            <Route path="/educacionFinanciera" exact={true}>
              <Education setPaginaActive={setPaginaActive} />
            </Route>
            <Route path="/introduccion" exact={true}>
              <Introduction setPaginaActive={setPaginaActive} />
            </Route>
            <Route path="/conceptosJustificación" exact={true}>
              <ConceptosJustificacion setPaginaActive={setPaginaActive} />
            </Route>
            <Route path="/disposionesPreliminares" exact={true}>
              <DisposionesPreliminares setPaginaActive={setPaginaActive} />
            </Route>
            <Route path="/normas" exact={true}>
              <Normas setPaginaActive={setPaginaActive} />
            </Route>
            <Route path="/prohibicion" exact={true}>
              <Prohibicion setPaginaActive={setPaginaActive} />
            </Route>
            <Route path="/conflictos" exact={true}>
              <Conflictos setPaginaActive={setPaginaActive} />
            </Route>
            <Route path="/actividadesPoliticas" exact={true}>
              <ActividadesPoliticas setPaginaActive={setPaginaActive} />
            </Route>
            <Route path="/medioAmbiente" exact={true}>
              <MedioAmbiente setPaginaActive={setPaginaActive} />
            </Route>
            <Route path="/comiteEtica" exact={true}>
              <ComiteEtica setPaginaActive={setPaginaActive} />
            </Route>
            <Route path="/cumplimiento" exact={true}>
              <Cumplimiento setPaginaActive={setPaginaActive} />
            </Route>
            <Route path="/medidasDisciplinarias" exact={true}>
              <MedidasDisciplinarias setPaginaActive={setPaginaActive} />
            </Route>
            <Route path="/accesoPoliticas" exact={true}>
              <AccesoPoliticas setPaginaActive={setPaginaActive} />
            </Route>
            <Route path="/planificacionEstrategica" exact={true}>
              <Planificacion setPaginaActive={setPaginaActive} />
            </Route>
            <Route path="/personal" exact={true}>
              <Personal setPaginaActive={setPaginaActive} />
            </Route>

            <Route path="/contacto" exact={true}>
              <Contact setPaginaActive={setPaginaActive} />
            </Route>

            <Route path="/gestionperiodo2015-2021" exact={true}>
              <Gestion setPaginaActive={setPaginaActive} />
            </Route>
            <Route path="/ley-orgánica-de-proteccion-de-datos-personales" exact={true}>
              <Ley setPaginaActive={setPaginaActive} />
            </Route>
            <Route path="/anexo1" exact={true}>
              <Anexo1 setPaginaActive={setPaginaActive} />
            </Route>
            <Route path="/quejas-y-sugerencias" exact={true}>
              <Quejas setPaginaActive={setPaginaActive} />
            </Route>
            <Route path="*">
              <div className={classes.notFound}>
                <img src={NotFound} alt="404" width="200" />
                <Typography variant="h5" color="primary" align="center">
                  Página no encontrada...
                </Typography>
                <Button variant="outlined" color="primary" style={{ margin: 10 }} onClick={() => (window.location.href = '/  ')}>
                  REGRESAR
                </Button>
              </div>
            </Route>
          </Switch>
          <Footer className={classes.backgroundFooter}>
            <center>
              <Typography variant="body1" color="primary">
                Copyright © {new Date().getFullYear()} fcpc-GADMO-OTAVALO
                {/* <span>
                  <a href="https://xapgreen.com/"> XAPgreen</a>
                </span> */}
              </Typography>
            </center>
          </Footer>
          <Lines height={10} />
        </main>
      </Router>
    </div>
  );
};
