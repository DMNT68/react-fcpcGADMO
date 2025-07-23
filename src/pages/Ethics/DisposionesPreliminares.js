import React from 'react';
import { Container, Grow, makeStyles, Typography } from '@material-ui/core';
import { Lines } from '../../components/Lines';
import { Helmet } from 'react-helmet';

export const DisposionesPreliminares = () => {
	const classes = useStyles();

	return (
		<>
			<Helmet>
				<title>Disposiciones Preliminares | fcpcGADMO</title>
			</Helmet>
			<Grow in={true} style={{ transformOrigin: '0 0 0' }} {...(true ? { timeout: 800 } : {})}>
				<Container maxWidth="md">
					<Typography variant="h4" color="initial" align="center" className={classes.title}>
						DISPOSIONES PRELIMINARES
					</Typography>
					<Lines height={3} style={{ marginTop: 10, marginBottom: 10 }} />
					<Typography variant="h5" color="initial" className={classes.subTitle}>
						ARTÍCULO 1.- OBJETIVO
					</Typography>
					<Typography
						variant="body1"
						color="initial"
						component="p"
						align="justify"
						className={classes.parragraph}
					>
						El objetivo del presente Código será la aplicación de las políticas y procedimientos de
						manera correcta para su ejecución, en beneficio de los partícipes y sus beneficiarios en
						general.
					</Typography>
					<Typography variant="h5" color="initial" className={classes.subTitle}>
						ARTÍCULO 2.- ALCANCE
					</Typography>
					<Typography
						variant="body1"
						color="initial"
						component="p"
						align="justify"
						className={classes.parragraph}
					>
						El presente Código de Ética orienta la conducta de funcionarios, empleados, partícipes y
						proveedores de bienes y servicios; por lo tanto, toda persona relacionada con el Fondo,
						queda sujeta a sus disposiciones; las cuales, se fundamentan en los principios básicos
						de responsabilidad social que rigen la gestión del Fondo como son: cumplimiento de la
						ley, comportamiento ético, respeto a las preferencias de los grupos de interés,
						rendición de cuentas y transparencia.
					</Typography>
					<Typography
						variant="body1"
						color="initial"
						component="p"
						align="justify"
						className={classes.parragraph}
					>
						La administración del Fondo tiene la obligación de promocionar y/o difundir a todos sus
						partícipes, sea a través de cualquier medio o mecanismo de difusión en Asamblea el
						presente Código, el cual será de cumplimiento obligatorio, por lo tanto, toda persona
						relacionada con el Fondo queda sujeta a sus disposiciones de manera inmediata.
					</Typography>
					<Typography variant="h5" color="initial" className={classes.subTitle}>
						ARTÍCULO 3.- PRINCIPIOS Y VALORES
					</Typography>
					<Typography
						variant="body1"
						color="initial"
						component="p"
						align="justify"
						className={classes.parragraph}
					>
						Los principios y valores éticos que fortalezcan las relaciones entre personas
						involucradas en la gestión del Fondo como son los funcionarios, empleados, partícipes y
						proveedores que ayudan a definir la cultura de la organización la misma que debe estar
						enmarcada dentro de la:
					</Typography>
					<Typography
						variant="body1"
						color="initial"
						component="li"
						align="justify"
						className={classes.list}
					>
						Ética
					</Typography>
					<Typography
						variant="body1"
						color="initial"
						component="li"
						align="justify"
						className={classes.list}
					>
						Respeto
					</Typography>
					<Typography
						variant="body1"
						color="initial"
						component="li"
						align="justify"
						className={classes.list}
					>
						Lealtad
					</Typography>
					<Typography
						variant="body1"
						color="initial"
						component="li"
						align="justify"
						className={classes.list}
					>
						Integridad
					</Typography>
					<Typography
						variant="body1"
						color="initial"
						component="li"
						align="justify"
						className={classes.list}
					>
						Responsabilidad
					</Typography>
					<Typography
						variant="body1"
						color="initial"
						component="li"
						align="justify"
						className={classes.list}
					>
						Compromiso
					</Typography>
					<Typography
						variant="body1"
						color="initial"
						component="li"
						align="justify"
						className={classes.list}
					>
						Honestidad
					</Typography>
					<Typography
						variant="body1"
						color="initial"
						component="li"
						align="justify"
						className={classes.list}
					>
						Autodisciplina
					</Typography>
					<Typography variant="h5" color="initial" className={classes.subTitle}>
						ARTÍCULO 4.- PRINCIPIOS BÁSICOS DE RESPONSABILIDAD SOCIAL:
					</Typography>
					<Typography
						variant="body1"
						color="initial"
						component="p"
						align="justify"
						className={classes.parragraph}
					>
						Este código contiene valores y principios que afianzan las relaciones con las personas
						naturales o jurídicas, privadas, públicas o semipúblicas, los partícipes del Fondo,
						empleados, proveedores y la sociedad, con el fin de promover los principios de
						responsabilidad social, tales como: 1. cumplimiento de la ley, 2. respeto a las
						preferencias de los grupos de interés; 3. transparencia; y, 4. rendición de cuentas.
					</Typography>
					<Typography
						variant="body1"
						color="initial"
						component="p"
						align="justify"
						className={classes.parragraph}
					>
						Es obligatorio el cumplimiento del Estatuto del{' '}
						<span style={{ fontWeight: 'bold' }}>
							FONDO DE CESANTIA PRIVADO DE LOS EMPLEADOS, TRABAJADORES Y DOCENTES DEL GOBIERNO
							MUNICIPAL DE OTAVALO FCPC
						</span>
						, sus reglamentos, códigos, políticas y resoluciones de la Junta de Política y
						Regulación Monetaria y Financiera, la Superintendencia de Bancos, las disposiciones del
						BIESS y demás leyes que regulen a los Fondos Complementarios Previsionales Cerrados.
					</Typography>
					<Typography
						variant="body1"
						color="initial"
						component="p"
						align="justify"
						className={classes.parragraph}
					>
						Es obligatorio el cumplimiento de las obligaciones fiscales, relaciones laborales,
						transparencia, exactitud de la información y la defensa de los derechos de los
						partícipes, El Representante Legal o Gerente, partícipes y empleados del Fondo
					</Typography>
					<Typography
						variant="body1"
						color="initial"
						component="p"
						align="justify"
						className={classes.parragraph}
					>
						Es obligatorio el cumplimiento del Estatuto del Fondo sus reglamentos, códigos,
						políticas y resoluciones de la Junta de Política y Regulación Monetaria y Financiera, la
						Superintendencia de Bancos, las disposiciones del BIESS y demás leyes que regulen a los
						Fondos Complementarios Previsionales Cerrados deberán cumplir con la Constitución de la
						República del Ecuador.
					</Typography>
					<Typography
						variant="body1"
						color="initial"
						component="p"
						align="justify"
						className={classes.parragraph}
					>
						Se reconoce que comprender, interpretar y aplicar leyes a determinadas situaciones a
						menudo exigirá recurrir al apoyo jurídico de profesionales capacitados y calificados
						para que brinden orientación e indicaciones con respecto a cuestiones legales.
					</Typography>
					<Typography
						variant="body1"
						color="initial"
						component="p"
						align="justify"
						className={classes.parragraph}
					>
						Respeto a las preferencias de los grupos de interés.
					</Typography>
					<Typography
						variant="body1"
						color="initial"
						component="p"
						align="justify"
						className={classes.parragraph}
					>
						En este aspecto tanto para la Representante Legal o Gerente como los empleados es
						obligatorio el cumplimiento del Estatuto del Fondo, sus reglamentos, códigos, políticas
						y resoluciones de la Junta de Política y Regulación Monetaria y Financiera, la
						Superintendencia de Bancos, las disposiciones del BIESS y demás leyes que regulen a los
						Fondos Complementarios Previsionales Cerrados deben observar los siguientes principios:
					</Typography>
					<Typography
						variant="body1"
						color="initial"
						component="p"
						align="justify"
						className={classes.parragraph}
					>
						Respetar y valorar las identidades, etnias y diferencias de las personas. Se prohíben
						actos de hostigamiento y discriminación basados en la raza, credo, sexo, capacidades
						diferentes, orientación sexual, color, género, nacionalidad, o cualquier otra razón
						política, ideológica, social y filosófica, guardando siempre una conducta honesta y
						mesurada.
					</Typography>
					<Typography
						variant="body1"
						color="initial"
						component="p"
						align="justify"
						className={classes.parragraph}
					>
						Se prohíbe el acoso: verbal (comentarios denigrantes, burlas, amenazas o difamaciones),
						físico (contacto innecesario u ofensivo); visual (difusión de imágenes, gestos, mensajes
						denigrantes u ofensivos), o sexual (insinuaciones o requerimiento de favores).
					</Typography>
					<Typography
						variant="body1"
						color="initial"
						component="p"
						align="justify"
						className={classes.parragraph}
					>
						Se prohíbe la asociación con fines ilícitos de cualquier clase o naturaleza.
						Proporcionar un trato digno a las personas y respetar su libertad y privacidad.
						Reclutar, promover y compensar a las personas en base a sus méritos.
					</Typography>
					<Typography variant="h5" color="initial" className={classes.subTitle}>
						ARTÍCULO 5.- TRANSPARENCIA
					</Typography>
					<Typography
						variant="body1"
						color="initial"
						component="p"
						align="justify"
						className={classes.parragraph}
					>
						El Representante Legal o Gerente cumplirán cabalmente lo dispuesto por la Junta de
						Regulación Monetaria y Financiera; esto es informar a los partícipes del Fondo dentro de
						los plazos establecidos en forma completa y veraz, acerca de su gestión financiera,
						resultados obtenidos, productos, servicio, el costo de los mismos y proporcionar a cada
						uno de los partícipes sus correspondientes estados de cuenta y de créditos cuando lo
						requieran.
					</Typography>
					<Typography
						variant="body1"
						color="initial"
						component="p"
						align="justify"
						className={classes.parragraph}
					>
						Los empleados del Fondo están obligados a proporcionar a cada partícipe en forma verbal,
						por escrito o mediante cualquier medio tecnológico, la información individual que
						solicite personalmente, bajo ningún concepto se podrá proporcionar información a
						terceras personas, salvo que se encuentren legalmente justificadas y autorizadas.
					</Typography>
					<Typography
						variant="body1"
						color="initial"
						component="p"
						align="justify"
						className={classes.parragraph}
					>
						Los empleados del Fondo no podrán proporcionar información propia del FCPCGADMO-EMAPAO,
						sin estar autorizados para ello, salvo que sea requerida por entidades de control o
						públicas, para el efecto siempre deberá ponerse la leyenda que la información
						proporcionada se entrega bajo la responsabilidad de quien lo solicite precautelando los
						intereses del Fondo por sigilo.
					</Typography>
					<Typography
						variant="body1"
						color="initial"
						component="p"
						align="justify"
						className={classes.parragraph}
					>
						La publicidad del Fondo debe ser honesta, verdadera, conforme a principios de
						transparencia y de buenas prácticas, preparada con sentido de responsabilidad social.
					</Typography>
					<Typography variant="h5" color="initial" className={classes.subTitle}>
						ARTÍCULO 6.- RENDICIÓN DE CUENTAS
					</Typography>
					<Typography
						variant="body1"
						color="initial"
						component="p"
						align="justify"
						className={classes.parragraph}
					>
						El Representante Legal deberá presentar a la Asamblea General de Partícipes el informe
						anual que contenga la rendición de cuentas sobre la gestión y el cumplimiento de las
						prácticas de Buen Gobierno Corporativo y del Código de Ética.
					</Typography>
					<Typography
						variant="body1"
						color="initial"
						component="p"
						align="justify"
						className={classes.parragraph}
					>
						Además, informar a los partícipes sobre:
					</Typography>
					<Typography
						variant="body1"
						color="initial"
						component="p"
						align="justify"
						className={classes.list}
					>
						El cumplimiento de los objetivos y responsabilidades asumidas en el manejo de los
						recursos;
					</Typography>
					<Typography
						variant="body1"
						color="initial"
						component="p"
						align="justify"
						className={classes.list}
					>
						Los impactos causados y cesantía, la rentabilidad del Fondo por las decisiones tomadas;
					</Typography>
					<Typography
						variant="body1"
						color="initial"
						component="p"
						align="justify"
						className={classes.list}
					>
						El cumplimiento o no de lo planificado, en forma transparente y;
					</Typography>
					<Typography
						variant="body1"
						color="initial"
						component="p"
						align="justify"
						className={classes.list}
						style={{ marginBottom: 16 }}
					>
						Presentar anualmente a la Asamblea General de partícipes la información financiera
						auditada.
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
