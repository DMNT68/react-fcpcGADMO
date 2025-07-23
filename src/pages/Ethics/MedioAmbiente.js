import { Container, Grow, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import { Helmet } from 'react-helmet';
import { Lines } from '../../components/Lines';

export const MedioAmbiente = () => {
	const classes = useStyles();

	return (
		<>
			<Helmet>
				<title>Medio Ambiente | fcpcGADMO</title>
			</Helmet>
			<Grow in={true} style={{ transformOrigin: '0 0 0' }} {...(true ? { timeout: 800 } : {})}>
				<Container maxWidth="md">
					<Typography variant="h3" color="initial" align="center" className={classes.title}>
						CAPÍTULO VIII - MEDIO AMBIENTE
					</Typography>
					<Lines height={3} style={{ marginTop: 10, marginBottom: 10 }} />

					<Typography variant="h5" color="initial" className={classes.subTitle}>
						ARTÍCULO 21.- MEDIO AMBIENTE
					</Typography>
					<Typography
						variant="body1"
						color="initial"
						component="p"
						align="justify"
						className={classes.parragraph}
					>
						El Fondo, el Representante Legal o Gerente y sus empleados deben realizar actividades
						que coadyuven a mejorar el entorno del Fondo.
					</Typography>
					<Typography variant="h5" color="initial" className={classes.subTitle}>
						ARTÍCULO 23.- SALUD Y SEGURIDAD
					</Typography>
					<Typography
						variant="body1"
						color="initial"
						component="p"
						align="justify"
						className={classes.parragraph}
					>
						El Fondo deberá interesarse en la salud y la seguridad del Representante Legal o
						Gerente, empleados y hará todo lo posible por brindar un entorno laboral seguro y
						saludable.
					</Typography>
					<Typography
						variant="body1"
						color="initial"
						component="p"
						align="justify"
						className={classes.parragraph}
					>
						Sin embargo, de que cada persona debe proteger su propia salud y seguridad, es
						responsabilidad de todo compañero de trabajo brindar apoyo en caso de existir alguna
						situación atentatoria que vaya contra la vida del otro.
					</Typography>
					<Typography variant="h5" color="initial" className={classes.subTitle}>
						ARTÍCULO 24.- DERECHOS HUMANOS
					</Typography>
					<Typography
						variant="body1"
						color="initial"
						component="p"
						align="justify"
						className={classes.parragraph}
					>
						En el Fondo se valorará los derechos humanos y se promoverá la protección de los mismos,
						así como los derechos de los trabajadores reconocidos en todo el mundo. Los empleados
						deben ser contratados, ascendidos y remunerados estrictamente en función de sus méritos.
						No existe ningún motivo aceptable para contratar a alguien que no está debidamente
						calificado.
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
		[theme.breakpoints.down('sm')]: {
			fontSize: 24,
		},
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
