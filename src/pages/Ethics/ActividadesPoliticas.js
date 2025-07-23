import { Container, Grow, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import { Helmet } from 'react-helmet';
import { Lines } from '../../components/Lines';

export const ActividadesPoliticas = () => {
	const classes = useStyles();

	return (
		<>
			<Helmet>
				<title>Actividades Políticas | fcpcGADMO</title>
			</Helmet>
			<Grow in={true} style={{ transformOrigin: '0 0 0' }} {...(true ? { timeout: 800 } : {})}>
				<Container maxWidth="md">
					<Typography variant="h3" color="initial" align="center" className={classes.title}>
						ACTIVIDADES POLÍTICAS
					</Typography>
					<Lines height={3} style={{ marginTop: 10, marginBottom: 10 }} />

					<Typography variant="h5" color="initial" className={classes.subTitle}>
						ARTÍCULO 21.- ACTIVIDADES POLÍTICAS
					</Typography>
					<Typography
						variant="body1"
						color="initial"
						component="p"
						align="justify"
						className={classes.parragraph}
					>
						El Fondo no realiza aportes a partidos o candidatos políticos y su participación en
						actividades políticas se limita a apoyar iniciativas relacionadas con la existencia y
						permanencia de la Entidad en el tiempo.
					</Typography>
					<Typography
						variant="body1"
						color="initial"
						component="p"
						align="justify"
						className={classes.parragraph}
					>
						Si el Representante Legal o Gerente o los empleados desean participar en actividades
						políticas personales, deben asegurarse de que ellas no interfieran en su capacidad de
						cumplir con sus obligaciones como administrador o empleados del Fondo.
					</Typography>
					<Typography
						variant="body1"
						color="initial"
						component="p"
						align="justify"
						className={classes.parragraph}
					>
						La información que dispone el Fondo sobre sus partícipes, administrador y los empleados
						solo debe utilizarse con fines para el Fondo.
					</Typography>
					<Typography
						variant="body1"
						color="initial"
						component="p"
						align="justify"
						className={classes.parragraph}
					>
						El Representante Legal o Gerente o los empleados no deben participar en actividades
						políticas en el lugar de trabajo.
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
