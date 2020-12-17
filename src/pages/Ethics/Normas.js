import React, { useEffect } from 'react';
import { Container, Grow, makeStyles, Typography } from '@material-ui/core';
import { Lines } from '../../components/Lines';
import { Helmet } from 'react-helmet';

export const Normas = ({ setPaginaActive }) => {
  const classes = useStyles();
  useEffect(() => {
    setPaginaActive(1);
  }, [setPaginaActive]);

  return (
    <>
      <Helmet>
        <title>Normas en el servicio a los partícipes | fcpcGADMO</title>
      </Helmet>
      <Grow in={true} style={{ transformOrigin: '0 0 0' }} {...(true ? { timeout: 800 } : {})}>
        <Container maxWidth="md">
          <Typography variant="h4" color="initial" align="center" className={classes.title}>
            NORMAS EN EL SERVICIO A LOS PARTÍCIPES
          </Typography>
          <Lines height={3} style={{ marginTop: 10, marginBottom: 10 }} />
          <Typography variant="h5" color="initial" className={classes.subTitle}>
            ARTÍCULO 7.- NORMAS EN EL SERVICIO A LOS PARTÍCIPES:
          </Typography>
          <Typography variant="body1" color="initial" component="p" align="justify" className={classes.parragraph}>
            La relación que los empleados tendrán con los partícipes debe estar enmarcada y conforme a la normativa vigente, resoluciones o regulaciones legales y con estricto cumplimiento a lo dispuesto en el Estatuto, reglamentos, Código de Ética y en el Código de Gobierno Corporativo, enmarcadas dentro de las siguientes especificaciones a su servicio:
          </Typography>
          <Typography variant="h6" color="initial" className={classes.subTitle}>
            1.- Calidez
          </Typography>
          <Typography variant="body1" color="initial" component="p" align="justify" className={classes.parragraph}>
            Todos los servicios en el Fondo serán proporcionados con calidez, diligencia y calidad, siempre buscando entregarles un buen servicio de calidad y de cualidad para el cumplimiento de los objetivos.
          </Typography>
          <Typography variant="body1" color="initial" component="p" align="justify" className={classes.parragraph}>
            La administración del Fondo tiene la obligación de promocionar y/o difundir a todos sus partícipes, sea a través de cualquier medio o mecanismo de difusión en Asamblea el presente Código, el cual será de cumplimiento obligatorio, por lo tanto, toda persona relacionada con el Fondo queda sujeta a sus disposiciones de manera inmediata.
          </Typography>
          <Typography variant="h6" color="initial" className={classes.subTitle}>
            2.- Riesgo
          </Typography>
          <Typography variant="body1" color="initial" component="p" align="justify" className={classes.parragraph}>
            La rentabilidad acreditada en cada una de las cuentas individuales se sustenta en realizar inversiones de la mayor rentabilidad y riesgo controlado.
          </Typography>
          <Typography variant="h6" color="initial" className={classes.subTitle}>
            3.- Control
          </Typography>
          <Typography variant="body1" color="initial" component="p" align="justify" className={classes.parragraph}>
            La estructura del Fondo permite ser flexibles y controlar al mismo tiempo la integridad del capital de los partícipes, mediante la autodisciplina, la existencia de procesos y sistemas de controles efectivos y oportunos.
          </Typography>
          <Typography variant="h6" color="initial" className={classes.subTitle}>
            4.- Misión y Visión institucional
          </Typography>
          <Typography variant="body1" color="initial" component="p" align="justify" className={classes.parragraph}>
            El Fondo se encuentra enfocado dentro de la misión y visión institucional, las mismas que se las definen de la siguiente manera:
          </Typography>
          <Typography variant="h5" color="initial" className={classes.subTitle}>
            ARTÍCULO 8.- MISIÓN:
          </Typography>
          <Typography variant="body1" color="initial" component="p" align="justify" className={classes.parragraph}>
            El Fondo, manejado por el BIESS, y supervisado por la Superintendencia de Bancos, administra con eficiencia los recursos de los partícipes, gestionando inversiones que aseguren rentabilidad, re capitalizando el mismo a través de la colocación de créditos quirografarios e hipotecarios, con riesgos mínimos manejando el cobro eficiente de la cartera ofreciendo servicios que van en favor de todos los partícipes y contribuyen a su desarrollo personal y familiar, asegurando las prestaciones y beneficios para las cuales fue creado este fondo.
          </Typography>
          <Typography variant="h5" color="initial" className={classes.subTitle}>
            ARTÍCULO 9.- VISIÓN:
          </Typography>
          <Typography variant="body1" color="initial" component="p" align="justify" className={classes.parragraph}>
            Dentro de un mediano y largo plazo se prevé que el <span style={{ fontWeight: 'bold' }}>FONDO DE CESANTÍA PRIVADO DE LOS EMPLEADOS, TRABAJADORES Y DOCENTES DEL GOBIERNO MUNICIPAL DE OTAVALO FCPC</span>, crezca de manera sustancial, con incremento de partícipes que serán directamente proporcionales al incremento de los ingresos para mejorar los tiempos de respuesta en la colocación de créditos con más y mejores servicios y productos, se haya recapitalizado a través del cobro eficiente de la cartera, mediante una eficiente y transparente gestión, con la finalidad de devolver los aportes y rendimientos causados a todos quienes cumplan con la condición de cesantes, tal como lo demanda la Normativa Legal Vigente, en las mejores condiciones asegurando rentabilidad y confianza.
          </Typography>
          <Typography variant="h5" color="initial" className={classes.subTitle}>
            ARTÍCULO 10.- RESPONSABILIDADES GENERALES
          </Typography>
          <Typography variant="body1" color="initial" component="p" align="justify" className={classes.parragraph}>
            El mandato del Representante Legal o Gerente frente a los partícipes del Fondo le genera la responsabilidad adicional de garantizar que el Código responda a los intereses de los partícipes, empleado y personas naturales o jurídicas que tengan actividades en torno a su desarrollo.
          </Typography>
          <Typography variant="body1" color="initial" component="p" align="justify" className={classes.parragraph}>
            Los partícipes, el Representante Legal o Gerente, los empleados del Fondo han desempeñado un importante papel en lo que se refiere a garantizar una conducta comercial ética y legal.
          </Typography>
          <Typography variant="body1" color="initial" component="p" align="justify" className={classes.parragraph}>
            1.- Las siguientes son responsabilidades generales a acatar:
          </Typography>
          <Typography variant="body1" color="initial" component="p" align="justify" className={classes.parragraph}>
            Comprender y cumplir este Código de Ética, así como cualquier política que aplique a los intereses del Fondo y a su área de trabajo.
          </Typography>
          <Typography variant="body1" color="initial" component="p" align="justify" className={classes.parragraph}>
            Respaldar activamente los comportamientos éticos intentando evitar violaciones del Código y obtener el asesoramiento correspondiente cuando haya dudas acerca de alguna cuestión de cumplimiento.
          </Typography>
          <Typography variant="body1" color="initial" component="p" align="justify" className={classes.parragraph}>
            Informar cualquier inquietud sobre posibles incumplimientos del Código o de políticas del Fondo.
          </Typography>
          <Typography variant="body1" color="initial" component="p" align="justify" className={classes.parragraph}>
            Cooperar cuando sea necesario en las investigaciones de posibles violaciones.
          </Typography>
          <Typography variant="body1" color="initial" component="p" align="justify" className={classes.parragraph}>
            2.- El Representante Legal o Administrador del Fondo además de las funciones establecidas en el Estatuto de la institución y debe:
          </Typography>
          <Typography variant="body1" color="initial" component="p" align="justify" className={classes.parragraph}>
            Crear un ambiente abierto y responder oportunamente y con seriedad a las inquietudes o preguntas que los empleados puedan plantear acerca de cuestiones relacionadas con la conducta ética.
          </Typography>
          <Typography variant="h5" color="initial" className={classes.subTitle}>
            ARTÍCULO 11.- RESPONSABILIDADES CON LOS PARTÍCIPES
          </Typography>
          <Typography variant="body1" color="initial" component="p" align="justify" className={classes.parragraph}>
            Los empleados del Fondo deben tener siempre buen trato y disponibilidad de atención para con los partícipes, beneficiarios o público en general que soliciten información relacionada con el Fondo, prestaciones y beneficios.
          </Typography>
          <Typography variant="body1" color="initial" component="p" align="justify" className={classes.parragraph}>
            Las solicitudes por requerimientos o reclamos de los partícipes serán atendidos de manera oportuna, conforme al estatuto, reglamentos y procedimientos establecidos en los indicadores del buen gobierno corporativo, el mismo que no podrá superar los plazos o términos establecidos; en caso de no haberlos, se aplicarán los determinados en la Ley, guardando confidencialidad y prudencia; los empleados del Fondo darán a conocer a los peticionarios los mecanismos para resolver sus requerimientos y la forma en que se los procesará hasta su resolución.
          </Typography>
          <Typography variant="h5" color="initial" className={classes.subTitle}>
            ARTÍCULO 12.- RELACIONES LABORALES
          </Typography>
          <Typography variant="body1" color="initial" component="p" align="justify" className={classes.parragraph}>
            Las relaciones laborales se las puede determinar dentro de las siguientes:
          </Typography>

          <Typography variant="body1" color="initial" component="p" align="justify" className={classes.parragraph}>
            Prácticas laborales justas e igualdad de trato: En cumplimiento de las obligaciones patronales y con fundamento en las normas establecidas en el Código de Trabajo, se aplicará a los empleados del Fondo, prácticas laborales justas, basadas en el talento y desempeño, ofreciendo a todas iguales oportunidades de trabajo y crecimiento profesional.
          </Typography>
          <Typography variant="body1" color="initial" component="p" align="justify" className={classes.parragraph}>
            Lealtad y cordialidad: Los empleados del Fondo deben permanente demostrar una actitud de cooperación para los usuarios internos y externos en el desarrollo de las actividades, teniendo presente que están obligados a observar las instrucciones que sus superiores les hayan impartido. Similares actitudes deberán mantener para con sus compañeros de trabajo.
          </Typography>
          <Typography variant="body1" color="initial" component="p" align="justify" className={classes.parragraph}>
            Forma de impartir las instrucciones: Las instrucciones verbales o escritas que se impartan a los empleados deben ser claras, precisas, y comprensibles.
          </Typography>
          <Typography variant="body1" color="initial" component="p" align="justify" className={classes.parragraph}>
            Información fidedigna y cooperación: Los empleados del Fondo cumplirán con el trabajo encomendado con responsabilidad y profesionalismo, informando de manera permanente sobre su avance a quienes tengan relación o interés directo y permitir su contribución.
          </Typography>
          <Typography variant="body1" color="initial" component="p" align="justify" className={classes.parragraph}>
            El empleado podrá ser sancionado con falta grave si incurriese en actitudes como:
          </Typography>
          <Typography variant="body1" color="initial" component="li" align="justify" className={classes.list}>
            Ocultar información con el propósito de obtener un beneficio personal;
          </Typography>
          <Typography variant="body1" color="initial" component="li" align="justify" className={classes.list}>
            Proporcionar información incorrecta;
          </Typography>
          <Typography variant="body1" color="initial" component="li" align="justify" className={classes.list}>
            Negarse a colaborar en proyectos internos;
          </Typography>
          <Typography variant="body1" color="initial" component="li" align="justify" className={classes.list}>
            Obstruir la realización de los trabajos o proyectos; y,
          </Typography>
          <Typography variant="body1" color="initial" component="li" align="justify" className={classes.list}>
            Las descritas en el Reglamento Interno de Trabajo.
          </Typography>
          <Typography variant="body1" color="initial" component="p" align="justify" className={classes.parragraph}>
            Ambiente de trabajo: El Fondo procurará crear un ambiente de trabajo de cordialidad, respeto, transparencia y cortesía, en el que predomine el espíritu de colaboración, trabajo en equipo e integración.
          </Typography>
          <Typography variant="h5" color="initial" className={classes.subTitle}>
            ARTÍCULO 13.- CON LOS ORGANISMOS DE CONTROL Y AUTORIDADES
          </Typography>
          <Typography variant="body1" color="initial" component="p" align="justify" className={classes.parragraph}>
            El vocero oficial del Fondo es el Representante Legal del Fondo, y además, se le concede atribuciones para el cumplimiento de sus actividades, las cuales se encuentran contempladas en la Codificación de Resoluciones Monetarias, Financieras, de valores y Seguros, emitidas por la Junta de Política y Regulación Monetaria y Financiera.
          </Typography>
          <Typography variant="body1" color="initial" component="p" align="justify" className={classes.parragraph}>
            El Representante Legal del Fondo o el que haya sido designado por el Gerente del BIESS deberá mantener una buena relación según corresponda con los organismos de control y con cualquier autoridad ya sea ésta persona natural o jurídica, siguiendo las normas de respeto y espíritu de colaboración y bajo los principios del presente Código.
          </Typography>
          <Typography variant="h5" color="initial" className={classes.subTitle}>
            ARTÍCULO 14.- CON LOS PROVEEDORES
          </Typography>
          <Typography variant="body1" color="initial" component="p" align="justify" className={classes.parragraph}>
            1.- El Fondo procederá con la selección, elección y contratación de los proveedores siempre de manera objetiva, técnica, transparentes y ética; los procesos de calificación del proveedor, la presentación de ofertas, cotización de precios, entre otros, deberán garantizar la mejor relación costo/beneficio.
          </Typography>
          <Typography variant="body1" color="initial" component="p" align="justify" className={classes.parragraph}>
            2.- Para la adquisición de bienes y servicios se deberá aplicar el principio de invertir con prudencia, pagando el justo precio para conseguir la más alta calidad que permita optimizar el destino de los recursos en beneficio de los partícipes.
          </Typography>
          <Typography variant="body1" color="initial" component="p" align="justify" className={classes.parragraph}>
            3.- Queda prohibido cualquier forma de ofrecimiento, insinuación o afirmación que sugiera que los empleados ejercerán algún tipo de influencia en la toma de decisiones relativas a la adquisición de bienes y servicios; durante el proceso de adquisición y cierre de negociaciones con proveedores, se deberá evitar cualquier situación que pueda generar conflicto de intereses, en el caso de encontrarse ante tal situación, se deberá reportar inmediatamente al Representante Legal.
          </Typography>
          <Typography variant="body1" color="initial" component="p" align="justify" className={classes.parragraph}>
            4.- La información relativa a las adquisiciones tendrá el carácter de privada y confidencial; por lo tanto, no podrá ser divulgada a otras personas que no sean las designadas y autorizadas por el Fondo.
          </Typography>
          <Typography variant="h5" color="initial" className={classes.subTitle}>
            ARTÍCULO 15.- COMPETENCIA LEAL
          </Typography>
          <Typography variant="body1" color="initial" component="p" align="justify" className={classes.parragraph}>
            El Representante Legal o Gerente, el personal, partícipes o terceras personas con las que el Fondo tenga actividades laborales no deberán involucrar al Fondo o involucrarse en actividades anti éticas, ilegales, o políticas para limitar la competencia.
          </Typography>
          <Typography variant="h5" color="initial" className={classes.subTitle}>
            ARTÍCULO 16.- DE LOS RECURSOS ECONÓMICOS Y MATERIALES
          </Typography>
          <Typography variant="body1" color="initial" component="p" align="justify" className={classes.parragraph}>
            1.- Los empleados y el Representante Legal o Gerente tienen la responsabilidad de proteger y conservar la propiedad física, la propiedad intelectual y los activos financieros del Fondo.
          </Typography>
          <Typography variant="body1" color="initial" component="p" align="justify" className={classes.parragraph}>
            Además, son los encargados de asegurar que el valor de los activos institucionales no se reduzca o se generen pérdidas por descuido, negligencia o por actividades delictivas.
          </Typography>
          <Typography variant="body1" color="initial" component="p" align="justify" className={classes.parragraph}>
            2.- Los bienes del Fondo serán utilizados exclusivamente para llevar adelante negocios de la organización, salvo que él o la Representante Legal autorice su uso para fines educativos.
          </Typography>
          <Typography variant="body1" color="initial" component="p" align="justify" className={classes.parragraph}>
            3.- Se prohíbe usar los activos de la Institución para obtener ganancias personales y en campañas políticas.
          </Typography>
          <Typography variant="body1" color="initial" component="p" align="justify" className={classes.parragraph}>
            4.- Los empleados del Fondo deben asumir que el trabajo que vienen desarrollado para la institución pertenece o es de propiedad de manera exclusiva e íntegra al Fondo.
          </Typography>
          <Typography variant="body1" color="initial" component="p" align="justify" className={classes.parragraph}>
            5.- Los cobros de dividendos y aportes de los partícipes por ningún concepto serán depositados en cuentas ajenas a la propiedad del Fondo.
          </Typography>
          <Typography variant="body1" color="initial" component="p" align="justify" className={classes.parragraph}>
            6.- Los aportes individuales provienen exclusivamente de descuentos realizados de las remuneraciones de los Partícipes en los roles de pago.
          </Typography>
          <Typography variant="body1" color="initial" component="p" align="justify" className={classes.parragraph}>
            7.- Toda información que el empleado conozcan por el desempeño de su actividad profesional sobre el Fondo, de los partícipes o de otros empleados está sujeta a secreto profesional y por lo tanto no podrá ser entregada a terceros, salvo que exista autorización de la institución, del partícipe o del empleado, o que en su defecto haya algún requerimiento de tipo legal.
          </Typography>
          <Typography variant="body1" color="initial" component="p" align="justify" className={classes.parragraph}>
            8.- Toda información sobre las actividades propias del Fondo realizadas, no podrá ser divulgada, proporcionada o suministrada a ninguna persona, toda vez que ésta es propia del Fondo, el levantamiento de la reserva sólo podrá ser por medio de orden de autoridad competente.
          </Typography>
          <Typography variant="body1" color="initial" component="p" align="justify" className={classes.parragraph}>
            9.- El principio de secreto profesional subsistirá aún luego de que la relación laboral con el o los empleados haya terminado; por lo tanto, la persona que cese en sus funciones no podrá llevarse consigo ningún tipo de información del Fondo, sea ésta escrita, en medio electrónico o magnético, ni aún la información que está almacenada en el computador que le ha sido asignado para cumplir sus funciones.
          </Typography>
          <Typography variant="body1" color="initial" component="p" align="justify" className={classes.parragraph}>
            10.- Los empleados cuando cesen en sus funciones se comprometen a devolver los valores, activos, enseres, documentación y material en general que se encontraban bajo custodia y responsabilidad y que son de propiedad del Fondo.
          </Typography>
          <Typography variant="body1" color="initial" component="p" align="justify" className={classes.parragraph}>
            11.- El destino de los fondos entregados a los partícipes en calidad de préstamos deben contener una cláusula de compromiso del buen uso del dinero y de los bienes comprados con dichos fondos sean lícitos.
          </Typography>
          <Typography variant="body1" color="initial" component="p" align="justify" className={classes.parragraph}>
            12.- Los pagos por jubilación, cesantía y otorgamiento de préstamos deben realizarse de tal forma que sean los que corresponden a los partícipes en su estricto derecho, previa la suscripción de los documentos e instrumentos que garanticen el cobro de dichas obligaciones en favor del Fondo.
          </Typography>
          <Typography variant="h5" color="initial" className={classes.subTitle}>
            ARTÍCULO 17.- TECNOLOGÍA DE INFORMACIÓN
          </Typography>
          <Typography variant="body1" color="initial" component="p" align="justify" className={classes.parragraph}>
            El Representante Legal y empleados deberán observar las siguientes disposiciones respecto al uso de los equipos y sistemas de información que estén a su cargo:
          </Typography>
          <Typography variant="body1" color="initial" component="p" align="justify" className={classes.parragraph}>
            Los equipos, programas y dispositivos de tecnología de información son de propiedad del Fondo y no podrán ser llevados fuera de sus instalaciones, salvo que exista la respectiva autorización por parte del Representante Legal.
          </Typography>
          <Typography variant="body1" color="initial" component="p" align="justify" className={classes.parragraph}>
            El Fondo entregará a sus empleados códigos de acceso (claves), las cuales son personales e intransferibles, deben mantenerse en forma reservada y serán utilizados exclusivamente por los empleados a quienes fueron entregadas para el cumplimiento en el desarrollo de sus funciones.
          </Typography>
          <Typography variant="body1" color="initial" component="p" align="justify" className={classes.parragraph}>
            Los empleados del Fondo son responsables por la seguridad de la información que se encuentra disponible en los equipos asignados; por lo tanto, cuando el empleado no esté utilizando su equipo deberá bloquear el acceso.
          </Typography>
          <Typography variant="body1" color="initial" component="p" align="justify" className={classes.parragraph}>
            No se podrá utilizar los servicios de comunicación, incluyendo el correo electrónico para enviar mensajes de tipo político ni de otro tipo diferente a las actividades propias del Fondo.
          </Typography>
          <Typography variant="body1" color="initial" component="p" align="justify" className={classes.parragraph}>
            Los empleados del Fondo, no podrán utilizar los equipos de la institución en beneficio propio, en actividades personales, para beneficio de terceros o en aquellas consideradas ilegales, ilícitas o inmorales.
          </Typography>
          <Typography variant="body1" color="initial" component="p" align="justify" className={classes.parragraph}>
            Los programas instalados en los equipos del Fondo no podrán ser copiados por los empleados y tampoco podrán instalar programas no autorizados.
          </Typography>
          <Typography variant="body1" color="initial" component="p" align="justify" className={classes.parragraph}>
            El Fondo cuenta con Internet proporcionado por el ente patronal, el cual será utilizado solamente por el personal autorizado en temas propios de sus funciones; está prohibido utilizar esta herramienta ingresando a páginas de deportes, juegos, pornografía u otros de origen dudoso.
          </Typography>
          <Typography variant="body1" color="initial" component="p" align="justify" className={classes.parragraph}>
            El o La Representante Legal del Fondo podrá acceder a información almacenada por los empleados en equipos u otros medios de almacenamiento de información que sean de propiedad del Fondo, aún sin consentimiento o aviso previo al empleado.
          </Typography>
        </Container>
      </Grow>
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
  containerTotal: {
    height: '100vh',
  },
}));
