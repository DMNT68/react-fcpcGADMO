import React from 'react';
import { Container, Grow, makeStyles, Typography } from '@material-ui/core';
import { Lines } from '../../components/Lines';
import { Helmet } from 'react-helmet';

export const Institution = () => {
	const classes = useStyles();

	return (
		<>
			<Helmet>
				<title>Filosofía Institucional | fcpcGADMO</title>
			</Helmet>
			<Grow in={true} style={{ transformOrigin: '0 0 0' }} {...(true ? { timeout: 800 } : {})}>
				<Container maxWidth="md">
					<Typography variant="h3" color="initial" align="center" className={classes.title}>
						FILOSOFÍA INSTITUCIONAL
					</Typography>
					<Lines height={3} style={{ marginTop: 10, marginBottom: 10 }} />
					<Typography variant="h5" color="initial" className={classes.subTitle}>
						Misión
					</Typography>
					<Typography
						variant="body1"
						color="initial"
						component="p"
						align="justify"
						className={classes.parragraph}
					>
						El Fondo, manejado por el BIESS, y supervisado por la Superintendencia de Bancos,
						administra con eficiencia los recursos de los partícipes, gestionando inversiones que
						aseguren rentabilidad, re capitalizando el mismo a través de la colocación de créditos
						quirografarios e hipotecarios, con riesgos mínimos manejando el cobro eficiente de la
						cartera ofreciendo servicios que van en favor de todos los partícipes y contribuyen a su
						desarrollo personal y familiar, asegurando las prestaciones y beneficios para las cuales
						fue creado este fondo.{' '}
					</Typography>
					<Typography variant="h5" color="initial" className={classes.subTitle}>
						Visión
					</Typography>
					<Typography
						variant="body1"
						color="initial"
						component="p"
						align="justify"
						className={classes.parragraph}
					>
						Dentro de un mediano y largo plazo se prevé que el{' '}
						<b>
							{' '}
							FONDO DE CESANTÍA PRIVADO DE LOS EMPLEADOS,TRABAJADORES Y DOCENTES DEL GOBIERNO
							MUNICIPAL DE OTAVALO FCPC{' '}
						</b>
						, crezca de manera sustancial, con incremento de partícipes que serán directamente
						proporcionales al incremento de los ingresos para mejorar los tiempos de respuesta en la
						colocación de créditos con más y mejores servicios y productos, se haya recapitalizado a
						través del cobro eficiente de la cartera, mediante una eficiente y transparente gestión,
						con la finalidad de devolver los aportes y rendimientos causados a todos quienes cumplan
						con la condición de cesantes, tal como lo demanda la Normativa Legal Vigente, en las
						mejores condiciones asegurando rentabilidad y confianza.{' '}
					</Typography>
					<Typography variant="h5" color="initial" className={classes.subTitle}>
						Valores Institucionales
					</Typography>
					<Typography
						variant="body1"
						color="initial"
						component="p"
						align="justify"
						className={classes.parragraph}
					>
						<span style={{ fontWeight: 'bold' }}>RESPETO:</span> Brindar a los partícipes un trato
						digno y sin discriminación.
					</Typography>
					<Typography
						variant="body1"
						color="initial"
						component="p"
						align="justify"
						className={classes.parragraph}
					>
						<span style={{ fontWeight: 'bold' }}>HONESTIDAD:</span> Evidenciar en cada una de las
						acciones de las administraciones de turno y su personal, un comportamiento probo,
						honrado, transparente, que demuestre solvencia, eficiencia, eficacia, integridad moral y
						ética.
					</Typography>
					<Typography
						variant="body1"
						color="initial"
						component="p"
						align="justify"
						className={classes.parragraph}
					>
						<span style={{ fontWeight: 'bold' }}>TRANSPARENCIA:</span> Actuar en todo sentido de
						forma clara, y expresando la información de manera comprensible a todos los niveles
						sociales que demanden de la explicación y aclaraciones del funcionamiento del Fondo.
					</Typography>
					<Typography
						variant="body1"
						color="initial"
						component="p"
						align="justify"
						className={classes.parragraph}
					>
						<span style={{ fontWeight: 'bold' }}>COMPROMISO:</span> Cumplir con perseverancia,
						profesionalismo, lealtad y sentido de pertenencia, los deberes y obligaciones, con apego
						a los objetivos estratégicos.
					</Typography>
					<Typography
						variant="body1"
						color="initial"
						component="p"
						align="justify"
						className={classes.parragraph}
					>
						<span style={{ fontWeight: 'bold' }}>SOLIDARIDAD:</span> Realizar las labores diarias
						con absoluta eficiencia en el manejo de los recursos y eficacia en los tiempos de
						respuesta en lo referente a la atención de los partícipes, razón de ser de este Fondo.{' '}
					</Typography>
					<Typography
						variant="body1"
						color="initial"
						component="p"
						align="justify"
						className={classes.parragraph}
					>
						<span style={{ fontWeight: 'bold' }}>CONFIANZA:</span> CCrear un ambiente de
						credibilidad mediante la entrega de información oportuna, clara y precisa de las
						operaciones del Fondo y demostrar a través de los beneficios otorgados, en la medida en
						la que la Normativa Legal vigente lo permita.{' '}
					</Typography>
					<Typography variant="h5" color="initial" className={classes.subTitle}>
						Productos
					</Typography>
					<Typography
						variant="body1"
						color="initial"
						component="p"
						align="justify"
						className={classes.parragraph}
					>
						En base a los estatutos legalizados y al Reglamento de Créditos vigente el Fondo ofrece:
					</Typography>
					<Typography
						variant="body1"
						color="initial"
						component="li"
						align="justify"
						className={classes.list}
					>
						Créditos Quirografarios con montos equivalentes a su cuenta individual{' '}
					</Typography>
					<Typography
						variant="body1"
						color="initial"
						component="p"
						align="justify"
						className={classes.parragraph}
					>
						Los productos que actualmente ofrece el Fondo a sus partícipes aseguran sustentabilidad
						y sostenibilidad, sin permitir el sobre endeudamiento con características propias del
						fondo y sus necesidades, lo que permite a su vez crear mejores condiciones para los
						partícipes que adquieren su calidad de cesantes por cualquiera de los motivos señalados
						en la normativa legal vigente.
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
		// marginLeft: theme.spacing(2),
	},
	list: {
		marginLeft: theme.spacing(2),
	},
}));
