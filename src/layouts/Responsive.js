import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import NavbarHiden from '../components/NavbarHiden';
import { Home } from '../pages/home/Home';
import { Institution } from '../pages/institucion/Institution';
import { Ethics } from '../pages/Ethics/Ethics';
import { Education } from '../pages/Education';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';
import { Contact } from '../pages/Contact';
import { Introduction } from '../pages/Ethics/Introduction';
import { ConceptosJustificacion } from '../pages/Ethics/ConceptosJustificacion';
import { DisposionesPreliminares } from '../pages/Ethics/DisposionesPreliminares';
import { Normas } from '../pages/Ethics/Normas';
import { Prohibicion } from '../pages/Ethics/Prohibicion';
import { Conflictos } from '../pages/Ethics/Conflictos';
import { ActividadesPoliticas } from '../pages/Ethics/ActividadesPoliticas';
import { MedioAmbiente } from '../pages/Ethics/MedioAmbiente';
import { ComiteEtica } from '../pages/Ethics/ComiteEtica';
import { Cumplimiento } from '../pages/Ethics/Cumplimiento';
import { MedidasDisciplinarias } from '../pages/Ethics/MedidasDisciplinarias';
import { AccesoPoliticas } from '../pages/Ethics/AccesoPoliticas';
import { Planificacion } from '../pages/institucion/Planificacion';
import { Button, IconButton, Typography } from '@material-ui/core';
import NotFound from '../assets/svg/undraw_page_not_found.svg';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import ApartmentRoundedIcon from '@material-ui/icons/ApartmentRounded';
import CollectionsBookmarkRoundedIcon from '@material-ui/icons/CollectionsBookmarkRounded';
import ContactPhoneRoundedIcon from '@material-ui/icons/ContactPhoneRounded';
import LocalLibraryRoundedIcon from '@material-ui/icons/LocalLibraryRounded';
import CloseRoundedIcon from '@material-ui/icons/CloseRounded';
import { Layout } from 'antd';
import { Lines } from '../components/Lines';
import { Personal } from '../pages/Personal';
import PeopleAltRoundedIcon from '@material-ui/icons/PeopleAltRounded';
import PlaylistAddCheckOutlinedIcon from '@material-ui/icons/PlaylistAddCheckOutlined';
import DescriptionIcon from '@material-ui/icons/Description';
import GavelIcon from '@material-ui/icons/Gavel';
import { Gestion } from '../pages/Gestion';
import { Ley } from '../pages/Ley';
import { Anexo1 } from '../pages/Anexo1';
import { Quejas } from '../pages/Quejas';
import { Bases } from '../pages/Bases';
import { NormasCalificacion } from '../pages/NormasCalificacion';
import { ConvocatoriaAsamblea } from '../pages/ConvocatoriaAsamblea';
import { ConvocatoriaAsamblea2 } from '../pages/ConvocatoriaAsamblea2';
import { Encuesta } from '../pages/Encuesta';
import { ConvocatoriaTercera } from '../pages/ConvocatoriaTercera';

import { ConvocatoriaPrimeraAsamblea2024 } from '../pages/convocatoria-2024/ConvocatoriaPrimeraAsamblea2024';
import { Manual } from '../pages/convocatoria-2024/punto9/Manual';
import { Resolucion } from '../pages/convocatoria-2024/punto10/Resolucion';
import { Oficio } from '../pages/convocatoria-2024/punto10/Oficio';
import { ManualFunciones } from '../pages/convocatoria-2024/punto11/ManualFunciones';
import { CodigoEtica } from '../pages/convocatoria-2024/punto11/CodigoEtica';
import { ManualLavadoActivos } from '../pages/convocatoria-2024/punto11/ManualLavadoActivos';
import { ManualContable } from '../pages/convocatoria-2024/punto11/ManualContable';
import { ManualRegistroCuentaIndividual } from '../pages/convocatoria-2024/punto11/ManualRegistroCuentaIndividual';
import { ManualAdministracionRiesgo } from '../pages/convocatoria-2024/punto11/ManualAdministracionRiesgo';
import { ManualPrestaciones } from '../pages/convocatoria-2024/punto11/ManualPrestaciones';
import { ManualControlInterno } from '../pages/convocatoria-2024/punto11/ManualControlInterno';
import { PoliticaActualizacionManuales } from '../pages/convocatoria-2024/punto11/PoliticaActualizacionManuales';
import { ManualCompraVentaTitulos } from '../pages/convocatoria-2024/punto11/ManualCompraVentaTitulos';
import { ManualInversionesNoPrivativas } from '../pages/convocatoria-2024/punto11/ManualInversionesNoPrivativas';
import { ManualInversionesPrivativas } from '../pages/convocatoria-2024/punto11/ManualInversionesPrivativas';
import { ManualDevolucionFondo } from '../pages/convocatoria-2024/punto11/ManualDevolucionFondo';
import { ManualViaticos } from '../pages/convocatoria-2024/punto11/ManualViaticos';
import { ManualCalificacion } from '../pages/convocatoria-2024/punto12/ManualCalificacion';
import { ManualArchivoYGEstionDocumental } from '../pages/convocatoria-2024/punto12/ManualArchivoYGEstionDocumental';
import { ManualIncidencias } from '../pages/convocatoria-2024/punto13/ManualIncidencias';
import { ManualCambiosAplicativo } from '../pages/convocatoria-2024/punto13/ManualCambiosAplicativo';
import { ManualGeneracionRespaldos } from '../pages/convocatoria-2024/punto13/ManualGeneracionRespaldos';
import { ManualGestionAsambleas } from '../pages/convocatoria-2024/punto12/ManualGestionAsambleas';
import { PoliticaEjecucionPlanEstrategico } from '../pages/convocatoria-2024/punto12/PoliticaEjecucionPlanEstrategico';
import { ManualAdministracionDelPersonal } from '../pages/convocatoria-2024/punto12/ManualAdministracionDelPersonal';
import { ConvocatoriaSegundaAsamblea2024 } from '../pages/convocatoria-2024/segunda/ConvocatoriaSegundaAsamblea2024';
import { ConvocatoriaTerceraAsamblea2024 } from '../pages/convocatoria-2024/tercera/ConvocatoriaTerceraAsamblea2024';
import { BuzonQuejas } from '../pages/BuzonQuejas';
import { ConvocatoriaCuartaAsamblea2024 } from '../pages/convocatoria-2024/cuarta/ConvocatoriaCuartaAsamblea2024';

