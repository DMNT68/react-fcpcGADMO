import React from 'react';
import { Container, Grow, makeStyles, Typography } from '@material-ui/core';
import { Lines } from '../../components/Lines';
import { Helmet } from 'react-helmet';

export const ConceptosJustificacion = () => {
	const classes = useStyles();

	return (
		<>
			<Helmet>
				<title>Conceptos y Justificación | fcpcGADMO</title>
			</Helmet>
			<Grow in={true} style={{ transformOrigin: '0 0 0' }} {...(true ? { timeout: 800 } : {})}>
				<Container maxWidth="md">
					<Typography variant="h4" color="initial" align="center" className={classes.title}>
						CONCEPTOS Y JUSTIFICACIÓN
					</Typography>
					<Lines height={3} style={{ marginTop: 10, marginBottom: 10 }} />
					<Typography
						variant="body1"
						color="initial"
						component="p"
						align="justify"
						className={classes.parragraph}
					>
						<span style={{ fontWeight: 'bold' }}>Ética.-</span> Es fundamental en la actuación del
						Representante Legal o Administrador y empleados del Fondo de Cesantía, para con los
						partícipes del{' '}
						<span style={{ fontWeight: 'bold' }}>
							EL FONDO DE CESANTÍA PRIVADO DE LOS EMPLEADOS, TRABAJADORES Y DOCENTES DEL GOBIERNO
							MUNICIPAL DE OTAVALO FCPC
						</span>
						, demostrar un comportamiento abierto, honesto, legal y ético en todas sus actuaciones,
						donde se deben observar los términos tales como “Bueno”, “Correcto”, “Obligatorio”,
						“Permitido”.
					</Typography>
					<Typography
						variant="body1"
						color="initial"
						component="p"
						align="justify"
						className={classes.parragraph}
					>
						<span style={{ fontWeight: 'bold' }}>Moral.-</span> La conducta o el comportamiento de
						la persona debe obedecer a criterios valorativos a cerca del bien y del mal, en otra
						perspectiva, se define como el conocimiento de lo que el ser humano debe de hacer o
						evitar para conservar la estabilidad social.
					</Typography>
					<Typography
						variant="body1"
						color="initial"
						component="p"
						align="justify"
						className={classes.parragraph}
					>
						<span style={{ fontWeight: 'bold' }}>Respeto.-</span> Que se debe tener a los partícipes
						del Fondo, al Representante Legal o administrador, empleados y proveedores naturales o
						jurídicos, para su normal desarrollo de las actividades con las determinadas opciones
						individuales.
					</Typography>
					<Typography
						variant="body1"
						color="initial"
						component="p"
						align="justify"
						className={classes.parragraph}
					>
						<span style={{ fontWeight: 'bold' }}>Lealtad.-</span> Cumplimiento de aquello que exigen
						las leyes de la fidelidad y el honor para mantener una eficiente administración de los
						recursos de los partícipes del Fondo, con la finalidad de no generar condiciones de
						vulnerabilidad en la jubilación y cesantía.
					</Typography>
					<Typography
						variant="body1"
						color="initial"
						component="p"
						align="justify"
						className={classes.parragraph}
					>
						<span style={{ fontWeight: 'bold' }}>Integridad.-</span> Mantener relaciones y
						comunicaciones con honestidad transparencia y respeto mutuos.
					</Typography>
					<Typography
						variant="body1"
						color="initial"
						component="p"
						align="justify"
						className={classes.parragraph}
					>
						<span style={{ fontWeight: 'bold' }}>Honestidad.-</span> Todos los actos de los
						partícipes del Fondo, del Representante Legal o Administrador y empleados deben estar
						alejados de la corrupción, el delito y la falta de ética.
					</Typography>
					<Typography
						variant="body1"
						color="initial"
						component="p"
						align="justify"
						className={classes.parragraph}
					>
						<span style={{ fontWeight: 'bold' }}>Autodisciplina.-</span> El o La Representante Legal
						y los empleados del Fondo, comprenden su papel y asumen la responsabilidad por su
						contribución a la sociedad y a los partícipes del Fondo. Tienen el encargo de hacer lo
						correcto y responsable todas sus actividades.
					</Typography>
					<Typography variant="h5" color="initial" className={classes.subTitle}>
						JUSTIFICACIÓN
					</Typography>
					<Typography
						variant="body1"
						color="initial"
						component="p"
						align="justify"
						className={classes.parragraph}
					>
						Para apoyar el cumplimiento de su estrategia y con el propósito de presentar una visión
						global de las directrices fundamentales en materia de ética; así como de fortalecer la
						cultura y filosofía del Fondo, la administración del Autodisciplina. - El o La
						Representante Legal y los empleados del{' '}
						<span style={{ fontWeight: 'bold' }}>
							EL FONDO DE CESANTÍA PRIVADO DE LOS EMPLEADOS, TRABAJADORES Y DOCENTES DEL GOBIERNO
							MUNICIPAL DE OTAVALO FCPC
						</span>
						, comprenden su papel y asumen la responsabilidad por su contribución a la sociedad y a
						los partícipes del Fondo. Tienen el encargo de hacer lo correcto y responsable todas sus
						actividades.” emite el presente Código de Ética, que proporciona un conjunto de
						principios y valores para regular la conducta de los funcionarios, empleados,
						colaboradores, partícipes, proveedores y demás personas naturales o jurídicas que tengan
						relación con el Fondo; tanto en el ejercicio de sus funciones, como en aquellas
						actividades privadas que afecten a la imagen y reputación del Fondo de la que forman
						parte.
					</Typography>
					<Typography
						variant="body1"
						color="initial"
						component="p"
						align="justify"
						className={classes.parragraph}
					>
						Son pilares fundamentales en la sociedad los valores y principios éticos, y la
						aplicación dentro de una institución contribuye al logro de objetivos y propicia la
						implementación de patrones de conducta de los individuos que la conforman, asegurando un
						ambiente de trabajo basado en la confianza, el respeto mutuo y la protección de la buena
						imagen del Fondo.
					</Typography>
					<Typography
						variant="body1"
						color="initial"
						component="p"
						align="justify"
						className={classes.parragraph}
					>
						Queda entendido, sin embargo, que la observancia de este Código no sustituye el buen
						criterio, la responsabilidad, el sentido común, la prudencia y el sentido ético quienes
						forman parte del Autodisciplina. - El o La Representante Legal y los empleados del Fondo
						comprenden su papel y asumen la responsabilidad por su contribución a la sociedad y a
						los partícipes del Fondo. Tienen el encargo de hacer lo correcto y responsable todas sus
						actividades.”.
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
