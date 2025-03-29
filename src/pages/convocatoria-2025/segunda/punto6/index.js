import React from 'react';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import {
	Container,
	makeStyles,
	Grow,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
} from '@material-ui/core';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Helmet } from 'react-helmet';
import { ABREVIACION_FONDO } from '../../../../constants/constants';
import { Lines } from '../../../../components/Lines';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

const manuales = [
	{
		icon: <ArrowRightIcon color="primary" />,
		path: '/segunda-asamblea/manual-de-inhabilidades-fcpc-31',
		name: 'Manual de inhabilidades',
		more: [],
	},
	{
		icon: <ArrowRightIcon color="primary" />,
		path: '/segunda-asamblea/manual-de-funciones-fcpc-31',
		name: 'Manual de funciones',
		more: [],
	},
	{
		icon: <ArrowRightIcon color="primary" />,
		path: '/segunda-asamblea/codigo-de-etica-fcpc-31',
		name: 'Código de ética',
		more: [],
	},
	{
		icon: <ArrowRightIcon color="primary" />,
		path: '/segunda-asamblea/manual-de-viaticos-fcpc-31',
		name: 'Manual de viaticos',
		more: [],
	},
	{
		icon: <ArrowRightIcon color="primary" />,
		path: '/segunda-asamblea/manual-de-lavado-de-activos-fcpc-31',
		name: 'Manual de lavado de activos',
		more: [],
	},
	{
		icon: <ArrowRightIcon color="primary" />,
		path: '/segunda-asamblea/manual-de-registro-contable-fcpc-31',
		name: 'Manual de registro contable',
		more: [],
	},
	{
		icon: <ArrowRightIcon color="primary" />,
		path: '/segunda-asamblea/manual-de-registro-de-cuenta-individual-fcpc-31',
		name: 'Manual de registro de cuenta individual',
		more: [],
	},
	{
		icon: <ArrowRightIcon color="primary" />,
		path: '/segunda-asamblea/manual-de-inversiones-no-privativas-fcpc-31',
		name: 'Manual de inversiones no privativas',
		more: [],
	},
	{
		icon: <ArrowRightIcon color="primary" />,
		path: '/segunda-asamblea/manual-de-inversiones-privativas-fcpc-31',
		name: 'Manual de inversiones privativas',
		more: [],
	},
	{
		icon: <ArrowRightIcon color="primary" />,
		path: '/segunda-asamblea/manual-para-la-administracion-y-gestion-del-riesgo-fcpc-31',
		name: 'Manual para la administración y gestión del riesgo',
		more: [],
	},
	{
		icon: <ArrowRightIcon color="primary" />,
		path: '/segunda-asamblea/manual-de-prestaciones-fcpc-31',
		name: 'Manual de prestaciones',
		more: [],
	},
	{
		icon: <ArrowRightIcon color="primary" />,
		path: '/segunda-asamblea/manual-de-control-interno-fcpc-31',
		name: 'Manual de control interno',
		more: [],
	},
	{
		icon: <ArrowRightIcon color="primary" />,
		path: '/segunda-asamblea/politica-de-actualizacion-de-normativa-fcpc-31',
		name: 'Política de actualización de manuales y normativa',
		more: [],
	},
	{
		icon: <ArrowRightIcon color="primary" />,
		path: '/segunda-asamblea/manual-de-compra-venta-de-titulos-valores-fcpc-31',
		name: 'Manual de compra venta de títulos',
		more: [],
	},
	{
		icon: <ArrowRightIcon color="primary" />,
		path: '/segunda-asamblea/manual-de-calificacion-y-castigo-de-cartera-fcpc-31',
		name: 'Manual de calificación y castigo de cartera',
		more: [],
	},
	{
		icon: <ArrowRightIcon color="primary" />,
		path: '/segunda-asamblea/manual-de-administración-del-personal-del-fondo-fcpc-31',
		name: 'Manual de administración del personal del fondo',
		more: [],
	},
	{
		icon: <ArrowRightIcon color="primary" />,
		path: '/segunda-asamblea/manual-de-archivo-y-gestion-documental-fcpc-31',
		name: 'Manual de archivo y gestion documental',
		more: [],
	},
	{
		icon: <ArrowRightIcon color="primary" />,
		path: '/segunda-asamblea/politica-de-ejecucion-plan-estrategico-y-planificacion-operativa-anual-fcpc-31',
		name: 'Política de ejecución plan estratégico y planificación operativa anual',
		more: [],
	},
	{
		icon: <ArrowRightIcon color="primary" />,
		path: '/segunda-asamblea/manual-de-gestión-de-asambleas-fcpc-31',
		name: 'Manual de gestión de asambleas',
		more: [],
	},
	{
		icon: <ArrowRightIcon color="primary" />,
		path: '/segunda-asamblea/manual-de-tecnologias-incidencias-fcpc-31',
		name: 'Manual de tecnologias incidencias',
		more: [],
	},
	{
		icon: <ArrowRightIcon color="primary" />,
		path: '/segunda-asamblea/manual-de-tecnologias-cambios-en-el-aplicativo-contable-fcpc-31',
		name: 'Manual de tecnologias cambios en el aplicativo contable',
		more: [],
	},
	{
		icon: <ArrowRightIcon color="primary" />,
		path: '/segunda-asamblea/manual-de-tecnologias-generacion-de-respaldos-fcpc-31',
		name: 'Manual de tecnologías generación de respaldos',
		more: [],
	},
	{
		icon: <ArrowRightIcon color="primary" />,
		path: '/segunda-asamblea/procedimiento-para-tratamiento-de-quejas-y-sugerencias-fcpc-31',
		name: 'Procedimiento para tratamiento de quejas y sugerencias',
		more: [],
	},
];

export const Manuales2 = () => {
	const classes = useStyles();
	const title = 'Manuales';

	return (
		<>
			<Helmet>
				<title>
					{title} | {ABREVIACION_FONDO}
				</title>
			</Helmet>
			<Container maxWidth="md" id="manuales">
				<Grow in={true} style={{ transformOrigin: '0 0 0' }} {...(true ? { timeout: 800 } : {})}>
					<Typography variant="h4" color="initial" align="center" className={classes.title}>
						{title}
					</Typography>
				</Grow>
				<Lines height={3} />
				<div className={classes.marginTopBottomx4}></div>
				<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
					<List dense>
						{manuales.map((item, index) => (
							<ListItem key={index} button component={Link} to={item.path}>
								<ListItemIcon>{item.icon}</ListItemIcon>
								<ListItemText primary={item.name} />
							</ListItem>
						))}
					</List>
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