import { ConvocatoriaPrimeraAsamblea2025 } from '../pages/convocatoria-2025/primera/ConvocatoriaPrimeraAsamblea2024';
import { ManualInhabilidades } from '../pages/convocatoria-2025/primera/punto6/ManualInhabilidades';
import { ManualDeFunciones } from '../pages/convocatoria-2025/primera/punto6/ManualDeFunciones';
import { CodigoDeEtica } from '../pages/convocatoria-2025/primera/punto6/CodigoDeEtica';
import { ManualdeViaticos } from '../pages/convocatoria-2025/primera/punto6/ManualDeViaticos';
import { ManualDeLavadoDeActivos } from '../pages/convocatoria-2025/primera/punto6/ManualDeLavadoDeActivos';
import { ManualDeRegistroContable } from '../pages/convocatoria-2025/primera/punto6/ManualDeRegistroContable';
import { ManualDeRegistroContableIndividual } from '../pages/convocatoria-2025/primera/punto6/ManualDeRegistroContableIndividual';
import { ManualdeInversionesNoPrivativas } from '../pages/convocatoria-2025/primera/punto6/ManualdeInversionesNoPrivativas';
import { ManualdeInversionesPrivativas } from '../pages/convocatoria-2025/primera/punto6/ManualdeInversionesPrivativas';
import { ManualParaLaAdministracionYGestionDelRiesgo } from '../pages/convocatoria-2025/primera/punto6/ManualParaLaAdministracionYGestionDelRiesgo';
import { ManualDePrestaciones } from '../pages/convocatoria-2025/primera/punto6/ManualDePrestaciones';
import { ManualDeControlInterno } from '../pages/convocatoria-2025/primera/punto6/ManualDeControlInterno';
import { PoliticaDeActualizacionDeNormativa } from '../pages/convocatoria-2025/primera/punto6/PoliticaDeActualizacionDeNormativa';
import { ManualDeCompraVentaDeTitulosValores } from '../pages/convocatoria-2025/primera/punto6/ManualDeCompraVentaDeTitulosValores';
import { ManualDeCalificacionYCastigoDeCartera } from '../pages/convocatoria-2025/primera/punto6/ManualDeCalificacionYCastigoDeCartera';
import { ManualDeAdministracionDelPersonalDelFondo } from '../pages/convocatoria-2025/primera/punto6/ManualDeAdministracionDelPersonalDelFondo';
import { ManualDeArchivoYGestionDocumental } from '../pages/convocatoria-2025/primera/punto6/ManualDeArchivoYGestionDocumental';
import { PoliticaDeEjecucion } from '../pages/convocatoria-2025/primera/punto6/PoliticaDeEjecucion';
import { ManualDeGestionDeAsambleas } from '../pages/convocatoria-2025/primera/punto6/ManualDeGestionDeAsambleas';
import { ManualDeTecnologiasIncidencias } from '../pages/convocatoria-2025/primera/punto6/ManualDeTecnologiasIncidencias';
import { ManualDeTecnologiasCambiosAplicativoContable } from '../pages/convocatoria-2025/primera/punto6/ManualDeTecnologiasCambiosAplicativoContable';
import { ManualDeTecnologiasGeneracionDeRespaldos } from '../pages/convocatoria-2025/primera/punto6/ManualDeTecnologiasGeneracionDeRespaldos';
import { ProcedimientoParaQuejas } from '../pages/convocatoria-2025/primera/punto6/ProcedimientoParaQuejas';
import { ManualCircular } from '../pages/convocatoria-2025/primera/punto6/ManualCircular';
import { Manuales } from '../pages/convocatoria-2025/primera/punto6';

import { ConvocatoriaSegundaAsamblea2025 } from '../pages/convocatoria-2025/segunda/ConvocatoriaSegundaAsamblea2024';
import { ManualInhabilidades2 } from '../pages/convocatoria-2025/segunda/punto6/ManualInhabilidades2';
import { ManualDeFunciones2 } from '../pages/convocatoria-2025/segunda/punto6/ManualDeFunciones2';
import { CodigoDeEtica2 } from '../pages/convocatoria-2025/segunda/punto6/CodigoDeEtica2';
import { ManualdeViaticos2 } from '../pages/convocatoria-2025/segunda/punto6/ManualDeViaticos2';
import { ManualDeLavadoDeActivos2 } from '../pages/convocatoria-2025/segunda/punto6/ManualDeLavadoDeActivos2';
import { ManualDeRegistroContable2 } from '../pages/convocatoria-2025/segunda/punto6/ManualDeRegistroContable2';
import { ManualDeRegistroContableIndividual2 } from '../pages/convocatoria-2025/segunda/punto6/ManualDeRegistroContableIndividual2';
import { ManualdeInversionesNoPrivativas2 } from '../pages/convocatoria-2025/segunda/punto6/ManualdeInversionesNoPrivativas2';
import { ManualdeInversionesPrivativas2 } from '../pages/convocatoria-2025/segunda/punto6/ManualdeInversionesPrivativas2';
import { ManualParaLaAdministracionYGestionDelRiesgo2 } from '../pages/convocatoria-2025/segunda/punto6/ManualParaLaAdministracionYGestionDelRiesgo2';
import { ManualDePrestaciones2 } from '../pages/convocatoria-2025/segunda/punto6/ManualDePrestaciones2';
import { ManualDeControlInterno2 } from '../pages/convocatoria-2025/segunda/punto6/ManualDeControlInterno2';
import { PoliticaDeActualizacionDeNormativa2 } from '../pages/convocatoria-2025/segunda/punto6/PoliticaDeActualizacionDeNormativa2';
import { ManualDeCompraVentaDeTitulosValores2 } from '../pages/convocatoria-2025/segunda/punto6/ManualDeCompraVentaDeTitulosValores2';
import { ManualDeCalificacionYCastigoDeCartera2 } from '../pages/convocatoria-2025/segunda/punto6/ManualDeCalificacionYCastigoDeCartera2';
import { ManualDeAdministracionDelPersonalDelFondo2 } from '../pages/convocatoria-2025/segunda/punto6/ManualDeAdministracionDelPersonalDelFondo2';
import { ManualDeArchivoYGestionDocumental2 } from '../pages/convocatoria-2025/segunda/punto6/ManualDeArchivoYGestionDocumental2';
import { PoliticaDeEjecucion2 } from '../pages/convocatoria-2025/segunda/punto6/PoliticaDeEjecucion2';
import { ManualDeGestionDeAsambleas2 } from '../pages/convocatoria-2025/segunda/punto6/ManualDeGestionDeAsambleas2';
import { ManualDeTecnologiasIncidencias2 } from '../pages/convocatoria-2025/segunda/punto6/ManualDeTecnologiasIncidencias2';
import { ManualDeTecnologiasCambiosAplicativoContable2 } from '../pages/convocatoria-2025/segunda/punto6/ManualDeTecnologiasCambiosAplicativoContable2';
import { ManualDeTecnologiasGeneracionDeRespaldos2 } from '../pages/convocatoria-2025/segunda/punto6/ManualDeTecnologiasGeneracionDeRespaldos2';
import { ProcedimientoParaQuejas2 } from '../pages/convocatoria-2025/segunda/punto6/ProcedimientoParaQuejas2';
import { ManualCircular2 } from '../pages/convocatoria-2025/segunda/punto6/ManualCircular2';
import { Manuales2 } from '../pages/convocatoria-2025/segunda/punto6';
import { ConvocatoriaTerceraAsamblea2025 } from '../pages/convocatoria-2025/tercera/ConvocatoriaTerceraAsamblea2025';
import { ManuualPrestaciones2025 } from '../pages/convocatoria-2025/tercera/ManualPrestraciones2025';
import { PoliticasDeInversion } from '../pages/PoliticasDeInversion';

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
	container: {
		display: 'flex',
		flexWrap: 'wrap',
		minHeight: '90vh',
	},
	footer: {
		alignSelf: 'flex-end',
		background: theme.palette.primary.main,
		width: '100%',
		textAlign: 'center',
		padding: '1em',
		color: '#fff',
	},
	root: {
		display: 'flex',
	},
	drawer: {
		[theme.breakpoints.up('sm')]: {
			width: drawerWidth,
			flexShrink: 0,
		},
	},
	appBar: {
		[theme.breakpoints.up('sm')]: {
			width: `calc(100% - ${drawerWidth}px)`,
			marginLeft: drawerWidth,
		},
	},
	menuButton: {
		marginRight: theme.spacing(2),
		[theme.breakpoints.up('sm')]: {
			display: 'none',
		},
	},
	// necessary for content to be below app bar
	toolbar: theme.mixins.toolbar,
	drawerPaper: {
		width: drawerWidth,
	},
	content: {
		flexGrow: 1,
		// padding: theme.spacing(3),
		maxWidth: '100vw',
	},
	nested: {
		paddingLeft: theme.spacing(4),
	},
	notFound: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		width: '100%',
		height: '90vh',
		flexDirection: 'column',
	},
	backgroundFooter: {
		backgroundColor: '#fff',
	},
}));

