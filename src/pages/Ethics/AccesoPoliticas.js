import { Container, Grow, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import { Helmet } from 'react-helmet';
import { Lines } from '../../components/Lines';

export const AccesoPoliticas = () => {
	const classes = useStyles();

	return (
		<>
			<Helmet>
				<title>Acceso a las políticas | fcpcGADMO</title>
			</Helmet>
			<Grow in={true} style={{ transformOrigin: '0 0 0' }} {...(true ? { timeout: 800 } : {})}>
				<Container maxWidth="md">
					<Typography variant="h3" color="initial" align="center" className={classes.title}>
						ACCESO A LAS POLÍTICAS, PROCEDIMIENTOS, DIRECTRICES Y CANALES DE INFORMACIÓN Y
						COMUNICACIÓN
					</Typography>
					<Lines height={3} style={{ marginTop: 10, marginBottom: 10 }} />

					<Typography variant="h5" color="initial" className={classes.subTitle}>
						ARTÍCULO 31.
					</Typography>
					<Typography
						variant="body1"
						color="initial"
						component="p"
						align="justify"
						className={classes.parragraph}
					>
						Los partícipes, el Representante Legal o Gerente y los empleados deben tener fácil
						acceso al Código de Ética y a las políticas, procedimientos y directrices, con el fin de
						establecer y estandarizar los comportamientos deseados definidos en este Código.
					</Typography>
					<Typography variant="h5" color="initial" className={classes.subTitle}>
						ARTÍCULO 32.
					</Typography>
					<Typography
						variant="body1"
						color="initial"
						component="p"
						align="justify"
						className={classes.parragraph}
					>
						Comunicación Externa. - El BIESS a través del Representante Legal será el vocero a nivel
						interno y ante terceros para los asuntos relacionados con las actividades operativas, el
						desempeño de la organización o sus partícipes, por lo cual los empleados no delegados
						por él deberán abstenerse de dar declaraciones a medios de comunicación sobre estos
						temas o divulgar información que pudiera afectar la imagen o el prestigio del Fondo.
					</Typography>
					<Typography
						variant="body1"
						color="initial"
						component="p"
						align="justify"
						className={classes.parragraph}
					>
						En caso de denuncia se tratará de manera confidencial.
					</Typography>
					<Typography
						variant="body1"
						color="initial"
						component="p"
						align="justify"
						className={classes.parragraph}
					>
						Nadie será objeto de represalia por haber denunciado de buena fe una violación de este
						Código.
					</Typography>
					<Typography
						variant="body1"
						color="initial"
						component="p"
						align="justify"
						className={classes.parragraph}
					>
						El Fondo mantendrá líneas de ayuda telefónica, de correo electrónico, específicas para
						comunicarse con la Representante Legal o Administrador del Fondo.
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
			fontSize: 26,
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
