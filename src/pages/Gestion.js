import React from 'react';
import Typography from '@material-ui/core/Typography';
import { Container, makeStyles, Grow, Hidden } from '@material-ui/core';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Lines } from '../components/Lines';
import { Helmet } from 'react-helmet';
import { ABREVIACION_FONDO, URL_FONDO } from '../constants/constants';

export const Gestion = () => {
	const classes = useStyles();
	const title = 'GESTIÓN ADMINISTRACIÓN BIESS PERIODO 2015 - 2021';
	const nameFile = '7.INFORMEDEGESTIONBIESS2015-2021-FCPCGADMOPARAPAGINAWEB.pdf';
	const url = `${URL_FONDO}/files/${nameFile}`;

	return (
		<>
			<Helmet>
				<title>
					{title} | {ABREVIACION_FONDO}
				</title>
			</Helmet>
			<Container maxWidth="md" id="contacto">
				<Grow in={true} style={{ transformOrigin: '0 0 0' }} {...(true ? { timeout: 800 } : {})}>
					<Typography variant="h4" color="initial" align="center" className={classes.title}>
						{title}
					</Typography>
				</Grow>
				<Lines height={3} />
				<div className={classes.marginTopBottomx4}>
					<Typography
						variant="body1"
						color="initial"
						component="p"
						align="justify"
						className={classes.parragraph}
					>
						En estricto cumplimiento a lo dispuesto en la Resolución No. JPRF-F-2021-005, artículo
						192 y 193 - SUBSECCIÓN VII “DE LAS OBLIGACIONES DEL BIESS EN EL PROCESO DE TRANSICIÓN A
						LOS PARTÍCIPES, se presenta el INFORME DE GESTION DURANTE LA ADMINISTRACIÓN BIESS en el
						periodo 2015 - 2021, mismo que fue Conocido, Resuelto y Aprobado en la Primera Asamblea
						Ordinaria de Partícipes del FCPC GADMO, llevada a efecto el día 03 de febrero del 2022 a
						las 18:00.
					</Typography>
				</div>
				<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
					<Hidden only={['xs']}>
						<iframe title="pdf" src={url} width="100%" height="500px"></iframe>
					</Hidden>
					<Hidden only={['md', 'xl', 'lg', 'sm']}>
						<p>
							Abrir PDF
							<a rel="noreferrer" href={url} target="_blank">
								aquí
							</a>
							.
						</p>
					</Hidden>
				</div>
			</Container>
		</>
	);
};

const useStyles = makeStyles((theme) => ({
	title: { margin: theme.spacing(4), fontWeight: 'bold' },
	margin: {
		margin: theme.spacing(1),
	},
	marginx4: {
		margin: theme.spacing(4),
	},
	marginTopBottomx4: {
		marginTop: theme.spacing(6),
		marginBottom: theme.spacing(4),
	},
	displayCenterColumn: {
		diplay: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		marginBottom: theme.spacing(2),
		marginTop: theme.spacing(2),
	},
	containerForm: {
		diplay: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		width: '100%',
	},
	containerInput: {
		diplay: 'flex',
		alignItems: 'center',
	},
	value: {
		marginLeft: theme.spacing(4.5),
	},
	typographyWithIcon: {
		display: 'flex',
		alignItems: 'center',
	},
	mrIcon: {
		marginRight: theme.spacing(1.5),
	},
	backdrop: {
		zIndex: theme.zIndex.drawer + 1,
		backgroundColor: 'rgba(255, 255, 255, 0.7)',
	},
}));
