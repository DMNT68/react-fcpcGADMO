import { Container, Grow, makeStyles, Typography } from '@material-ui/core';
import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Organigrama from '../../assets/svg/organigrama.svg';
import { Lines } from '../../components/Lines';

export const Planificacion = ({ setPaginaActive }) => {
  const classes = useStyles();
  useEffect(() => {
    setPaginaActive(1);
  }, [setPaginaActive]);

  return (
    <>
      <Helmet>
        <title>Planificación Estrategica | fcpcGADMO</title>
      </Helmet>
      <Container maxWidth="md">
        <Grow in={true} style={{ transformOrigin: '0 0 0' }} {...(true ? { timeout: 800 } : {})}>
          <div>
            <Typography variant="h4" color="initial" align="center" className={classes.title}>
              PLANIFICACIÓN ESTRATÉGICA 2021 – 2025
            </Typography>
            <Lines height={3} style={{ marginTop: 10, marginBottom: 10 }} />
            <Typography variant="h5" color="initial" className={classes.subTitle}>
              1. GENERACIÓN DE VALOR
            </Typography>
            <Typography variant="h6" color="initial" className={classes.subTitle}>
              Conocer a dónde vamos.
            </Typography>
            <Typography variant="body1" color="initial" component="p" align="justify" className={classes.parragraph}>
              El fondo se encuentra encaminado a dar asegurabilidad al personal cesante de los entes patronales, por cualquier causa, tal como renuncia, despido o jubilación; por cuanto es importante mantener una planificación anual de jubilaciones, en coordinación con las unidades de talento humano de las instituciones para mantener disponibilidad inmediata de efectivo para pago de prestaciones.
            </Typography>
            <Typography variant="body1" color="initial" component="p" align="justify" className={classes.parragraph}>
              Así también mantener índices de capital que respalden transacciones de inversiones privativas y no privativas.
            </Typography>
            <Typography variant="h6" color="initial" className={classes.subTitle}>
              Encaminar esfuerzos.
            </Typography>
            <Typography variant="body1" color="initial" component="p" align="justify" className={classes.parragraph}>
              La estructura del Fondo se compone de 2 personas, la administradora y la persona operativa que atiende a los partícipes en temas de crédito y adicional tiene la función de contadora, por cuanto la carga laboral es elevada, aunque se ha generado un cambio operativo drástico en la cual el sistema operativo y los tiempos de respuesta son inmediatos.
            </Typography>
            <Typography variant="body1" color="initial" component="p" align="justify" className={classes.parragraph}>
              Se trata de minimizar esfuerzos y maximizar eficiencia y eficacia en el cumplimiento de las tareas, través de la digitalización de procesos que reduce significativamente los márgenes de error y permite dar información clave para la toma de decisiones, de manera que los tiempos de respuesta son mínimos.
            </Typography>
            <Typography variant="h6" color="initial" className={classes.subTitle}>
              Evaluar alternativas.
            </Typography>
            <Typography variant="body1" color="initial" component="p" align="justify" className={classes.parragraph}>
              Se trata de minimizar esfuerzos y maximizar eficiencia y eficacia en el cumplimiento de las tareas, través de la digitalización de procesos que reduce significativamente los márgenes de error y permite dar información clave para la toma de decisiones, de manera que los tiempos de respuesta son mínimos.
            </Typography>
            <Typography variant="h5" color="initial" className={classes.subTitle}>
              OBJETIVO GENERAL
            </Typography>
            <Typography variant="body1" color="initial" component="p" align="justify" className={classes.parragraph}>
              El Objetivo general de la administración del Fondo es dar sostenibilidad financiera y operativa en el tiempo para asegurar a los partícipes las prestaciones, rendimientos y beneficios adicionales que son los créditos a tasas de interés competitivas en el mercado financiero, cumpliendo con las normativas que rigen al Fondo desde la Constitución hasta lo determinado en estatutos por decisión de la Asamblea General de Partícipes.
            </Typography>
            <Typography variant="h5" color="initial" className={classes.subTitle}>
              OBJETIVOS ESPECÍFICOS
            </Typography>
            <Typography variant="body1" color="initial" component="li" align="justify" className={classes.list}>
              Mantener índices financieros estables que permitan sostenibilidad del Fondo en el tiempo y que a su vez permitan responder de forma inmediata a los requerimientos de los partícipes, tales como pago de prestaciones y otorgamiento de créditos.
            </Typography>
            <Typography variant="body1" color="initial" component="li" align="justify" className={classes.list}>
              Atender de forma eficiente y eficaz los procesos operativos del Fondo con respuestas inmediatas y con márgenes mínimos de error.
            </Typography>
            <Typography variant="body1" color="initial" component="li" align="justify" className={classes.list}>
              Incrementar ingresos y minimizar gastos, para generar un margen elevado de rendimientos, de forma que el Fondo se encuentre en condiciones de competir en el mercado financiero.
            </Typography>
            <Typography variant="h5" color="initial" className={classes.subTitle}>
              BENEFICIOS
            </Typography>
            <Typography variant="body1" color="initial" component="li" align="justify" className={classes.list}>
              Interés: En comparación al mercado financiero es bajo y señalar que esos mismos intereses pagados se convierten en rendimientos que al final del año serán distribuidos en la cuenta individual.
            </Typography>
            <Typography variant="body1" color="initial" component="li" align="justify" className={classes.list}>
              Beneficio del ahorro: El aporte realizado de forma mensual a través de roles de pago, a largo plazo se convierte en un respaldo financiero que acompaña a la liquidación por jubilación o a su vez como apoyo de cesantía que cubrirá eventualidades en caso de cesar en funciones en el ente patronal.
            </Typography>
            <Typography variant="body1" color="initial" component="li" align="justify" className={classes.list}>
              Seguridad: En virtud de ser fondo cerrado se entiende que se minimiza el riesgo de pérdida, ya que los descuentos de aportes y créditos se los realiza a través de la unidad de talento humano y se trasfiere directamente al Fondo, evitando que la liquidez del rol se desvíe a otros pagos, además en caso de contar con una persona cesante se puede realizar el cruce de cuentas de la deuda con la cuenta individual y en caso de no cubrir los valores adeudados hay la posibilidad de descontar de la liquidación patronal, por cuanto los riesgos de pérdida son mínimos
            </Typography>
            <Typography variant="h5" color="initial" className={classes.subTitle}>
              2. ORGANIGRAMA
            </Typography>
            <div className={classes.organigrama}>
              <img src={Organigrama} alt="Organigrama" className={classes.img} />
            </div>
            <Typography variant="h5" color="initial" className={classes.subTitle}>
              2.1 POLITICAS
            </Typography>
            <Typography variant="h6" color="initial" className={classes.subTitle}>
              Consistencia con las leyes nacionales
            </Typography>
            <Typography variant="h6" color="initial" className={classes.subTitle}>
              Leyes Nacionales
            </Typography>
            <Typography variant="body1" color="initial" component="p" align="justify" className={classes.parragraph}>
              Artículo 368 de la Constitución de la República del Ecuador establece que el sistema de seguridad social es público y universal, no podrá privatizarse y atenderá las necesidades contingentes de la población; que la protección de las contingencias se hará efectiva a través del seguro universal obligatorio y de sus regímenes especiales; y, que el sistema se guiará por los principios del sistema nacional de inclusión y equidad social y por los de obligatoriedad, suficiencia, integración, solidaridad y subsidiaridad.
            </Typography>
            <Typography variant="body1" color="initial" component="p" align="justify" className={classes.parragraph}>
              Artículo 13 del Código Orgánico Monetario y Financiero, se crea la Junta de Política y Regulación Monetaria y Financiera como parte de la Función Ejecutiva, responsable de la formulación de las políticas públicas y la regulación y supervisión monetaria, crediticia, cambiaria, financiera, de seguros y valores; y se determina su conformación.
            </Typography>
            <Typography variant="body1" color="initial" component="p" align="justify" className={classes.parragraph}>
              Artículo 14, numeral 41 del precitado Código, establece como una de las funciones de la Junta de Política y Regulación Monetaria y Financiera, regular la constitución, organización, funcionamiento, liquidación y registro de los fondos complementarios previsionales y sus inversiones, así como los requisitos mínimos para ejercer el cargo de administradores.
            </Typography>
            <Typography variant="h6" color="initial" className={classes.subTitle}>
              Leyes Nacionales
            </Typography>
            <Typography variant="body1" color="initial" component="p" align="justify" className={classes.parragraph}>
              Inciso primero del artículo 220 de la Ley de Seguridad Social, dispone que los afiliados al Instituto Ecuatoriano de Seguridad Social, independientemente de su nivel de ingresos, podrán efectuar ahorros voluntarios para mejorar la cuantía o las condiciones de las prestaciones correspondientes al seguro general obligatorio o a proteger contingencias de seguridad no cubiertas por éste;
            </Typography>
            <Typography variant="body1" color="initial" component="p" align="justify" className={classes.parragraph}>
              Inciso primero del artículo 222 de la ley ibídem, establece que los fondos complementarios podrán recibir depósitos convenidos en importes de carácter único o periódico que cualquier persona natural o jurídica convenga con el afiliado en depositar en la respectiva cuenta de ahorro individual voluntario;
            </Typography>
            <Typography variant="body1" color="initial" component="p" align="justify" className={classes.parragraph}>
              Artículo 224 de la Ley de Seguridad Social señala que la reglamentación, sin dejar de considerar sus fines, podrá determinar un régimen de administración más flexible, de diferente estructura, mayor diversificación y disponibilidad para los ahorros voluntarios, que el establecido por la ley para los ahorros obligatorios;
            </Typography>
            <Typography variant="body1" color="initial" component="p" align="justify" className={classes.parragraph}>
              Suplemento del Registro Oficial No. 379 de 20 de noviembre de 2014, se publicó la Ley Reformatoria a la Ley de Seguridad Social y a la Ley del Banco del Instituto Ecuatoriano de Seguridad Social para la administración de los Fondos Complementarios Previsionales Cerrados;
            </Typography>
            <Typography variant="body1" color="initial" component="p" align="justify" className={classes.parragraph}>
              Tercer inciso del artículo 220 reformado de la Ley de Seguridad Social, dispone que los Fondos Complementarios Previsionales Cerrados que en su origen o bajo cualquier modalidad hayan recibido aportes estatales, pasarán a ser administrados por el Instituto Ecuatoriano de Seguridad Social a través de su Banco, mediante cuentas individuales. Su gestión se sujetará a los principios de seguridad, transparencia, solvencia, eficiencia, rentabilidad y a las regulaciones y controles de los órganos competentes.
            </Typography>
            <Typography variant="body1" color="initial" component="p" align="justify" className={classes.parragraph}>
              Artículo 2 reformado de la Ley del Banco del Instituto Ecuatoriano de Seguridad Social, establece que el objeto social de dicho Banco será la prestación de servicios financieros bajo criterios de banca de inversión, para la administración de los fondos previsionales públicos del Instituto Ecuatoriano de Seguridad Social IESS; los Fondos Complementarios Previsionales Cerrados; y, la prestación de servicios financieros, para atender los requerimientos de sus afiliados activos y jubilados;
            </Typography>
            <Typography variant="h6" color="initial" className={classes.subTitle}>
              Normativa de Fondos:
            </Typography>
            <Typography variant="body1" color="initial" component="li" align="justify" className={classes.list}>
              Resolución 280-2016- F
            </Typography>
            <Typography variant="body1" color="initial" component="li" align="justify" className={classes.list}>
              Codificación de las Resoluciones de la Junta de Política Monetaria y Financiera
            </Typography>
            <Typography variant="h6" color="initial" className={classes.subTitle}>
              Normativa Interna
            </Typography>
            <Typography variant="h6" color="initial" className={classes.subTitle}>
              Aprobación del Estatuto y Registro en Superintendencia de Bancos:
            </Typography>
            <Typography variant="body1" color="initial" component="p" align="justify" className={classes.parragraph}>
              Resolución Nro. SBS-2007-845 de 22 de octubre del 2007, se aprobó el estatuto del Fondo Complementario Previsional Cerrado de Jubilación Privada de Funcionarios y Empleados Amparados por la Ley de Servicio Civil y Carrera Administrativa a Nombramiento del Gobierno Provincial de Imbabura y se dispuso su registro en este organismo de control
            </Typography>
            <Typography variant="h6" color="initial" className={classes.subTitle}>
              Aprobación de reformas al estatuto en administración BIESS:
            </Typography>
            <Typography variant="body1" color="initial" component="p" align="justify" className={classes.parragraph}>
              La Asamblea General Extraordinaria de Partícipes del FCPC DE JUBILACION PRIVADA DE LOS SERVIDORES DE CARRERA DEL GPI, celebrada el 13 de enero del 2017, aprobó las reformas al estatuto.
            </Typography>
            <Typography variant="body1" color="initial" component="p" align="justify" className={classes.parragraph}>
              La Intendencia Nacional de Seguridad Social en memorandos Nro. SB-INSS-2017-0250-M; SB-INSS-2017- 0338-M y SB-INSS-2017-0366-M, de 16 de junio, 8 y 29 de agosto de 2017, respectivamente ha emitido informe técnico favorable respecto del proyecto de reformas al estatuto del FCPC DE JUBILACION PRIVADA DE LOS SERVIDORES DE CARRERA DEL GPI.
            </Typography>
            <Typography variant="body1" color="initial" component="p" align="justify" className={classes.parragraph}>
              Con Memorando No. SB-DTL-2017-1515-M, de fecha 13 de diciembre del 2017, se emitió informe legal favorable sobre el proyecto de reformas al estatuto del FCPC DE JUBILACION PRIVADA DE LOS SERVIDORES DE CARRERA DEL GPI
            </Typography>
            <Typography variant="body1" color="initial" component="p" align="justify" className={classes.parragraph}>
              Se emite la Resolución Nro. SB-DTL-2017-1080, de fecha 20 de diciembre del 2017 en la cual se aprueban las reformas al Estatuto del FCPC DE JUBILACION PRIVADA DE LOS SERVIDORES DE CARRERA DEL GPI.
            </Typography>
            <Typography variant="h6" color="initial" className={classes.subTitle}>
              Manuales y Reglamentos
            </Typography>
            <Typography variant="body1" color="initial" component="p" align="justify" className={classes.parragraph}>
              El fondo dentro de su normativa interna y para asegurar un correcto manejo administrativo, mantiene los siguientes manuales y reglamentos aprobados por Asamblea General de Partícipes:
            </Typography>
            <Typography variant="body1" color="initial" component="li" align="justify" className={classes.list}>
              Manual de créditos
            </Typography>
            <Typography variant="body1" color="initial" component="li" align="justify" className={classes.list}>
              Manual de ética y buen gobierno corporativo
            </Typography>
            <Typography variant="body1" color="initial" component="li" align="justify" className={classes.list}>
              Manual de Inversiones
            </Typography>
            <Typography variant="body1" color="initial" component="li" align="justify" className={classes.list}>
              Manual de Procedimiento Contable
            </Typography>
            <Typography variant="body1" color="initial" component="li" align="justify" className={classes.list}>
              Manual de Prevención de lavado de activos
            </Typography>
            <Typography variant="body1" color="initial" component="li" align="justify" className={classes.list}>
              Manual de Organización y Funciones
            </Typography>
            <Typography variant="body1" color="initial" component="li" align="justify" className={classes.list}>
              Reglamento de viáticos
            </Typography>
            <Typography variant="body1" color="initial" component="li" align="justify" className={classes.list}>
              Reglamento Interno de Trabajo
            </Typography>
            <Typography variant="h6" color="initial" className={classes.subTitle}>
              Objetivos ambiciosos y factibles
            </Typography>
            <Typography variant="body1" color="initial" component="li" align="justify" className={classes.list}>
              Lograr que los partícipes comprendan los beneficios de incrementar su aporte personal
            </Typography>
            <Typography variant="body1" color="initial" component="li" align="justify" className={classes.list}>
              Incrementar el número de partícipes activos en el Fondo
            </Typography>
            <Typography variant="body1" color="initial" component="li" align="justify" className={classes.list}>
              Reducir gastos
            </Typography>
            <Typography variant="h6" color="initial" className={classes.subTitle}>
              Visión integral y compartida
            </Typography>
            <Typography variant="body1" color="initial" component="p" align="justify" className={classes.parragraph}>
              Ser una institución que compita en el mercado financiero por los beneficios y servicios que brinda, y se convierta en la primera opción para ahorro y créditos de los empleados del ente patronal.
            </Typography>
            <Typography variant="h6" color="initial" className={classes.subTitle}>
              Responsabilidades actuales del Fondo
            </Typography>
            <Typography variant="body1" color="initial" component="li" align="justify" className={classes.list}>
              Administrar de forma eficiente y responsable los recursos económicos de los partícipes, generando rentabilidad y seguridad en el tiempo
            </Typography>
            <Typography variant="body1" color="initial" component="li" align="justify" className={classes.list}>
              Mantener índices de liquidez idóneos para solventar las necesidades inmediatas de los partícipes
            </Typography>
            <Typography variant="body1" color="initial" component="li" align="justify" className={classes.list}>
              Cancelar de forma inmediata la prestación de cesantía de los partícipes que por cualquier causa dejaren de pertenecer al ente patronal.
            </Typography>
          </div>
        </Grow>
      </Container>
    </>
  );
};

const useStyles = makeStyles((theme) => ({
  title: { margin: theme.spacing(4), fontWeight: 'bold' },
  subTitle: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
    fontWeight: 'bold',
  },
  parragraph: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
    // marginLeft: theme.spacing(4),
  },
  list: {
    marginLeft: theme.spacing(4),
    [theme.breakpoints.down('sm')]: {
      marginLeft: theme.spacing(2),
    },
  },
  organigrama: {
    padding: '10px auto 10px auto',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  img: {
    [theme.breakpoints.down('sm')]: {
      width: 350,
    },
    width: 600,
  },
}));
