import { Container, Grow, makeStyles, Typography } from '@material-ui/core';
import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Lines } from '../../components/Lines';

export const Conflictos = ({ setPaginaActive }) => {
  const classes = useStyles();
  useEffect(() => {
    setPaginaActive(1);
  }, [setPaginaActive]);

  return (
    <>
      <Helmet>
        <title>Conflictos de Intereses | fcpcGADMO</title>
      </Helmet>
      <Grow in={true} style={{ transformOrigin: '0 0 0' }} {...(true ? { timeout: 800 } : {})}>
        <Container maxWidth="md">
          <Typography variant="h3" color="initial" align="center" className={classes.title}>
            CONFLICTOS DE INTERESES
          </Typography>
          <Lines height={3} style={{ marginTop: 10, marginBottom: 10 }} />

          <Typography variant="h5" color="initial" className={classes.subTitle}>
            ARTÍCULO 19.- CONFLICTOS DE INTERESES
          </Typography>
          <Typography variant="body1" color="initial" component="p" align="justify" className={classes.parragraph}>
            El Fondo confía en el compromiso, buen criterio y buena fe de sus integrantes como elemento fundamental para el manejo de los asuntos profesionales y personales, sin perjuicio de los múltiples casos que en alguna circunstancia podrían considerarse potenciales conflictos de interés.
          </Typography>
          <Typography variant="body1" color="initial" component="p" align="justify" className={classes.parragraph}>
            En forma general se puede decir que existe un posible conflicto de interés cuando un empleado, su cónyuge o un miembro de su familia inmediata hasta el cuarto grado de consanguinidad y segundo de afinidad tiene interés directo o indirecto en cualquier transacción que involucre al Fondo, siendo este interés de tal magnitud o naturaleza que sus decisiones podrían ser afectadas por la relación cercana existente.
          </Typography>
          <Typography variant="body1" color="initial" component="p" align="justify" className={classes.parragraph}>
            A continuación, se detallas varias situaciones que pueden ocasionar o generadoras de conflictos de interés:
          </Typography>
          <Typography variant="body1" color="initial" component="p" align="justify" className={classes.parragraph}>
            Cuando el empleado toma decisiones o forma parte del cuerpo colegiado que toma decisiones relacionadas con la provisión de bienes o servicios, siendo éste socio o asesor de empresas que sean proveedoras del Fondo.
          </Typography>
          <Typography variant="body1" color="initial" component="p" align="justify" className={classes.parragraph}>
            Participar en el análisis y aprobación de operaciones de crédito para sí o para su cónyuge, conviviente o parientes dentro del cuarto grado de consanguinidad y segundo de afinidad.
          </Typography>
          <Typography variant="body1" color="initial" component="p" align="justify" className={classes.parragraph}>
            Participar en actividades que por interés personal o de terceros, impliquen competencia con el Fondo.
          </Typography>
          <Typography variant="body1" color="initial" component="p" align="justify" className={classes.parragraph}>
            Participar en las decisiones para adquirir o arrendar bienes muebles e inmuebles para el Fondo, cuando el empleado, su cónyuge o conviviente, parientes o empresas en las que éstos tengan participación en el capital social y sean proveedores.
          </Typography>
          <Typography variant="body1" color="initial" component="p" align="justify" className={classes.parragraph}>
            Crear a título personal empresas o negocios que desarrollen actividades similares a las que realiza el Fondo, ser socio, accionista o asesor de las mismas.
          </Typography>
          <Typography variant="body1" color="initial" component="p" align="justify" className={classes.parragraph}>
            Realizar o participar en negocios en los que la contraparte sea el Fondo y en los que el empleado tenga un interés personal o familiar.
          </Typography>
          <Typography variant="h5" color="initial" className={classes.subTitle}>
            Artículo 20.- RESOLUCIÓN DE CONFLICTOS DE INTERÉS
          </Typography>
          <Typography variant="body1" color="initial" component="p" align="justify" className={classes.parragraph}>
            Los empleados del Fondo que se encuentren frente a un posible conflicto de interés, procederán acorde con las disposiciones de carácter general que se encuentran en el Código de Gobierno Corporativo; y, de manera particular, a las siguientes:
          </Typography>
          <Typography variant="body1" color="initial" component="p" align="justify" className={classes.parragraph}>
            <span style={{ fontWeight: 'bold' }}> Representante Legal o Gerente:</span> Cuando éste se encuentre ante un posible caso de conflicto de intereses, deberá desistir de esa opción y optar por otras alternativas.
          </Typography>
          <Typography variant="body1" color="initial" component="p" align="justify" className={classes.parragraph}>
            <span style={{ fontWeight: 'bold' }}> Empleados:</span> En forma general, quien se encuentre ante un posible conflicto de interés y deba tomar una decisión, se abstendrá de hacerlo, informará las razones y elevará el caso al Representante Legal, quien podrá autorizarle a actuar o tomará la decisión por él.
          </Typography>
          <Typography variant="body1" color="initial" component="p" align="justify" className={classes.parragraph}>
            El Representante Legal del Fondo, cuando lo considere necesario, podrá solicitar el criterio del Comité de Ética del BIESS para que éste determine en cada caso concreto, la manera de administrar o solucionar el conflicto de interés.
          </Typography>
          <Typography variant="body1" color="initial" component="p" align="justify" className={classes.parragraph}>
            Con la finalidad de prevenir posibles conflictos de interés, derivados del parentesco entre los empleados del Fondo y los partícipes, éstos deberán informar al Representante Legal o Gerente del Fondo en el mismo momento en que éste hecho se produzca.
          </Typography>
          <Typography variant="body1" color="initial" component="p" align="justify" className={classes.parragraph}>
            Los empleados del Fondo no podrán ofrecer, dar o aceptar, en forma directa o indirecta regalos, favores, donaciones, invitaciones, viajes o pagos, que puedan afectar su independencia e influir en sus decisiones para facilitar operaciones que realicen en beneficio propio o de terceros.
          </Typography>
          <Typography variant="body1" color="initial" component="p" align="justify" className={classes.parragraph}>
            Se exceptúan los regalos o invitaciones institucionales o publicitarias de costo moderado y de tipo común, como lapiceros, libros, agendas y otros similares. Si se presume que el costo del obsequio es oneroso, estarán prohibidos de aceptarlos.
          </Typography>
          <Typography variant="body1" color="initial" component="p" align="justify" className={classes.parragraph}>
            Todos los casos de posibles conflictos de interés que se presenten en el Fondo serán reportados al Representante Legal del Fondo para su resolución, quien mantendrá un registro de los asuntos puestos en su conocimiento y la forma en que fueron resueltos, aspectos que servirán de base para la elaboración del informe de gestión anual sobre el cumplimiento de las disposiciones contenidas en el Código de Ética.
          </Typography>
        </Container>
      </Grow>
    </>
  );
};

const useStyles = makeStyles((theme) => ({
  title: {
    margin: theme.spacing(4),
    fontWeight: 'bold',
    [theme.breakpoints.down('sm')]: {
      fontSize: 32,
    },
  },
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
}));
