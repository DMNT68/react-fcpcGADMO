import React from 'react';
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
import { Quejas } from '../pages/Quejas';
import { Bases } from '../pages/Bases';
import { NormasCalificacion } from '../pages/NormasCalificacion';
import { ConvocatoriaAsamblea } from '../pages/ConvocatoriaAsamblea';
import { ConvocatoriaAsamblea2 } from '../pages/ConvocatoriaAsamblea2';
import { Encuesta } from '../pages/Encuesta';
import { ConvocatoriaTercera } from '../pages/ConvocatoriaTercera';

import { ConvocatoriaPrimeraAsamblea2024 } from '../pages/convocatoria-2024/ConvocatoriaPrimeraAsamblea2024';
import { Manual } from '../pages/convocatoria-2024/punto9/Manual';
import { Resolucion } from '../pages/convocatoria-2024/punto10/Resolucion';
import { Oficio } from '../pages/convocatoria-2024/punto10/Oficio';
import { ManualFunciones } from '../pages/convocatoria-2024/punto11/ManualFunciones';
import { CodigoEtica } from '../pages/convocatoria-2024/punto11/CodigoEtica';
import { ManualLavadoActivos } from '../pages/convocatoria-2024/punto11/ManualLavadoActivos';
import { ManualContable } from '../pages/convocatoria-2024/punto11/ManualContable';
import { ManualRegistroCuentaIndividual } from '../pages/convocatoria-2024/punto11/ManualRegistroCuentaIndividual';
import { ManualAdministracionRiesgo } from '../pages/convocatoria-2024/punto11/ManualAdministracionRiesgo';
import { ManualPrestaciones } from '../pages/convocatoria-2024/punto11/ManualPrestaciones';
import { ManualControlInterno } from '../pages/convocatoria-2024/punto11/ManualControlInterno';
import { PoliticaActualizacionManuales } from '../pages/convocatoria-2024/punto11/PoliticaActualizacionManuales';
import { ManualCompraVentaTitulos } from '../pages/convocatoria-2024/punto11/ManualCompraVentaTitulos';
import { ManualInversionesNoPrivativas } from '../pages/convocatoria-2024/punto11/ManualInversionesNoPrivativas';
import { ManualInversionesPrivativas } from '../pages/convocatoria-2024/punto11/ManualInversionesPrivativas';
import { ManualDevolucionFondo } from '../pages/convocatoria-2024/punto11/ManualDevolucionFondo';
import { ManualViaticos } from '../pages/convocatoria-2024/punto11/ManualViaticos';
import { ManualCalificacion } from '../pages/convocatoria-2024/punto12/ManualCalificacion';
import { ManualArchivoYGEstionDocumental } from '../pages/convocatoria-2024/punto12/ManualArchivoYGEstionDocumental';
import { ManualIncidencias } from '../pages/convocatoria-2024/punto13/ManualIncidencias';
import { ManualCambiosAplicativo } from '../pages/convocatoria-2024/punto13/ManualCambiosAplicativo';
import { ManualGeneracionRespaldos } from '../pages/convocatoria-2024/punto13/ManualGeneracionRespaldos';
import { ManualGestionAsambleas } from '../pages/convocatoria-2024/punto12/ManualGestionAsambleas';
import { PoliticaEjecucionPlanEstrategico } from '../pages/convocatoria-2024/punto12/PoliticaEjecucionPlanEstrategico';
import { ManualAdministracionDelPersonal } from '../pages/convocatoria-2024/punto12/ManualAdministracionDelPersonal';
import { ConvocatoriaSegundaAsamblea2024 } from '../pages/convocatoria-2024/segunda/ConvocatoriaSegundaAsamblea2024';
import { ConvocatoriaTerceraAsamblea2024 } from '../pages/convocatoria-2024/tercera/ConvocatoriaTerceraAsamblea2024';
import { BuzonQuejas } from '../pages/BuzonQuejas';
import { ConvocatoriaCuartaAsamblea2024 } from '../pages/convocatoria-2024/cuarta/ConvocatoriaCuartaAsamblea2024';

