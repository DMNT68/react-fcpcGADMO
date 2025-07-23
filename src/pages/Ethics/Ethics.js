import { Button, Container, Grow, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import { Helmet } from 'react-helmet';
import { Lines } from '../../components/Lines';

export const Ethics = () => {
	const classes = useStyles();

	return (
		<>
			<Helmet>
				<title>Código de Ética y Buen Gobierno | fcpcGADMO</title>
			</Helmet>
			<Grow in={true} style={{ transformOrigin: '0 0 0' }} {...(true ? { timeout: 800 } : {})}>
				<Container maxWidth="md">
					<Typography variant="h3" color="initial" align="center" className={classes.title}>
						CÓDIGO DE ÉTICA Y BUEN GOBIERNO
					</Typography>

					<Typography variant="h6" color="textSecondary" align="center">
						FCPCGADMO-EMAPAO
					</Typography>
					<Lines height={3} style={{ marginTop: 10, marginBottom: 10 }} />
					<Typography variant="h5" color="initial" className={classes.subTitle} align="center">
						FONDO DE CESANTÍA PRIVADO DE LOS EMPLEADOS, TRABAJADORES Y DOCENTES DEL GOBIERNO
						MUNICIPAL DE OTAVALO FCPC
					</Typography>
					<Typography variant="h6" color="initial" align="center">
						Ingeniera María Isabel Realpe Grijalva
					</Typography>
					<Typography variant="body1" color="initial" align="center">
						Representante Legal
					</Typography>
					<Typography variant="body2" color="textSecondary" align="center">
						Resolución No. SB-DTL-2017-1098
					</Typography>
					<Typography variant="body2" color="textSecondary" align="center">
						Oficio No. BIESS-OF-GGEN-2019-2017
					</Typography>
					<Typography variant="h5" color="initial" className={classes.subTitle} align="center">
						CONSIDERANDO:
					</Typography>
					<Typography
						variant="body1"
						color="initial"
						component="p"
						align="justify"
						className={classes.parragraph}
					>
						<span style={{ fontWeight: 'bold' }}>QUE,</span> el Art. 83 de la Constitución de la
						República en su numeral 12 establece como deberes y responsabilidades de los
						ecuatorianos "ejercer la profesión u oficio con sujeción a la ética”.
					</Typography>
					<Typography
						variant="body1"
						color="initial"
						component="p"
						align="justify"
						className={classes.parragraph}
					>
						<span style={{ fontWeight: 'bold' }}>QUE,</span> el Artículo 306 de la Ley de Seguridad
						Social, reformado por el Código Orgánico Monetario y Financiero dispone que las
						instituciones públicas y privadas de seguridad social, incluyendo los fondos
						complementarios previsionales públicos o privados, estarán sujetos a la regulación,
						supervisión y vigilancia de la Superintendencia de Bancos, la misma que según el
						artículo 213 de la Constitución de la República del Ecuador, controlará que las
						actividades económicas y los servicios que brinden dichas instituciones, atiendan al
						interés general y se sujeten a las normas legales vigentes;
					</Typography>
					<Typography
						variant="body1"
						color="initial"
						component="p"
						align="justify"
						className={classes.parragraph}
					>
						<span style={{ fontWeight: 'bold' }}>QUE,</span> de conformidad con lo dispuesto en el
						Artículo 8 de la Sección de las normas que regulan la constitución, funcionamiento y
						liquidación de los Fondos Complementarios Previsionales Cerrados, constante en la
						Codificación de Resoluciones Monetarias, Financieras, de Valores y Seguros, emitida por
						los Miembros de la Junta de Política y Regulación Monetaria y Financiera, mediante
						Resolución No. 375-2017-F, 18-05-2017, publicada en el Suplemento del Registro Oficial
						No. 22 de 26 de junio del 2017 dispone: “Los Fondos Complementarios Previsionales
						Cerrados - FCPCs, se integran con el patrimonio autónomo constituido a favor de los
						partícipes a través del ahorro voluntario de sus afiliados y del aporte voluntario de
						sus empleadores privados. El vínculo cerrado al cual responde el fondo se genera a
						partir de la relación laboral de sus partícipes con instituciones públicas, privadas o
						mixtas, o con un gremio profesional u ocupacional y tiene la finalidad de mejorar la
						cuantía o las condiciones de las prestaciones correspondientes al seguro general
						obligatorio, o no cubiertas por éste.”;
					</Typography>
					<Typography
						variant="body1"
						color="initial"
						component="p"
						align="justify"
						className={classes.parragraph}
					>
						<span style={{ fontWeight: 'bold' }}>QUE,</span> de acuerdo a lo establecido en el
						Artículo 37 del cuerpo codificado antes indicado, determina que, el representante legal
						para ser posesionado previamente deberá obtener la calificación de la Superintendencia
						de Bancos;
					</Typography>
					<Typography
						variant="body1"
						color="initial"
						component="p"
						align="justify"
						className={classes.parragraph}
					>
						<span style={{ fontWeight: 'bold' }}>QUE,</span> el Artículo 40 del cuerpo codificado
						citado, determina las atribuciones del Representante Legal, entre otras, responder por
						la marcha administrativa, operativa y financiera del fondo complementario previsional
						cerrado e informar mensualmente al consejo de administración de los resultados de su
						gestión; y, mantener los controles y procedimientos adecuados para asegurar el control
						interno;
					</Typography>
					<Typography
						variant="body1"
						color="initial"
						component="p"
						align="justify"
						className={classes.parragraph}
					>
						<span style={{ fontWeight: 'bold' }}>QUE,</span> el Artículo 132 de la Resolución No.
						375-2017-F, 18-05-2017, publicada en el Suplemento del Registro Oficial No. 22 de 26 de
						junio del 2017, expedida por la Junta de Política y Regulación Monetaria y Financiera,
						determina que, el representante legal será designado por el Gerente General del Banco
						del Instituto Ecuatoriano de Seguridad Social, y ejercerá las atribuciones generales
						establecidas en el artículo 40 de este capítulo;
					</Typography>
					<Typography
						variant="body1"
						color="initial"
						component="p"
						align="justify"
						className={classes.parragraph}
					>
						<span style={{ fontWeight: 'bold' }}>QUE,</span> el numeral 1 de la disposición legal
						invocada establece que es atribución del Representante Legal,
					</Typography>
					<Typography
						variant="body1"
						color="initial"
						component="p"
						align="justify"
						className={classes.parragraph}
					>
						“1. Responder por la marcha administrativa, operativa y financiera del fondo
						complementario e informar trimestralmente por escrito al BIESS de los resultados de su
						gestión;”;
					</Typography>
					<Typography
						variant="body1"
						color="initial"
						component="p"
						align="justify"
						className={classes.parragraph}
					>
						<span style={{ fontWeight: 'bold' }}>QUE,</span> mediante resolución No.
						SB-DTL-2017-1098 de 26 de diciembre del 2017, la Abogada Rossana Loor Aveiga, Directora
						de Trámite Legales encargada de la Superintendencia de Bancos resuelve declarar la
						habilidad legal de la Ingeniera María Isabel Realpe Grijalva, como Representante Legal
						del FONDO DE CESANTIA PRIVADO DE LOS EMPLEADOS, TRABAJADORES Y DOCENTES DEL GOBIERNO
						MUNICIPAL DE OTAVALO FCPC;
					</Typography>
					<Typography
						variant="body1"
						color="initial"
						component="p"
						align="justify"
						className={classes.parragraph}
					>
						<span style={{ fontWeight: 'bold' }}>QUE,</span> Mediante Oficio No.
						BIESS-OF-GGEN-2019-2017 de 18 de diciembre del 2017, suscrito por el Magister Francisco
						Xavier Vizcaíno Zurita, Gerente General Encargado del BIESS, procede a nombra a la
						Ingeniera María Isabel Realpe Grijalva, Representante Legal del FONDO DE CESANTIA
						PRIVADO DE LOS EMPLEADOS, TRABAJADORES Y DOCENTES DEL GOBIERNO MUNICIPAL DE OTAVALO
						FCPC, desde la fecha en cual la Superintendencia de Bancos confiera la calificación de
						idoneidad legal para el ejercicio de esas funciones, las cuales ejercerá de acuerdo a la
						legislación vigente, regulaciones emitidas por la Junta de Política y Regulación
						Monetaria y Financiera; resoluciones de la Superintendencia de Bancos; y, el estatuto y
						normativa aplicable de dicho ente provisional;
					</Typography>
					<Typography
						variant="body1"
						color="initial"
						component="p"
						align="justify"
						className={classes.parragraph}
					>
						<span style={{ fontWeight: 'bold' }}>QUE,</span> es necesario dictar el Código de Ética
						del Fondo, para el fiel cumplimiento de los objetivos establecidos, los mismos que deben
						estar enmarcados en decisiones que protejan la legalidad, la corrección, el respeto y la
						justicia de todos sus integrantes; y,
					</Typography>
					<Typography
						variant="body1"
						color="initial"
						component="p"
						align="justify"
						className={classes.parragraph}
					>
						En ejercicio de las disposiciones constitucionales y legales.
					</Typography>
					<Typography variant="h5" color="initial" className={classes.subTitle} align="center">
						RESUELVE:
					</Typography>
					<Typography
						variant="body1"
						color="initial"
						component="p"
						align="justify"
						className={classes.parragraph}
					>
						Expedir el siguiente Código de Ética del{' '}
						<span style={{ fontWeight: 'bold' }}>
							FONDO DE CESANTÍA PRIVADO DE LOS EMPLEADOS, TRABAJADORES Y DOCENTES DEL GOBIERNO
							MUNICIPAL DE OTAVALO FCPC.
						</span>
					</Typography>
					<Typography variant="h6" color="initial" className={classes.subTitle}>
						TÍTULO I
					</Typography>
					<Typography variant="h6" color="initial">
						Generalidades y Definiciones:
					</Typography>
					<Typography
						variant="body1"
						color="initial"
						component="li"
						align="justify"
						className={classes.list}
					>
						<Button
							variant="text"
							size="small"
							color="primary"
							onClick={() => (window.location.href = '/introduccion')}
						>
							Capítulo I - Introducción
						</Button>
					</Typography>
					<Typography
						variant="body1"
						color="initial"
						component="li"
						align="justify"
						className={classes.list}
					>
						<Button
							variant="text"
							size="small"
							color="primary"
							onClick={() => (window.location.href = '/conceptosJustificación')}
						>
							Capítulo II - Conceptos y Justificación
						</Button>
					</Typography>
					<Typography
						variant="body1"
						color="initial"
						component="li"
						align="justify"
						className={classes.list}
					>
						<Button
							variant="text"
							size="small"
							color="primary"
							onClick={() => (window.location.href = '/disposionesPreliminares')}
						>
							Capítulo III - Disposiones Preliminares
						</Button>
					</Typography>
					<Typography
						variant="body1"
						color="initial"
						component="li"
						align="justify"
						className={classes.list}
					>
						<Button
							variant="text"
							size="small"
							color="primary"
							onClick={() => (window.location.href = '/normas')}
						>
							Capítulo IV - Normas en el servicio
						</Button>
					</Typography>
					<Typography
						variant="body1"
						color="initial"
						component="li"
						align="justify"
						className={classes.list}
					>
						<Button
							variant="text"
							size="small"
							color="primary"
							onClick={() => (window.location.href = '/prohibicion')}
						>
							Capítulo V - Prohibición de sobornos
						</Button>
					</Typography>
					<Typography
						variant="body1"
						color="initial"
						component="li"
						align="justify"
						className={classes.list}
					>
						<Button
							variant="text"
							size="small"
							color="primary"
							onClick={() => (window.location.href = '/conflictos')}
						>
							Capítulo VI - CONFLICTOS DE INTERESES
						</Button>
					</Typography>
					<Typography
						variant="body1"
						color="initial"
						component="li"
						align="justify"
						className={classes.list}
					>
						<Button
							variant="text"
							size="small"
							color="primary"
							onClick={() => (window.location.href = '/actividadesPoliticas')}
						>
							Capítulo VII - Actividades políticas
						</Button>
					</Typography>
					<Typography
						variant="body1"
						color="initial"
						component="li"
						align="justify"
						className={classes.list}
					>
						<Button
							variant="text"
							size="small"
							color="primary"
							onClick={() => (window.location.href = '/medioAmbiente')}
						>
							Capítulo VIII - MEDIO AMBIENTE
						</Button>
					</Typography>
					<Typography variant="h6" color="initial" className={classes.subTitle}>
						TÍTULO II
					</Typography>
					<Typography
						variant="body1"
						color="initial"
						component="li"
						align="justify"
						className={classes.list}
					>
						<Button
							variant="text"
							size="small"
							color="primary"
							onClick={() => (window.location.href = '/comiteEtica')}
						>
							Capítulo I - COMITÉ DE ÉTICA
						</Button>
					</Typography>
					<Typography
						variant="body1"
						color="initial"
						component="li"
						align="justify"
						className={classes.list}
					>
						<Button
							variant="text"
							size="small"
							color="primary"
							onClick={() => (window.location.href = '/cumplimiento')}
						>
							Capítulo II - CUMPLIMIENTO
						</Button>
					</Typography>
					<Typography
						variant="body1"
						color="initial"
						component="li"
						align="justify"
						className={classes.list}
					>
						<Button
							variant="text"
							size="small"
							color="primary"
							onClick={() => (window.location.href = '/medidasDisciplinarias')}
						>
							Capítulo III - MEDIDAS DISCIPLINARIAS
						</Button>
					</Typography>
					<Typography
						variant="body1"
						color="initial"
						component="li"
						align="justify"
						className={classes.list}
					>
						<Button
							variant="text"
							size="small"
							color="primary"
							onClick={() => (window.location.href = '/accesoPoliticas')}
						>
							Capítulo IV - ACCESO A LAS POLÍTICAS, etc
						</Button>
					</Typography>
					<Typography variant="h5" color="initial" className={classes.subTitle} align="center">
						DISPOSICIONES GENERALES
					</Typography>
					<Typography
						variant="body1"
						color="initial"
						component="p"
						align="justify"
						className={classes.parragraph}
					>
						<span style={{ fontWeight: 'bold' }}>PRIMERA.-</span> Para conocimiento y aplicación de
						todos los partícipes que conforman el Fondo, con la finalidad de que se comprometan a
						cumplir y hacer cumplir, dentro de las diferentes actividades para buen desarrollo del
						Fondo.
					</Typography>
					<Typography
						variant="body1"
						color="initial"
						component="p"
						align="justify"
						className={classes.parragraph}
					>
						<span style={{ fontWeight: 'bold' }}>SEGUNDA.-</span> El propósito del Código de Ética
						es el orientar las normas que rigen la relaciones, derechos y obligaciones de las partes
						relacionadas con el Fondo, sus reformas se realizarán conforme a lo que establece el
						Estatuto y de manera oportuna por sus partícipes.
					</Typography>
					<Typography variant="h5" color="initial" className={classes.subTitle} align="center">
						DISPOSICIÓN FINAL
					</Typography>
					<Typography
						variant="body1"
						color="initial"
						component="p"
						align="justify"
						className={classes.parragraph}
					>
						La presente Resolución entrará en vigencia a partir de la fecha de suscripción, y se
						pondrá en conocimiento de la Asamblea General de Partícipes para los efectos legales
						pertinentes.
					</Typography>
					<Typography
						variant="body1"
						color="initial"
						component="p"
						align="justify"
						className={classes.parragraph}
					>
						Dado y suscrito en la Ciudad de Ibarra, a los ocho días del mes de agosto del año dos
						mil diecinueve.
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
}));
