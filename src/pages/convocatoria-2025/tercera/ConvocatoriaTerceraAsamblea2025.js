import React from 'react';
import Typography from '@material-ui/core/Typography';
import { Container, makeStyles, Grow, Hidden } from '@material-ui/core';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Lines } from '../../../components/Lines';
import { Helmet } from 'react-helmet';
import { ABREVIACION_FONDO, URL_FONDO } from '../../../constants/constants';

export const ConvocatoriaTerceraAsamblea2025 = () => {
	const classes = useStyles();
	const title = 'Convocatoria a la tercera asamblea extraordinaria de participes - 2025';
	const nameFile = 'CONVOCATORIA-ASAMBLEA-EXTRAORDINARIA-DE-21-DE-JULIO-2025.pdf';
	const url = `${URL_FONDO}/files/asamblea-2025/tercera/${nameFile}`;
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
				<div className={classes.marginTopBottomx4}></div>
				<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
					<Hidden only={['xs']}>
						<iframe title="pdf" src={`${url}#toolbar=0`} width="100%" height="500px"></iframe>
					</Hidden>
					<Hidden only={['md', 'xl', 'lg', 'sm']}>
						<div>
							<p>
								Abrir PDF &nbsp;
								<a rel="noreferrer" href={url} target="_blank">
									aquí
								</a>
								.
							</p>
						</div>
						{/* <div style={{ height: '100vh' }}></div> */}
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
