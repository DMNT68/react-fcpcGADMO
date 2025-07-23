import { Container, Grow, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import { Helmet } from 'react-helmet';
import { Lines } from '../../components/Lines';

export const MedidasDisciplinarias = () => {
	const classes = useStyles();

	return (
		<>
			<Helmet>
				<title>Medidas Disciplinarias | fcpcGADMO</title>
			</Helmet>
			<Grow in={true} style={{ transformOrigin: '0 0 0' }} {...(true ? { timeout: 800 } : {})}>
				<Container maxWidth="md">
					<Typography variant="h3" color="initial" align="center" className={classes.title}>
						MEDIDAS DISCIPLINARIAS
					</Typography>
					<Lines height={3} style={{ marginTop: 10, marginBottom: 10 }} />

					<Typography variant="h5" color="initial" className={classes.subTitle}>
						ARTÍCULO 30.
					</Typography>
					<Typography
						variant="body1"
						color="initial"
						component="p"
						align="justify"
						className={classes.parragraph}
					>
						Es importante comprender que la violación de algunas disposiciones de este Código
						también puede implicar la violación de alguna Ley y puede hacer que el sujeto implicado
						y/o el{' '}
						<span style={{ fontWeight: 'bold' }}>
							FONDO DE CESANTÍA PRIVADO DE LOS EMPLEADOS, TRABAJADORES Y DOCENTES DEL GOBIERNO
							MUNICIPAL DE OTAVALO FCPC
						</span>
						, sean objeto de una acción legal que genere responsabilidades, administrativas, civiles
						o penales.
					</Typography>
					<Typography
						variant="body1"
						color="initial"
						component="p"
						align="justify"
						className={classes.parragraph}
					>
						Las medidas disciplinarias serán determinadas u ordenadas por la Representante Legal o
						Gerente del Fondo de conformidad con el Estatuto y sus Reglamentos.
					</Typography>
					<Typography
						variant="body1"
						color="initial"
						component="p"
						align="justify"
						className={classes.parragraph}
					>
						En lo referente a las faltas disciplinarias de los empleados están legisladas en el
						correspondiente Reglamento interno y en el Código del Trabajo.
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
