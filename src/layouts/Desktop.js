import React, { useState } from 'react';
import { Layout } from 'antd';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home } from '../pages/home/Home';
import { Institution } from '../pages/institucion/Institution';
import { Education } from '../pages/Education';
import { Contact } from '../pages/Contact';
import { MenuBar } from '../components/MenuBar';
import { Banner } from '../components/Banner';
import { Ethics } from '../pages/Ethics/Ethics';
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
import NotFound from '../assets/svg/undraw_page_not_found.svg';
import { Button, Fade, makeStyles, Typography } from '@material-ui/core';
import { Lines } from '../components/Lines';
import { Personal } from '../pages/Personal';
import { Gestion } from '../pages/Gestion';
import { Ley } from '../pages/Ley';
import { Anexo1 } from '../pages/Anexo1';

export const Desktop = ({ paginaActive, setPaginaActive }) => {
  const classes = useStyles();
  const { Header, Content, Footer } = Layout;
  // const [paginaActive, setPaginaActive] = useState('1');

  return (
    <Fade in={true} style={{ transformOrigin: '0 0 0' }} {...(true ? { timeout: 900 } : {})}>
      <div>
        <Router>
          <Banner />
          <Header style={{ background: 'white' }}>
            <MenuBar paginaActive={paginaActive} setPaginaActive={setPaginaActive} />
          </Header>
          <Content style={{ margin: '10px 0px', alignItems: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
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
              <Route path="/contacto" exact={true}>
                <Contact setPaginaActive={setPaginaActive} />
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

              <Route path="/contacto" exact={true}>
                <Contact setPaginaActive={setPaginaActive} />
              </Route>
              <Route path="/personal" exact={true}>
                <Personal setPaginaActive={setPaginaActive} />
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

              <Route path="*">
                <div className={classes.notFound}>
                  <img src={NotFound} alt="404" width="400" style={{ margin: 20 }} />
                  <Typography variant="h3" color="primary" align="center" style={{ margin: 20 }}>
                    Página no encontrada...
                  </Typography>
                  <Button variant="outlined" color="primary" style={{ margin: 20 }} onClick={() => (window.location.href = '/  ')}>
                    REGRESAR
                  </Button>
                </div>
              </Route>
            </Switch>
          </Content>
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
        </Router>
      </div>
    </Fade>
  );
};

const useStyles = makeStyles((theme) => ({
  notFound: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '65vh',
    flexDirection: 'column',
  },
  backgroundFooter: {
    backgroundColor: '#fff',
  },
  lines: {
    display: 'flex',
  },
  lineGreen: {
    backgroundColor: '#078930',
    height: 10,
    width: '33.33%',
  },
  lineBlue: {
    backgroundColor: '#0F47AF',
    height: 10,
    width: '33.33%',
  },
  lineRed: {
    backgroundColor: '#DA121A',
    height: 10,
    width: '33.33%',
  },
}));