import { ConvocatoriaPrimeraAsamblea2025 } from '../pages/convocatoria-2025/primera/ConvocatoriaPrimeraAsamblea2024';
import { ManualInhabilidades } from '../pages/convocatoria-2025/primera/punto6/ManualInhabilidades';
import { ManualDeFunciones } from '../pages/convocatoria-2025/primera/punto6/ManualDeFunciones';
import { CodigoDeEtica } from '../pages/convocatoria-2025/primera/punto6/CodigoDeEtica';
import { ManualdeViaticos } from '../pages/convocatoria-2025/primera/punto6/ManualDeViaticos';
import { ManualDeLavadoDeActivos } from '../pages/convocatoria-2025/primera/punto6/ManualDeLavadoDeActivos';
import { ManualDeRegistroContable } from '../pages/convocatoria-2025/primera/punto6/ManualDeRegistroContable';
import { ManualDeRegistroContableIndividual } from '../pages/convocatoria-2025/primera/punto6/ManualDeRegistroContableIndividual';
import { ManualdeInversionesNoPrivativas } from '../pages/convocatoria-2025/primera/punto6/ManualdeInversionesNoPrivativas';
import { ManualdeInversionesPrivativas } from '../pages/convocatoria-2025/primera/punto6/ManualdeInversionesPrivativas';
import { ManualParaLaAdministracionYGestionDelRiesgo } from '../pages/convocatoria-2025/primera/punto6/ManualParaLaAdministracionYGestionDelRiesgo';
import { ManualDePrestaciones } from '../pages/convocatoria-2025/primera/punto6/ManualDePrestaciones';
import { ManualDeControlInterno } from '../pages/convocatoria-2025/primera/punto6/ManualDeControlInterno';
import { PoliticaDeActualizacionDeNormativa } from '../pages/convocatoria-2025/primera/punto6/PoliticaDeActualizacionDeNormativa';
import { ManualDeCompraVentaDeTitulosValores } from '../pages/convocatoria-2025/primera/punto6/ManualDeCompraVentaDeTitulosValores';
import { ManualDeCalificacionYCastigoDeCartera } from '../pages/convocatoria-2025/primera/punto6/ManualDeCalificacionYCastigoDeCartera';
import { ManualDeAdministracionDelPersonalDelFondo } from '../pages/convocatoria-2025/primera/punto6/ManualDeAdministracionDelPersonalDelFondo';
import { ManualDeArchivoYGestionDocumental } from '../pages/convocatoria-2025/primera/punto6/ManualDeArchivoYGestionDocumental';
import { PoliticaDeEjecucion } from '../pages/convocatoria-2025/primera/punto6/PoliticaDeEjecucion';
import { ManualDeGestionDeAsambleas } from '../pages/convocatoria-2025/primera/punto6/ManualDeGestionDeAsambleas';
import { ManualDeTecnologiasIncidencias } from '../pages/convocatoria-2025/primera/punto6/ManualDeTecnologiasIncidencias';
import { ManualDeTecnologiasCambiosAplicativoContable } from '../pages/convocatoria-2025/primera/punto6/ManualDeTecnologiasCambiosAplicativoContable';
import { ManualDeTecnologiasGeneracionDeRespaldos } from '../pages/convocatoria-2025/primera/punto6/ManualDeTecnologiasGeneracionDeRespaldos';
import { ProcedimientoParaQuejas } from '../pages/convocatoria-2025/primera/punto6/ProcedimientoParaQuejas';
import { ManualCircular } from '../pages/convocatoria-2025/primera/punto6/ManualCircular';
import { Manuales } from '../pages/convocatoria-2025/primera/punto6';

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
          <Content
            style={{
              margin: '10px 0px',
              alignItems: 'center',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
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
              <Route path="/quejas-y-sugerencias" exact={true}>
                <Quejas setPaginaActive={setPaginaActive} />
              </Route>
              <Route path="/buzon-de-quejas" exact={true}>
                <BuzonQuejas />
              </Route>
              <Route path="/proceso-de-concurso-de-meritos-y-oposicion" exact={true}>
                <Bases setPaginaActive={setPaginaActive} />
              </Route>
              <Route path="/normas-para-calificacion" exact={true}>
                <NormasCalificacion setPaginaActive={setPaginaActive} />
              </Route>
              <Route
                path="/convocatoria-primera-asamblea-general-ordinaria-2023-fcpc-gadmo"
                exact={true}
              >
                <ConvocatoriaAsamblea setPaginaActive={setPaginaActive} />
              </Route>
              <Route
                path="/segunda-asamblea-general-extraordinaria-2023-03-de-mayo-2023"
                exact={true}
              >
                <ConvocatoriaAsamblea2 setPaginaActive={setPaginaActive} />
              </Route>
              <Route path="/encuesta-de-educación-financiera" exact={true}>
                <Encuesta />
              </Route>
              <Route path="/convocatoria-tercera-asamblea-2023" exact={true}>
                <ConvocatoriaTercera />
              </Route>

              {/* ConvocatoriaPrimeraAsamble2024 */}

              <Route path="/convocatoria-primera-asamblea-2024" exact={true}>
                <ConvocatoriaPrimeraAsamblea2024 />
              </Route>
              <Route path="/manual-de-inhabilidades-fcpc-31" exact={true}>
                <Manual />
              </Route>
              <Route path="/resolucion-nro-sb-2023-02208" exact={true}>
                <Resolucion />
              </Route>
              <Route path="/oficio-nro.sb-dcfcpc-2024-0134-o" exact={true}>
                <Oficio />
              </Route>
              <Route path="/manual-de-funciones-fcpc" exact={true}>
                <ManualFunciones />
              </Route>
              <Route path="/codigo-de-etica-fcpc" exact={true}>
                <CodigoEtica />
              </Route>
              <Route path="/codigo-de-etica-fcpc" exact={true}>
                <CodigoEtica />
              </Route>
              <Route path="/manual-de-viaticos-fcpc" exact={true}>
                <ManualViaticos />
              </Route>
              <Route path="/manual-lavado-de-activos" exact={true}>
                <ManualLavadoActivos />
              </Route>
              <Route path="/manual-contable-fcpc" exact={true}>
                <ManualContable />
              </Route>
              <Route path="/manual-de-registro-de-cuenta-individual" exact={true}>
                <ManualRegistroCuentaIndividual />
              </Route>
              <Route path="/manual-para-la-administracion-del-riesgo" exact={true}>
                <ManualAdministracionRiesgo />
              </Route>
              <Route path="/manual-para-la-administracion-del-riesgo" exact={true}>
                <ManualAdministracionRiesgo />
              </Route>
              <Route path="/manual-de-prestaciones-fcpc" exact={true}>
                <ManualPrestaciones />
              </Route>
              <Route path="/manual-de-control-interno-fcpc" exact={true}>
                <ManualControlInterno />
              </Route>
              <Route path="/politica-de-actualizacion-de-manuales" exact={true}>
                <PoliticaActualizacionManuales />
              </Route>
              <Route path="/manual-de-compra-venta-de-titulos" exact={true}>
                <ManualCompraVentaTitulos />
              </Route>
              <Route path="/manual-de-inversiones-no-privativas" exact={true}>
                <ManualInversionesNoPrivativas />
              </Route>
              <Route path="/manual-de-inversiones-privativas" exact={true}>
                <ManualInversionesPrivativas />
              </Route>
              <Route path="/manual-para-la-devolucion-del-fondo" exact={true}>
                <ManualDevolucionFondo />
              </Route>
              <Route path="/manual-de-calificacion-y-castigo-de-cartera" exact={true}>
                <ManualCalificacion />
              </Route>
              <Route path="/manual-de-administracion-del-personal" exact={true}>
                <ManualAdministracionDelPersonal />
              </Route>
              <Route path="/manual-de-archivo-y-gestion-documental" exact={true}>
                <ManualArchivoYGEstionDocumental />
              </Route>
              <Route path="/politica-de-ejecucion-plan-estrategico" exact={true}>
                <PoliticaEjecucionPlanEstrategico />
              </Route>
              <Route path="/manual-de-gestion-de-asambleas" exact={true}>
                <ManualGestionAsambleas />
              </Route>
              <Route path="/manual-incidencias" exact={true}>
                <ManualIncidencias />
              </Route>
              <Route path="/manual-cambios-en-el-aplicativo" exact={true}>
                <ManualCambiosAplicativo />
              </Route>
              <Route path="/manual-cambios-en-el-aplicativo" exact={true}>
                <ManualCambiosAplicativo />
              </Route>
              <Route path="/manual-generacion-de-respaldos" exact={true}>
                <ManualGeneracionRespaldos />
              </Route>

              {/* SEGUNDA CONVOCATORIA */}

              <Route path="/convocatoria-segunda-asamblea-2024" exact={true}>
                <ConvocatoriaSegundaAsamblea2024 />
              </Route>

              {/* TERCERA CONVOCATORIA */}

              <Route path="/convocatoria-tercera-asamblea-2024" exact={true}>
                <ConvocatoriaTerceraAsamblea2024 />
              </Route>

              <Route path="/convocatoria-cuarta-asamblea-2024" exact={true}>
                <ConvocatoriaCuartaAsamblea2024 />
              </Route>

              {/* ConvocatoriaPrimeraAsamble2025 */}

              <Route path="/convocatoria-primera-asamblea-2025">
                <ConvocatoriaPrimeraAsamblea2025 />
              </Route>
              <Route path="/manual-de-inhabilidades-fcpc-32">
                <ManualInhabilidades />
              </Route>
              <Route path="/manual-de-funciones-fcpc-32">
                <ManualDeFunciones />
              </Route>
              <Route path="/codigo-de-etica-fcpc-32">
                <CodigoDeEtica />
              </Route>
              <Route path="/manual-de-viaticos-fcpc-32">
                <ManualdeViaticos />
              </Route>
              <Route path="/manual-de-lavado-de-activos-fcpc-32">
                <ManualDeLavadoDeActivos />
              </Route>
              <Route path="/manual-de-registro-contable-fcpc-32">
                <ManualDeRegistroContable />
              </Route>
              <Route path="/manual-de-registro-de-cuenta-individual-fcpc-32">
                <ManualDeRegistroContableIndividual />
              </Route>
              <Route path="/manual-de-inversiones-no-privativas-fcpc-32">
                <ManualdeInversionesNoPrivativas />
              </Route>
              <Route path="/manual-de-inversiones-privativas-fcpc-32">
                <ManualdeInversionesPrivativas />
              </Route>
              <Route path="/manual-para-la-administracion-y-gestion-del-riesgo-fcpc-32">
                <ManualParaLaAdministracionYGestionDelRiesgo />
              </Route>
              <Route path="/manual-de-prestaciones-fcpc-32">
                <ManualDePrestaciones />
              </Route>
              <Route path="/manual-de-control-interno-fcpc-32">
                <ManualDeControlInterno />
              </Route>
              <Route path="/politica-de-actualizacion-de-normativa-fcpc-32">
                <PoliticaDeActualizacionDeNormativa />
              </Route>
              <Route path="/manual-de-compra-venta-de-titulos-valores-fcpc-32">
                <ManualDeCompraVentaDeTitulosValores />
              </Route>
              <Route path="/manual-de-calificacion-y-castigo-de-cartera-fcpc-32">
                <ManualDeCalificacionYCastigoDeCartera />
              </Route>
              <Route path="/manual-de-administración-del-personal-del-fondo-fcpc-32">
                <ManualDeAdministracionDelPersonalDelFondo />
              </Route>
              <Route path="/manual-de-archivo-y-gestion-documental-fcpc-32">
                <ManualDeArchivoYGestionDocumental />
              </Route>
              <Route path="/politica-de-ejecucion-plan-estrategico-y-planificacion-operativa-anual-fcpc-32">
                <PoliticaDeEjecucion />
              </Route>
              <Route path="/manual-de-gestión-de-asambleas-fcpc-32">
                <ManualDeGestionDeAsambleas />
              </Route>
              <Route path="/manual-de-tecnologias-incidencias-fcpc-32">
                <ManualDeTecnologiasIncidencias />
              </Route>
              <Route path="/manual-de-tecnologias-cambios-en-el-aplicativo-contable-fcpc-32">
                <ManualDeTecnologiasCambiosAplicativoContable />
              </Route>
              <Route path="/manual-de-tecnologias-generacion-de-respaldos-fcpc-32">
                <ManualDeTecnologiasGeneracionDeRespaldos />
              </Route>
              <Route path="/procedimiento-para-tratamiento-de-quejas-y-sugerencias-fcpc-32">
                <ProcedimientoParaQuejas />
              </Route>

              <Route path="/manual-circular">
                <ManualCircular />
              </Route>

              <Route path="/manuales">
                <Manuales />
              </Route>

              <Route path="*">
                <div className={classes.notFound}>
                  <img src={NotFound} alt="404" width="400" style={{ margin: 20 }} />
                  <Typography variant="h3" color="primary" align="center" style={{ margin: 20 }}>
                    Página no encontrada...
                  </Typography>
                  <Button
                    variant="outlined"
                    color="primary"
                    style={{ margin: 20 }}
                    onClick={() => (window.location.href = '/  ')}
                  >
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