export const Responsive = () => {
	const classes = useStyles();
	const { Footer } = Layout;
	const [mobileOpen, setMobileOpen] = React.useState(false);
	const [selectedIndex, setSelectedIndex] = useState('Inicio');

	const handleDrawerToggle = () => {
		setMobileOpen(!mobileOpen);
	};
	const handleListItemClick = (event, name) => {
		setSelectedIndex(name);
	};

	const routes = [
		{ icon: <HomeRoundedIcon color="primary" />, path: '/', name: 'Inicio', more: [] },
		{
			icon: <ApartmentRoundedIcon color="primary" />,
			path: '/institucion',
			name: 'La Intitución',
			more: [
				{
					icon: <ArrowRightIcon color="primary" />,
					path: '/institucion',
					name: 'Filosofia institucional',
				},
				{
					icon: <ArrowRightIcon color="primary" />,
					path: '/planificacionEstrategica',
					name: 'Planificación Estratégica',
				},
			],
		},
		{
			icon: <CollectionsBookmarkRoundedIcon color="primary" fontSize="small" />,
			path: '/codigoEtica',
			name: 'Código de Ética',
			more: [
				{
					icon: <ArrowRightIcon color="primary" fontSize="small" />,
					path: '/introduccion',
					name: 'Introducción',
				},
				{
					icon: <ArrowRightIcon color="primary" fontSize="small" />,
					path: '/conceptosJustificación',
					name: 'Conceptos y Justificación',
				},
				{
					icon: <ArrowRightIcon color="primary" fontSize="small" />,
					path: '/disposionesPreliminares',
					name: 'Disposiciones Preliminares',
				},
				{
					icon: <ArrowRightIcon color="primary" fontSize="small" />,
					path: '/normas',
					name: 'Normas',
				},
				{
					icon: <ArrowRightIcon color="primary" fontSize="small" />,
					path: '/prohibicion',
					name: 'Prohíbicion',
				},
				{
					icon: <ArrowRightIcon color="primary" fontSize="small" />,
					path: '/conflictos',
					name: 'Conflictos',
				},
				{
					icon: <ArrowRightIcon color="primary" fontSize="small" />,
					path: '/actividadesPoliticas',
					name: 'Actividades Políticas',
				},
				{
					icon: <ArrowRightIcon color="primary" fontSize="small" />,
					path: '/medioAmbiente',
					name: 'Medio Ambiente',
				},
				{
					icon: <ArrowRightIcon color="primary" fontSize="small" />,
					path: '/comiteEtica',
					name: 'Comite de Ética',
				},
				{
					icon: <ArrowRightIcon color="primary" fontSize="small" />,
					path: '/cumplimiento',
					name: 'Cumplimiento',
				},
				{
					icon: <ArrowRightIcon color="primary" fontSize="small" />,
					path: '/medidasDisciplinarias',
					name: 'Medidas Disciplinarias',
				},
				{
					icon: <ArrowRightIcon color="primary" fontSize="small" />,
					path: '/accesoPoliticas',
					name: 'Acceso a las Políticas',
				},
			],
		},
		{
			icon: <LocalLibraryRoundedIcon color="primary" />,
			path: '/educacionFinanciera',
			name: 'Educación Financiera',
			more: [],
		},
		{
			icon: <PeopleAltRoundedIcon color="primary" />,
			path: '/personal',
			name: 'Nuestro Personal',
			more: [],
		},
		{
			icon: <ContactPhoneRoundedIcon color="primary" />,
			path: '/contacto',
			name: 'Contacto',
			more: [],
		},
		{
			icon: <PlaylistAddCheckOutlinedIcon color="primary" />,
			path: '/gestionperiodo2015-2021',
			name: 'Gestion Periodo 2015-2021',
			more: [],
		},
		{
			icon: <GavelIcon color="primary" />,
			path: '/ley-orgánica-de-proteccion-de-datos-personales',
			name: 'Cumplimiento a la  ley orgánica de protección de datos personales.',
			more: [],
		},
		{
			icon: <DescriptionIcon color="primary" />,
			path: '/anexo1',
			name: 'Anexo 1 - Indicadores de gobierno corporativo para las instituciones que conforman el sistema nacional de seguridad social.',
			more: [],
		},
		{
			icon: <PlaylistAddCheckOutlinedIcon color="primary" />,
			path: '/quejas-y-sugerencias',
			name: 'Quejas y sugerencias.',
			more: [],
		},
		{
			icon: <PlaylistAddCheckOutlinedIcon color="primary" />,
			path: '/buzon-de-quejas',
			name: 'Buzón de quejas y sugerencias.',
			more: [],
		},
		{
			icon: <PlaylistAddCheckOutlinedIcon color="primary" />,
			path: '/proceso-de-concurso-de-meritos-y-oposicion',
			name: 'Proceso de concurso de méritos y oposición.',
			more: [],
		},
		{
			icon: <PlaylistAddCheckOutlinedIcon color="primary" />,
			path: '/normas-para-calificacion',
			name: 'Normas para la calificación de representante legal del fcpc gadmo emapao.',
			more: [],
		},
		{
			icon: <PlaylistAddCheckOutlinedIcon color="primary" />,
			path: '/encuesta-de-educación-financiera',
			name: 'Encuesta de educación financiera',
			more: [],
		},
		{
			icon: <PlaylistAddCheckOutlinedIcon color="primary" fontSize="small" />,
			path: '/politicas-de-inversion-privativas',
			name: 'Políticas de Inversión Privativas',
			more: [],
		},
		{
			icon: <PlaylistAddCheckOutlinedIcon color="primary" />,
			path: '/convocatoria-tercera-asamblea-2023',
			name: 'Convocatorias Asambleas 2023',
			more: [
				{
					icon: <PlaylistAddCheckOutlinedIcon color="primary" />,
					path: '/convocatoria-primera-asamblea-general-ordinaria-2023-fcpc-gadmo',
					name: 'Convocatoria primera asamblea general ordinaria 2023 fcpc gadmo.',
					more: [],
				},
				{
					icon: <PlaylistAddCheckOutlinedIcon color="primary" />,
					path: '/segunda-asamblea-general-extraordinaria-2023-03-de-mayo-2023',
					name: 'Segunda asamblea general extraordinaria - 2023 - 03 de mayo 2023',
					more: [],
				},
				{
					icon: <PlaylistAddCheckOutlinedIcon color="primary" />,
					path: '/convocatoria-tercera-asamblea-2023',
					name: 'Convocatoria tercera asamblea extraordinaria 2023',
					more: [],
				},
			],
		},
		{
			icon: <PlaylistAddCheckOutlinedIcon color="primary" />,
			path: '/convocatoria-primera-asamblea-2024',
			name: 'Convocatorias Asambleas 2024',
			more: [
				{
					icon: <CollectionsBookmarkRoundedIcon color="primary" fontSize="small" />,
					path: '/convocatoria-primera-asamblea-2024',
					name: 'Convocatoria a la primera asamblea general ordinaria de participes - 2024',
					more: [],
				},
				{
					icon: <CollectionsBookmarkRoundedIcon color="primary" />,
					path: '/manual-de-inhabilidades-fcpc-31',
					name: 'PUNTO 9 - MANUAL Circular Nro. SB-INCSS-2023-0051-C',
					more: [
						{
							icon: <ArrowRightIcon color="primary" />,
							path: '/manual-de-inhabilidades-fcpc-31',
							name: 'Manual de inhabilidades',
							more: [],
						},
					],
				},

				{
					icon: <ArrowRightIcon color="primary" />,
					path: '/resolucion-nro-sb-2023-02208',
					name: 'PUNTO 10 - RESOLUCIÓN SB-2023-02208',
					more: [
						{
							icon: <ArrowRightIcon color="primary" />,
							path: '/resolucion-nro-sb-2023-02208',
							name: 'Resolución',
							more: [],
						},
					],
				},

				{
					icon: <CollectionsBookmarkRoundedIcon color="primary" />,
					path: '/convocatoria-primera-asamblea-2023',
					name: 'PUNTO 11 - ACTUALIZACIÓN FECHAS MANUALES EXISTENTES',
					more: [
						{
							icon: <ArrowRightIcon color="primary" />,
							path: '/manual-de-funciones-fcpc',
							name: 'Manual de funciones',
							more: [],
						},
						{
							icon: <ArrowRightIcon color="primary" />,
							path: '/codigo-de-etica-fcpc',
							name: 'Código Ética',
							more: [],
						},
						{
							icon: <ArrowRightIcon color="primary" />,
							path: '/manual-de-viaticos-fcpc',
							name: 'Manual de viaticos',
							more: [],
						},
						{
							icon: <ArrowRightIcon color="primary" />,
							path: '/manual-lavado-de-activos',
							name: 'Manual lavado de activos',
							more: [],
						},
						{
							icon: <ArrowRightIcon color="primary" />,
							path: '/manual-contable-fcpc',
							name: 'Manual contable',
							more: [],
						},
						{
							icon: <ArrowRightIcon color="primary" />,
							path: '/manual-de-registro-de-cuenta-individual',
							name: 'Manual de registro de cuenta individual',
							more: [],
						},
						{
							icon: <ArrowRightIcon color="primary" />,
							path: '/manual-para-la-administracion-del-riesgo',
							name: 'Manual para la administración del riesgo',
							more: [],
						},
						{
							icon: <ArrowRightIcon color="primary" />,
							path: '/manual-de-prestaciones-fcpc',
							name: 'Manual de prestaciones',
							more: [],
						},
						{
							icon: <ArrowRightIcon color="primary" />,
							path: '/manual-de-control-interno-fcpc',
							name: 'Manual de control interno',
							more: [],
						},
						{
							icon: <ArrowRightIcon color="primary" />,
							path: '/politica-de-actualizacion-de-manuales',
							name: 'Política de actualización de manuales',
							more: [],
						},
						{
							icon: <ArrowRightIcon color="primary" />,
							path: '/manual-de-compra-venta-de-titulos',
							name: 'Manual de compra venta de títulos',
							more: [],
						},
						{
							icon: <ArrowRightIcon color="primary" />,
							path: '/manual-de-inversiones-no-privativas',
							name: 'Manual de inversiones no privativas',
							more: [],
						},
						{
							icon: <ArrowRightIcon color="primary" />,
							path: '/manual-de-inversiones-privativas',
							name: 'Manual de inversiones privativas',
							more: [],
						},
						{
							icon: <ArrowRightIcon color="primary" />,
							path: '/manual-para-la-devolucion-del-fondo',
							name: 'Manual para la devolucion del fondo',
							more: [],
						},
					],
				},
				{
					icon: <CollectionsBookmarkRoundedIcon color="primary" />,
					path: '/manual-de-calificacion-y-castigo-de-cartera',
					name: 'PUNTO 12 - MANUALES Circular Nro. BIESS-CFCO-2023-0038-C',
					more: [
						{
							icon: <ArrowRightIcon color="primary" />,
							path: '/manual-de-calificacion-y-castigo-de-cartera',
							name: 'Manual de calificación y castigo de cartera',
							more: [],
						},
						{
							icon: <ArrowRightIcon color="primary" />,
							path: '/manual-de-administracion-del-personal',
							name: 'Manual de administración del personal',
							more: [],
						},
						{
							icon: <ArrowRightIcon color="primary" />,
							path: '/manual-de-archivo-y-gestion-documental',
							name: 'Manual de archivo y gestión documental',
							more: [],
						},
						{
							icon: <ArrowRightIcon color="primary" />,
							path: '/politica-de-ejecucion-plan-estrategico',
							name: 'Política de ejecución plan estrategico',
							more: [],
						},
						{
							icon: <ArrowRightIcon color="primary" />,
							path: '/manual-de-gestion-de-asambleas',
							name: 'Manual de gestión de asambleas',
							more: [],
						},
					],
				},
				{
					icon: <CollectionsBookmarkRoundedIcon color="primary" />,
					path: '/convocatoria-primera-asamblea-2023',
					name: 'PUNTO 13 - MANUALES Circulares SB-INCSS-2019-0003-C y SB-INCSS-2019-0003-C',
					more: [
						{
							icon: <ArrowRightIcon color="primary" />,
							path: '/manual-incidencias',
							name: 'manual-incidencias',
							more: [],
						},
						{
							icon: <ArrowRightIcon color="primary" />,
							path: '/manual-cambios-en-el-aplicativo',
							name: 'Manual cambios en el aplicativo',
							more: [],
						},
						{
							icon: <ArrowRightIcon color="primary" />,
							path: '/manual-generacion-de-respaldos',
							name: 'Manual generación de respaldos',
							more: [],
						},
					],
				},
				{
					icon: <PlaylistAddCheckOutlinedIcon color="primary" />,
					path: '/convocatoria-segunda-asamblea-2024',
					name: 'Convocatoria a la segunda asamblea extraordinaria - 2024',
					more: [],
				},
				{
					icon: <PlaylistAddCheckOutlinedIcon color="primary" />,
					path: '/convocatoria-tercera-asamblea-2024',
					name: 'Convocatoria a la tercera asamblea extraordinaria - 2024',
					more: [],
				},
			],
		},
		{
			icon: <CollectionsBookmarkRoundedIcon color="primary" fontSize="small" />,
			path: '/convocatoria-cuarta-asamblea-2024',
			name: 'Convocatoria cuarta asamblea extraordinaria 2024',
			more: [],
		},
		{
			icon: <CollectionsBookmarkRoundedIcon color="primary" fontSize="small" />,
			path: '/convocatoria-primera-asamblea-2025',
			name: 'Convocatoria primera asamblea ordinaria 2025',
			more: [
				{
					icon: <CollectionsBookmarkRoundedIcon color="primary" />,
					path: '/manuales',
					name: 'PUNTO 6 - Manuales',
					more: [
						{
							icon: <ArrowRightIcon color="primary" />,
							path: '/manual-de-inhabilidades-fcpc-32',
							name: 'Manual de inhabilidades',
							more: [],
						},
						{
							icon: <ArrowRightIcon color="primary" />,
							path: '/manual-de-funciones-fcpc-32',
							name: 'Manual de funciones',
							more: [],
						},
						{
							icon: <ArrowRightIcon color="primary" />,
							path: '/codigo-de-etica-fcpc-32',
							name: 'Código de ética',
							more: [],
						},
						{
							icon: <ArrowRightIcon color="primary" />,
							path: '/manual-de-viaticos-fcpc-32',
							name: 'Manual de viaticos',
							more: [],
						},
						{
							icon: <ArrowRightIcon color="primary" />,
							path: '/manual-de-lavado-de-activos-fcpc-32',
							name: 'Manual de lavado de activos',
							more: [],
						},
						{
							icon: <ArrowRightIcon color="primary" />,
							path: '/manual-de-registro-contable-fcpc-32',
							name: 'Manual de registro contable',
							more: [],
						},
						{
							icon: <ArrowRightIcon color="primary" />,
							path: '/manual-de-registro-de-cuenta-individual-fcpc-32',
							name: 'Manual de registro de cuenta individual',
							more: [],
						},
						{
							icon: <ArrowRightIcon color="primary" />,
							path: '/manual-de-inversiones-no-privativas-fcpc-32',
							name: 'Manual de inversiones no privativas',
							more: [],
						},
						{
							icon: <ArrowRightIcon color="primary" />,
							path: '/manual-de-inversiones-privativas-fcpc-32',
							name: 'Manual-de inversiones privativas',
							more: [],
						},
						{
							icon: <ArrowRightIcon color="primary" />,
							path: '/manual-para-la-administracion-y-gestion-del-riesgo-fcpc-32',
							name: 'Manual para la administración y gestión del riesgo',
							more: [],
						},
						{
							icon: <ArrowRightIcon color="primary" />,
							path: '/manual-de-prestaciones-fcpc-32',
							name: 'Manual de prestaciones',
							more: [],
						},
						{
							icon: <ArrowRightIcon color="primary" />,
							path: '/manual-de-control-interno-fcpc-32',
							name: 'Manual de control interno',
							more: [],
						},
						{
							icon: <ArrowRightIcon color="primary" />,
							path: '/politica-de-actualizacion-de-normativa-fcpc-32',
							name: 'Política de actualización de normativa',
							more: [],
						},
						{
							icon: <ArrowRightIcon color="primary" />,
							path: '/manual-de-compra-venta-de-titulos-valores-fcpc-32',
							name: 'Manual de compra venta de títulos valores',
							more: [],
						},
						{
							icon: <ArrowRightIcon color="primary" />,
							path: '/manual-de-calificacion-y-castigo-de-cartera-fcpc-32',
							name: 'Manual de calificación y castigo de cartera',
							more: [],
						},
						{
							icon: <ArrowRightIcon color="primary" />,
							path: '/manual-de-administración-del-personal-del-fondo-fcpc-32',
							name: 'Manual de administración del personal del fondo',
							more: [],
						},
						{
							icon: <ArrowRightIcon color="primary" />,
							path: '/manual-de-archivo-y-gestion-documental-fcpc-32',
							name: 'Manual de archivo y gestion documental',
							more: [],
						},
						{
							icon: <ArrowRightIcon color="primary" />,
							path: '/politica-de-ejecucion-plan-estrategico-y-planificacion-operativa-anual-fcpc-32',
							name: 'Política de ejecución plan estratégico y planificación operativa anual',
							more: [],
						},
						{
							icon: <ArrowRightIcon color="primary" />,
							path: '/manual-de-gestión-de-asambleas-fcpc-32',
							name: 'Manual de gestión de asambleas',
							more: [],
						},
						{
							icon: <ArrowRightIcon color="primary" />,
							path: '/manual-de-tecnologias-incidencias-fcpc-32',
							name: 'Manual de tecnologias incidencias',
							more: [],
						},
						{
							icon: <ArrowRightIcon color="primary" />,
							path: '/manual-de-tecnologias-cambios-en-el-aplicativo-contable-fcpc-32',
							name: 'Manual de tecnologias cambios en el aplicativo contable',
							more: [],
						},
						{
							icon: <ArrowRightIcon color="primary" />,
							path: '/manual-de-tecnologias-generacion-de-respaldos-fcpc-32',
							name: 'Manual de tecnologías generación de respaldos',
							more: [],
						},
						{
							icon: <ArrowRightIcon color="primary" />,
							path: '/procedimiento-para-tratamiento-de-quejas-y-sugerencias-fcpc-32',
							name: 'Procedimiento para tratamiento de quejas y sugerencias',
							more: [],
						},
					],
				},
				{
					icon: <ArrowRightIcon color="primary" />,
					path: '/manual-circular',
					name: 'Manual circular',
					more: [],
				},
			],
		},
		{
			icon: <CollectionsBookmarkRoundedIcon color="primary" fontSize="small" />,
			path: '/convocatoria-segunda-asamblea-2025',
			name: 'Convocatoria segunda asamblea ordinaria 2025',
			more: [
				{
					icon: <CollectionsBookmarkRoundedIcon color="primary" />,
					path: 'segunda-asamblea/manuales',
					name: 'PUNTO 6 - Manuales',
					more: [
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
							name: 'Manual-de inversiones privativas',
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
							name: 'Política de actualización de normativa',
							more: [],
						},
						{
							icon: <ArrowRightIcon color="primary" />,
							path: '/segunda-asamblea/manual-de-compra-venta-de-titulos-valores-fcpc-31',
							name: 'Manual de compra venta de títulos valores',
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
					],
				},
				{
					icon: <ArrowRightIcon color="primary" />,
					path: '/segunda-asamblea/manual-circular',
					name: 'Manual circular',
					more: [],
				},
			],
		},

		{
			icon: <CollectionsBookmarkRoundedIcon color="primary" fontSize="small" />,
			path: '/convocatoria-tercera-asamblea-2025',
			name: 'Convocatoria tercera asamblea ordinaria 2025',
			more: [
				{
					icon: <ArrowRightIcon color="primary" />,
					path: '/convocatoria-tercera-asamblea-2025',
					name: 'Convocatoria tercera asamblea ordinaria 2025',
					more: [
						{
							icon: <ArrowRightIcon color="primary" />,
							path: 'tercera-asamblea/manual-prestaciones',
							name: 'Manual de prestaciones',
							more: [],
						},
					],
				},
			],
		},
	];

	const drawer = (
		<div>
			<div
				className={classes.toolbar}
				style={{ display: 'flex', justifyContent: 'right', flexDirection: 'row-reverse' }}
			>
				<IconButton aria-label="" onClick={handleDrawerToggle}>
					<CloseRoundedIcon color="primary" />
				</IconButton>
			</div>
			<Divider />
			<List dense>
				{routes.map((item, index) => (
					<div key={index}>
						<ListItem
							selected={selectedIndex === item.name}
							button
							onClick={(e) => {
								handleDrawerToggle();
								handleListItemClick(e, item.name);
							}}
							component={Link}
							to={item.path}
						>
							<ListItemIcon>{item.icon}</ListItemIcon>
							<ListItemText primary={item.name} />
						</ListItem>
						<Divider />
						<List dense>
							{item.more.map((option, i) => (
								<div key={`sub${i}`}>
									<ListItem
										selected={selectedIndex === option.name}
										button
										component={Link}
										onClick={(e) => {
											handleDrawerToggle();
											handleListItemClick(e, option.name);
										}}
										to={option.path}
										className={classes.nested}
									>
										<ListItemIcon>{option.icon}</ListItemIcon>
										<ListItemText primary={option.name} />
									</ListItem>
									<Divider />
									<List dense>
										{option.more &&
											option.more.map((subOption, i) => (
												<div key={`sub${i}`}>
													<ListItem
														selected={selectedIndex === subOption.name}
														button
														component={Link}
														onClick={(e) => {
															handleDrawerToggle();
															handleListItemClick(e, subOption.name);
														}}
														to={subOption.path}
														className={classes.nested}
													>
														<ListItemIcon>{subOption.icon}</ListItemIcon>
														<ListItemText primary={subOption.name} />
													</ListItem>
												</div>
											))}
									</List>
								</div>
							))}
						</List>
					</div>
				))}
			</List>
		</div>
	);

	return (
		<div className={classes.root}>
			<Router>
				<NavbarHiden handleDrawerToggle={handleDrawerToggle} />
				<nav className={classes.drawer} aria-label="mailbox folders">
					{/* The implementation can be swapped with js to avoid SEO duplication of links. */}
					<Hidden smUp implementation="css">
						<Drawer
							// container={container}
							variant="temporary"
							anchor="right"
							open={mobileOpen}
							onClose={handleDrawerToggle}
							classes={{
								paper: classes.drawerPaper,
							}}
							ModalProps={{
								keepMounted: true, // Better open performance on mobile.
							}}
						>
							{drawer}
						</Drawer>
					</Hidden>
				</nav>
				<main className={classes.content}>
					<div className={classes.toolbar} />
					<Switch>
						<Route path="/" exact={true}>
							<Home />
						</Route>
						<Route path="/institucion" exact={true}>
							<Institution />
						</Route>
						<Route path="/codigoEtica" exact={true}>
							<Ethics />
						</Route>
						<Route path="/educacionFinanciera" exact={true}>
							<Education />
						</Route>
						<Route path="/introduccion" exact={true}>
							<Introduction />
						</Route>
						<Route path="/conceptosJustificación" exact={true}>
							<ConceptosJustificacion />
						</Route>
						<Route path="/disposionesPreliminares" exact={true}>
							<DisposionesPreliminares />
						</Route>
						<Route path="/normas" exact={true}>
							<Normas />
						</Route>
						<Route path="/prohibicion" exact={true}>
							<Prohibicion />
						</Route>
						<Route path="/conflictos" exact={true}>
							<Conflictos />
						</Route>
						<Route path="/actividadesPoliticas" exact={true}>
							<ActividadesPoliticas />
						</Route>
						<Route path="/medioAmbiente" exact={true}>
							<MedioAmbiente />
						</Route>
						<Route path="/comiteEtica" exact={true}>
							<ComiteEtica />
						</Route>
						<Route path="/cumplimiento" exact={true}>
							<Cumplimiento />
						</Route>
						<Route path="/medidasDisciplinarias" exact={true}>
							<MedidasDisciplinarias />
						</Route>
						<Route path="/accesoPoliticas" exact={true}>
							<AccesoPoliticas />
						</Route>
						<Route path="/planificacionEstrategica" exact={true}>
							<Planificacion />
						</Route>
						<Route path="/personal" exact={true}>
							<Personal />
						</Route>

						<Route path="/contacto" exact={true}>
							<Contact />
						</Route>

						<Route path="/gestionperiodo2015-2021" exact={true}>
							<Gestion />
						</Route>
						<Route path="/ley-orgánica-de-proteccion-de-datos-personales" exact={true}>
							<Ley />
						</Route>
						<Route path="/anexo1" exact={true}>
							<Anexo1 />
						</Route>
						<Route path="/quejas-y-sugerencias" exact={true}>
							<Quejas />
						</Route>
						<Route path="/buzon-de-quejas" exact={true}>
							<BuzonQuejas />
						</Route>
						<Route path="/proceso-de-concurso-de-meritos-y-oposicion" exact={true}>
							<Bases />
						</Route>
						<Route path="/normas-para-calificacion" exact={true}>
							<NormasCalificacion />
						</Route>
						<Route
							path="/convocatoria-primera-asamblea-general-ordinaria-2023-fcpc-gadmo"
							exact={true}
						>
							<ConvocatoriaAsamblea />
						</Route>
						<Route
							path="/segunda-asamblea-general-extraordinaria-2023-03-de-mayo-2023"
							exact={true}
						>
							<ConvocatoriaAsamblea2 />
						</Route>
						<Route path="/encuesta-de-educación-financiera" exact={true}>
							<Encuesta />
						</Route>
						<Route path="/convocatoria-tercera-asamblea-2023" exact={true}>
							<ConvocatoriaTercera />
						</Route>

						{/* ConvocatoriaPrimeraAsamble2024 */}

						<Route path="/convocatoria-primera-asamblea-2024" exact={true}>
							<ConvocatoriaPrimeraAsamblea2024 />
						</Route>
						<Route path="/manual-de-inhabilidades-fcpc-31" exact={true}>
							<Manual />
						</Route>
						<Route path="/resolucion-nro-sb-2023-02208" exact={true}>
							<Resolucion />
						</Route>
						<Route path="/oficio-nro.sb-dcfcpc-2024-0134-o" exact={true}>
							<Oficio />
						</Route>
						<Route path="/manual-de-funciones-fcpc" exact={true}>
							<ManualFunciones />
						</Route>
						<Route path="/codigo-de-etica-fcpc" exact={true}>
							<CodigoEtica />
						</Route>
						<Route path="/codigo-de-etica-fcpc" exact={true}>
							<CodigoEtica />
						</Route>
						<Route path="/manual-de-viaticos-fcpc" exact={true}>
							<ManualViaticos />
						</Route>
						<Route path="/manual-lavado-de-activos" exact={true}>
							<ManualLavadoActivos />
						</Route>
						<Route path="/manual-contable-fcpc" exact={true}>
							<ManualContable />
						</Route>
						<Route path="/manual-de-registro-de-cuenta-individual" exact={true}>
							<ManualRegistroCuentaIndividual />
						</Route>
						<Route path="/manual-para-la-administracion-del-riesgo" exact={true}>
							<ManualAdministracionRiesgo />
						</Route>
						<Route path="/manual-para-la-administracion-del-riesgo" exact={true}>
							<ManualAdministracionRiesgo />
						</Route>
						<Route path="/manual-de-prestaciones-fcpc" exact={true}>
							<ManualPrestaciones />
						</Route>
						<Route path="/manual-de-control-interno-fcpc" exact={true}>
							<ManualControlInterno />
						</Route>
						<Route path="/politica-de-actualizacion-de-manuales" exact={true}>
							<PoliticaActualizacionManuales />
						</Route>
						<Route path="/manual-de-compra-venta-de-titulos" exact={true}>
							<ManualCompraVentaTitulos />
						</Route>
						<Route path="/manual-de-inversiones-no-privativas" exact={true}>
							<ManualInversionesNoPrivativas />
						</Route>
						<Route path="/manual-de-inversiones-privativas" exact={true}>
							<ManualInversionesPrivativas />
						</Route>
						<Route path="/manual-para-la-devolucion-del-fondo" exact={true}>
							<ManualDevolucionFondo />
						</Route>
						<Route path="/manual-de-calificacion-y-castigo-de-cartera" exact={true}>
							<ManualCalificacion />
						</Route>
						<Route path="/manual-de-administracion-del-personal" exact={true}>
							<ManualAdministracionDelPersonal />
						</Route>
						<Route path="/manual-de-archivo-y-gestion-documental" exact={true}>
							<ManualArchivoYGEstionDocumental />
						</Route>
						<Route path="/politica-de-ejecucion-plan-estrategico" exact={true}>
							<PoliticaEjecucionPlanEstrategico />
						</Route>
						<Route path="/manual-de-gestion-de-asambleas" exact={true}>
							<ManualGestionAsambleas />
						</Route>
						<Route path="/manual-incidencias" exact={true}>
							<ManualIncidencias />
						</Route>
						<Route path="/manual-cambios-en-el-aplicativo" exact={true}>
							<ManualCambiosAplicativo />
						</Route>
						<Route path="/manual-cambios-en-el-aplicativo" exact={true}>
							<ManualCambiosAplicativo />
						</Route>
						<Route path="/manual-generacion-de-respaldos" exact={true}>
							<ManualGeneracionRespaldos />
						</Route>

						{/* SEGUNDA CONVOCATORIA */}

						<Route path="/convocatoria-segunda-asamblea-2024" exact={true}>
							<ConvocatoriaSegundaAsamblea2024 />
						</Route>

						{/* TERCERA CONVOCATORIA */}

						<Route path="/convocatoria-tercera-asamblea-2024" exact={true}>
							<ConvocatoriaTerceraAsamblea2024 />
						</Route>

						<Route path="/convocatoria-cuarta-asamblea-2024" exact={true}>
							<ConvocatoriaCuartaAsamblea2024 />
						</Route>

						{/* ConvocatoriaPrimeraAsamble2025 */}

						<Route path="/convocatoria-primera-asamblea-2025">
							<ConvocatoriaPrimeraAsamblea2025 />
						</Route>
						<Route path="/manual-de-inhabilidades-fcpc-32">
							<ManualInhabilidades />
						</Route>
						<Route path="/manual-de-funciones-fcpc-32">
							<ManualDeFunciones />
						</Route>
						<Route path="/codigo-de-etica-fcpc-32">
							<CodigoDeEtica />
						</Route>
						<Route path="/manual-de-viaticos-fcpc-32">
							<ManualdeViaticos />
						</Route>
						<Route path="/manual-de-lavado-de-activos-fcpc-32">
							<ManualDeLavadoDeActivos />
						</Route>
						<Route path="/manual-de-registro-contable-fcpc-32">
							<ManualDeRegistroContable />
						</Route>
						<Route path="/manual-de-registro-de-cuenta-individual-fcpc-32">
							<ManualDeRegistroContableIndividual />
						</Route>
						<Route path="/manual-de-inversiones-no-privativas-fcpc-32">
							<ManualdeInversionesNoPrivativas />
						</Route>
						<Route path="/manual-de-inversiones-privativas-fcpc-32">
							<ManualdeInversionesPrivativas />
						</Route>
						<Route path="/manual-para-la-administracion-y-gestion-del-riesgo-fcpc-32">
							<ManualParaLaAdministracionYGestionDelRiesgo />
						</Route>
						<Route path="/manual-de-prestaciones-fcpc-32">
							<ManualDePrestaciones />
						</Route>
						<Route path="/manual-de-control-interno-fcpc-32">
							<ManualDeControlInterno />
						</Route>
						<Route path="/politica-de-actualizacion-de-normativa-fcpc-32">
							<PoliticaDeActualizacionDeNormativa />
						</Route>
						<Route path="/manual-de-compra-venta-de-titulos-valores-fcpc-32">
							<ManualDeCompraVentaDeTitulosValores />
						</Route>
						<Route path="/manual-de-calificacion-y-castigo-de-cartera-fcpc-32">
							<ManualDeCalificacionYCastigoDeCartera />
						</Route>
						<Route path="/manual-de-administración-del-personal-del-fondo-fcpc-32">
							<ManualDeAdministracionDelPersonalDelFondo />
						</Route>
						<Route path="/manual-de-archivo-y-gestion-documental-fcpc-32">
							<ManualDeArchivoYGestionDocumental />
						</Route>
						<Route path="/politica-de-ejecucion-plan-estrategico-y-planificacion-operativa-anual-fcpc-32">
							<PoliticaDeEjecucion />
						</Route>
						<Route path="/manual-de-gestión-de-asambleas-fcpc-32">
							<ManualDeGestionDeAsambleas />
						</Route>
						<Route path="/manual-de-tecnologias-incidencias-fcpc-32">
							<ManualDeTecnologiasIncidencias />
						</Route>
						<Route path="/manual-de-tecnologias-cambios-en-el-aplicativo-contable-fcpc-32">
							<ManualDeTecnologiasCambiosAplicativoContable />
						</Route>
						<Route path="/manual-de-tecnologias-generacion-de-respaldos-fcpc-32">
							<ManualDeTecnologiasGeneracionDeRespaldos />
						</Route>
						<Route path="/procedimiento-para-tratamiento-de-quejas-y-sugerencias-fcpc-32">
							<ProcedimientoParaQuejas />
						</Route>

						<Route path="/manual-circular">
							<ManualCircular />
						</Route>

						<Route path="/manuales">
							<Manuales />
						</Route>

						{/* ConvocatoriaSegundaAsamble2025 */}

						<Route path="/convocatoria-segunda-asamblea-2025">
							<ConvocatoriaSegundaAsamblea2025 />
						</Route>
						<Route path="/segunda-asamblea/manual-de-inhabilidades-fcpc-31">
							<ManualInhabilidades2 />
						</Route>
						<Route path="/segunda-asamblea/manual-de-funciones-fcpc-31">
							<ManualDeFunciones2 />
						</Route>
						<Route path="/segunda-asamblea/codigo-de-etica-fcpc-31">
							<CodigoDeEtica2 />
						</Route>
						<Route path="/segunda-asamblea/manual-de-viaticos-fcpc-31">
							<ManualdeViaticos2 />
						</Route>
						<Route path="/segunda-asamblea/manual-de-lavado-de-activos-fcpc-31">
							<ManualDeLavadoDeActivos2 />
						</Route>
						<Route path="/segunda-asamblea/manual-de-registro-contable-fcpc-31">
							<ManualDeRegistroContable2 />
						</Route>
						<Route path="/segunda-asamblea/manual-de-registro-de-cuenta-individual-fcpc-31">
							<ManualDeRegistroContableIndividual2 />
						</Route>
						<Route path="/segunda-asamblea/manual-de-inversiones-no-privativas-fcpc-31">
							<ManualdeInversionesNoPrivativas2 />
						</Route>
						<Route path="/segunda-asamblea/manual-de-inversiones-privativas-fcpc-31">
							<ManualdeInversionesPrivativas2 />
						</Route>
						<Route path="/segunda-asamblea/manual-para-la-administracion-y-gestion-del-riesgo-fcpc-31">
							<ManualParaLaAdministracionYGestionDelRiesgo2 />
						</Route>
						<Route path="/segunda-asamblea/manual-de-prestaciones-fcpc-31">
							<ManualDePrestaciones2 />
						</Route>
						<Route path="/segunda-asamblea/manual-de-control-interno-fcpc-31">
							<ManualDeControlInterno2 />
						</Route>
						<Route path="/segunda-asamblea/politica-de-actualizacion-de-normativa-fcpc-31">
							<PoliticaDeActualizacionDeNormativa2 />
						</Route>
						<Route path="/segunda-asamblea/manual-de-compra-venta-de-titulos-valores-fcpc-31">
							<ManualDeCompraVentaDeTitulosValores2 />
						</Route>
						<Route path="/segunda-asamblea/manual-de-calificacion-y-castigo-de-cartera-fcpc-31">
							<ManualDeCalificacionYCastigoDeCartera2 />
						</Route>
						<Route path="/segunda-asamblea/manual-de-administración-del-personal-del-fondo-fcpc-31">
							<ManualDeAdministracionDelPersonalDelFondo2 />
						</Route>
						<Route path="/segunda-asamblea/manual-de-archivo-y-gestion-documental-fcpc-31">
							<ManualDeArchivoYGestionDocumental2 />
						</Route>
						<Route path="/segunda-asamblea/politica-de-ejecucion-plan-estrategico-y-planificacion-operativa-anual-fcpc-31">
							<PoliticaDeEjecucion2 />
						</Route>
						<Route path="/segunda-asamblea/manual-de-gestión-de-asambleas-fcpc-31">
							<ManualDeGestionDeAsambleas2 />
						</Route>
						<Route path="/segunda-asamblea/manual-de-tecnologias-incidencias-fcpc-31">
							<ManualDeTecnologiasIncidencias2 />
						</Route>
						<Route path="/segunda-asamblea/manual-de-tecnologias-cambios-en-el-aplicativo-contable-fcpc-31">
							<ManualDeTecnologiasCambiosAplicativoContable2 />
						</Route>
						<Route path="/segunda-asamblea/manual-de-tecnologias-generacion-de-respaldos-fcpc-31">
							<ManualDeTecnologiasGeneracionDeRespaldos2 />
						</Route>
						<Route path="/segunda-asamblea/procedimiento-para-tratamiento-de-quejas-y-sugerencias-fcpc-31">
							<ProcedimientoParaQuejas2 />
						</Route>

						<Route path="/segunda-asamblea/manual-circular">
							<ManualCircular2 />
						</Route>

						<Route path="/segunda-asamblea/manuales">
							<Manuales2 />
						</Route>

						{/* Tercera convocatoria 2025 */}
						<Route path="/convocatoria-tercera-asamblea-2025">
							<ConvocatoriaTerceraAsamblea2025 />
						</Route>

						<Route path="/tercera-asamblea/manual-prestaciones">
							<ManuualPrestaciones2025 />
						</Route>

						<Route path="/politicas-de-inversion-privativas">
							<PoliticasDeInversion />
						</Route>

						<Route path="*">
							<div className={classes.notFound}>
								<img src={NotFound} alt="404" width="200" />
								<Typography variant="h5" color="primary" align="center">
									Página no encontrada...
								</Typography>
								<Button
									variant="outlined"
									color="primary"
									style={{ margin: 10 }}
									onClick={() => (window.location.href = '/  ')}
								>
									REGRESAR
								</Button>
							</div>
						</Route>
					</Switch>
					<Footer className={classes.backgroundFooter}>
						<center>
							<Typography variant="body1" color="primary">
								Copyright © {new Date().getFullYear()} fcpc-GADMO-OTAVALO
								{/* <span>
                  <a href="https://xapgreen.com/"> XAPgreen</a>
                </span> */}
							</Typography>
						</center>
					</Footer>
					<Lines height={10} />
				</main>
			</Router>
		</div>
	);
};
