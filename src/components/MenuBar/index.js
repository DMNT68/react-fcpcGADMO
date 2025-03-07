import React from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';
// import { Link as LinkScroll } from 'react-scroll';

import './MenuBar.css';

export const MenuBar = ({ paginaActive, setPaginaActive }) => {
  const subMenuCodigo = [
    // { icon: '', path: '/codigoEtica', name: 'Código y Buen Gobierno' },
    {
      icon: '',
      path: '/codigoEtica',
      name: 'Generalidades y Definiciones',
      more: [
        { icon: '', path: '/introduccion', name: 'Introducción' },
        { icon: '', path: '/conceptosJustificación', name: 'Conceptos y Justificación' },
        { icon: '', path: '/disposionesPreliminares', name: 'Disposiciones Preliminares' },
        { icon: '', path: '/normas', name: 'Normas' },
        { icon: '', path: '/prohibicion', name: 'Prohibición' },
        { icon: '', path: '/conflictos', name: 'Conflictos' },
        { icon: '', path: '/actividadesPoliticas', name: 'Actividades Políticas' },
        { icon: '', path: '/medioAmbiente', name: 'Medio Ambiente' },
      ],
    },
    {
      icon: '',
      path: '/codigoEtica',
      name: 'Documento',
      more: [
        { icon: '', path: '/comiteEtica', name: 'Comite de Ética' },
        { icon: '', path: '/cumplimiento', name: 'Cumplimiento' },
        { icon: '', path: '/medidasDisciplinarias', name: 'Medidas Disciplinarias' },
        { icon: '', path: '/accesoPoliticas', name: 'Acceso a las Políticas' },
      ],
    },
  ];

  const handleClick = (e) => {
    setPaginaActive(e.key);
  };

  return (
    <Menu
      onClick={handleClick}
      theme="light"
      mode="horizontal"
      defaultSelectedKeys={[paginaActive]}
      className="menu"
    >
      <Menu.Item key="1">
        <Link to="/">Inicio</Link>
      </Menu.Item>

      <Menu.SubMenu key="Submenu1" title="La Institución">
        <Menu.Item key="insti:1">
          <Link to="/institucion">Filosofía Institucional</Link>
        </Menu.Item>
        <Menu.Item key="insti:2">
          <Link to="/planificacionEstrategica">Planificación Estratégica</Link>
        </Menu.Item>
      </Menu.SubMenu>

      <Menu.SubMenu key="Submenu2" title="Código de Ética y Gobierno Corporativo">
        {subMenuCodigo.map((item, idx) => (
          <Menu.SubMenu key={`sub:${idx}`} title={item.name}>
            {item.more &&
              item.more.map((opt, i) => (
                <Menu.Item key={opt.path}>
                  <Link to={opt.path}>{opt.name}</Link>
                </Menu.Item>
              ))}
          </Menu.SubMenu>
        ))}
        <Menu.Item key="cod:2123">
          <Link to="/anexo1">
            Anexo 1 - Indicadores de gobierno corporativo para las instituciones que conforman el
            sistema nacional de seguridad social
          </Link>
        </Menu.Item>
      </Menu.SubMenu>

      <Menu.Item key="4">
        <Link to="/educacionFinanciera">Educación Financiera</Link>
      </Menu.Item>
      <Menu.Item key="5">
        <Link to="/personal">Nuestro Personal</Link>
      </Menu.Item>
      <Menu.Item key="6">
        <Link to="/contacto">Contacto</Link>
      </Menu.Item>
      <Menu.Item key="7">
        <Link to="/gestionperiodo2015-2021">Gestión administración biess periodo 2015 - 2021</Link>
      </Menu.Item>

      <Menu.SubMenu key="SubmenuMas" title="Más">
        <Menu.Item key="Mas:1">
          <Link to="/ley-orgánica-de-proteccion-de-datos-personales">
            Cumplimiento a la ley orgánica de protección de datos personales.
          </Link>
        </Menu.Item>

        <Menu.Item key="Mas:2">
          <Link to="/quejas-y-sugerencias">Quejas y sugerencias.</Link>
        </Menu.Item>
        <Menu.Item key="Mas:BuzonDeQuejas">
          <Link to="/buzon-de-quejas">Buzón de quejas y sugerencias</Link>
        </Menu.Item>
        <Menu.Item key="Mas:3">
          <Link to="/proceso-de-concurso-de-meritos-y-oposicion">
            Proceso de concurso de meritos y oposición.
          </Link>
        </Menu.Item>
        <Menu.Item key="Mas:4">
          <Link to="/normas-para-calificacion">
            Normas para la calificación de representante legal del FCPC GADMO EMAPAO.
          </Link>
        </Menu.Item>
        <Menu.Item key="Mas:5">
          <Link to="/encuesta-de-educación-financiera">Encuesta de educación financiera</Link>
        </Menu.Item>

        <Menu.SubMenu key="Mas:6" title={'Convocatorias Asambleas 2023'}>
          <Menu.Item key="convocatoria-2023:1">
            <Link to="/convocatoria-primera-asamblea-general-ordinaria-2023-fcpc-gadmo">
              Convocatoria a la primera asamblea general ordinaria de participes - 2023.
            </Link>
          </Menu.Item>
          <Menu.Item key="convocatoria-2023:2">
            <Link to="/segunda-asamblea-general-extraordinaria-2023-03-de-mayo-2023">
              Segunda asamblea general extraordinaria - 2023 - 03 de mayo 2023
            </Link>
          </Menu.Item>
          <Menu.Item key="convocatoria-2023:3">
            <Link to="/convocatoria-tercera-asamblea-2023">
              Convocatoria tercera asamblea extraordinaria 2023
            </Link>
          </Menu.Item>
        </Menu.SubMenu>

        <Menu.SubMenu key="Mas:" title={'Convocatorias Asambleas 2024'}>
          <Menu.SubMenu key="convocatoria-2024:1" title={'PRIMERA ASAMBLEA ORDINARIA 2024'}>
            <Menu.Item key="convocatoria-2024:1.1">
              <Link to="/convocatoria-primera-asamblea-2024">
                Convocatoria a la primera asamblea general ordinaria de participes - 2024
              </Link>
            </Menu.Item>

            <Menu.SubMenu
              key="punto9"
              title={'PUNTO 9 - MANUAL Circular Nro. SB-INCSS-2023-0051-C'}
            >
              <Menu.Item key="punto9:1">
                <Link to="/manual-de-inhabilidades-fcpc-31">Manual de inhabilidades</Link>
              </Menu.Item>
            </Menu.SubMenu>
            <Menu.SubMenu key="punto10" title={'PUNTO 10 - RESOLUCIÓN SB-2023-02208'}>
              <Menu.Item key="punto10:1">
                <Link to="/resolucion-nro-sb-2023-02208">Resolución</Link>
              </Menu.Item>
              <Menu.Item key="punto10:2">
                <Link to="/resolucion-nro-sb-2023-02208">Oficio</Link>
              </Menu.Item>
            </Menu.SubMenu>
            <Menu.SubMenu
              key="punto11"
              title={'PUNTO 11 - ACTUALIZACIÓN FECHAS MANUALES EXISTENTES'}
            >
              <Menu.Item key="punto11:1">
                <Link to="/manual-de-funciones-fcpc">Manual de funciones</Link>
              </Menu.Item>
              <Menu.Item key="punto11:2">
                <Link to="/codigo-de-etica-fcpc">Código Ética</Link>
              </Menu.Item>
              <Menu.Item key="punto11:3">
                <Link to="/manual-de-viaticos-fcpc">Manual de viáticos</Link>
              </Menu.Item>
              <Menu.Item key="punto11:4">
                <Link to="/manual-lavado-de-activos">Manual lavado de activos</Link>
              </Menu.Item>
              <Menu.Item key="punto11:5">
                <Link to="/manual-contable-fcpc">Manual contable</Link>
              </Menu.Item>
              <Menu.Item key="punto11:6">
                <Link to="/manual-de-registro-de-cuenta-individual">
                  Manual de registro de cuenta individual
                </Link>
              </Menu.Item>
              <Menu.Item key="punto11:7">
                <Link to="/manual-para-la-administracion-del-riesgo">
                  Manual para la administración del riesgo
                </Link>
              </Menu.Item>
              <Menu.Item key="punto11:8">
                <Link to="/manual-de-prestaciones-fcpc">Manual de prestaciones</Link>
              </Menu.Item>
              <Menu.Item key="punto11:9">
                <Link to="/manual-de-control-interno-fcpc">Manual de control interno</Link>
              </Menu.Item>
              <Menu.Item key="punto11:10">
                <Link to="/politica-de-actualizacion-de-manuales">
                  Política de actualización de manuales
                </Link>
              </Menu.Item>
              <Menu.Item key="punto11:11">
                <Link to="/manual-de-compra-venta-de-titulos">
                  Manual de compra venta de títulos
                </Link>
              </Menu.Item>
              <Menu.Item key="punto11:12">
                <Link to="/manual-de-inversiones-no-privativas">
                  Manual de inversiones no privativas
                </Link>
              </Menu.Item>
              <Menu.Item key="punto11:13">
                <Link to="/manual-de-inversiones-privativas">Manual de inversiones privativas</Link>
              </Menu.Item>
              <Menu.Item key="punto11:14">
                <Link to="/manual-para-la-devolucion-del-fondo">
                  Manual para la devolución del fondo
                </Link>
              </Menu.Item>
            </Menu.SubMenu>
            <Menu.SubMenu
              key="punto12"
              title={'PUNTO 12 - MANUALES Circular Nro. BIESS-CFCO-2023-0038-C'}
            >
              <Menu.Item key="punto12:1">
                <Link to="/manual-de-calificacion-y-castigo-de-cartera">
                  Manual de calificación y castigo de cartera
                </Link>
              </Menu.Item>
              <Menu.Item key="punto12:2">
                <Link to="/manual-de-administracion-del-personal">
                  Manual de administración del personal
                </Link>
              </Menu.Item>
              <Menu.Item key="punto12:3">
                <Link to="/manual-de-archivo-y-gestion-documental">
                  Manual de archivo y gestión documental
                </Link>
              </Menu.Item>
              <Menu.Item key="punto12:4">
                <Link to="/politica-de-ejecucion-plan-estrategico">
                  Política de ejecución plan estrategico
                </Link>
              </Menu.Item>
              <Menu.Item key="punto12:5">
                <Link to="/manual-de-gestion-de-asambleas">Manual de gestión de asambleas</Link>
              </Menu.Item>
            </Menu.SubMenu>
            <Menu.SubMenu
              key="punto13"
              title={'PUNTO 13 - MANUALES Circulares SB-INCSS-2019-0003-C y SB-INCSS-2019-0003-C'}
            >
              <Menu.Item key="punto13:1">
                <Link to="/manual-incidencias">Manual incidencias</Link>
              </Menu.Item>
              <Menu.Item key="punto13:2">
                <Link to="/manual-cambios-en-el-aplicativo">Manual cambios en el aplicativo</Link>
              </Menu.Item>
              <Menu.Item key="punto13:3">
                <Link to="/manual-generacion-de-respaldos">Manual generación de respaldos</Link>
              </Menu.Item>
            </Menu.SubMenu>
          </Menu.SubMenu>
          <Menu.SubMenu key="convocatoria-2024:2" title={'SEGUNDA ASAMBLEA ORDINARIA 2024'}>
            <Menu.Item key="convocatoria-2024:2.1">
              <Link to="/convocatoria-segunda-asamblea-2024">
                Convocatoria a la segunda asamblea extraordinaria ordinaria - 17 de mayo
              </Link>
            </Menu.Item>
          </Menu.SubMenu>
          <Menu.SubMenu key="convocatoria-2024:3" title={'TERCERA ASAMBLEA ORDINARIA 2024'}>
            <Menu.Item key="convocatoria-2024:3.1">
              <Link to="/convocatoria-tercera-asamblea-2024">
                Convocatoria a la tercera asamblea extraordinaria ordinaria - 25 de julio
              </Link>
            </Menu.Item>
          </Menu.SubMenu>
          <Menu.SubMenu key="convocatoria-2024:4" title={'CUARTA ASAMBLEA EXTRAORDINARIA 2024'}>
            <Menu.Item key="convocatoria-2024:4.1">
              <Link to="/convocatoria-cuarta-asamblea-2024">
                Convocatoria cuarta asamblea extraordinaria - 2024
              </Link>
            </Menu.Item>
          </Menu.SubMenu>
        </Menu.SubMenu>
        <Menu.SubMenu key="Mas:8" title={'Convocatorias Asambleas 2025'}>
          <Menu.SubMenu key="convocatoria-2025:1" title={'PRIMERA ASAMBLEA ORDINARIA 2025'}>
            <Menu.Item key="convocatoria-2025:1.1">
              <Link to="/convocatoria-primera-asamblea-2025">
                Convocatoria a la primera asamblea general ordinaria de participes - 2025
              </Link>
            </Menu.Item>
            <Menu.SubMenu key="punto9" title={'PUNTO 6 - Manuales'}>
              <Menu.Item key="punto6:1">
                <Link to="/manual-de-inhabilidades-fcpc-68">Manual de inhabilidades</Link>
              </Menu.Item>
              <Menu.Item key="punto6:2">
                <Link to="/manual-de-funciones-fcpc-68">Manual de funciones</Link>
              </Menu.Item>
              <Menu.Item key="punto6:3">
                <Link to="/codigo-de-etica-fcpc-68">Código de Ética</Link>
              </Menu.Item>
              <Menu.Item key="punto6:4">
                <Link to="/manual-de-viaticos-fcpc-68">Manual de viáticos</Link>
              </Menu.Item>
              <Menu.Item key="punto6:5">
                <Link to="/manual-de-lavado-de-activos-fcpc-68">Manual de lavado de activos</Link>
              </Menu.Item>
              <Menu.Item key="punto6:6">
                <Link to="/manual-de-registro-contable-fcpc-68">Manual de registro contable</Link>
              </Menu.Item>
              <Menu.Item key="punto6:7">
                <Link to="/manual-de-registro-de-cuenta-individual-fcpc-68">
                  Manual de registro de cuenta individual
                </Link>
              </Menu.Item>
              <Menu.Item key="punto6:8">
                <Link to="/manual-de-inversiones-no-privativas-fcpc-68">
                  Manual de invesiones no privativas
                </Link>
              </Menu.Item>
              <Menu.Item key="punto6:9">
                <Link to="/manual-de-inversiones-privativas-fcpc-68">
                  Manual de inversiones privativas
                </Link>
              </Menu.Item>
              <Menu.Item key="punto6:10">
                <Link to="/manual-para-la-administracion-y-gestion-del-riesgo-fcpc-68">
                  Manual para la administración y gestión del riesgo
                </Link>
              </Menu.Item>
              <Menu.Item key="punto6:11">
                <Link to="/manual-de-prestaciones-fcpc-68">Manual de prestaciones</Link>
              </Menu.Item>
              <Menu.Item key="punto6:12">
                <Link to="/manual-de-control-interno-fcpc-68">Manual de control interno</Link>
              </Menu.Item>
              <Menu.Item key="punto6:13">
                <Link to="/politica-de-actualizacion-de-normativa-fcpc-68">
                  Politica de actualización de normativa
                </Link>
              </Menu.Item>
              <Menu.Item key="punto6:14">
                <Link to="/manual-de-compra-venta-de-titulos-valores-fcpc-68">
                  Manual de compra-venta de títulos de valores
                </Link>
              </Menu.Item>
              <Menu.Item key="punto6:15">
                <Link to="/manual-de-calificacion-y-castigo-de-cartera-fcpc-68">
                  Manual de calificación y castigo de cartera
                </Link>
              </Menu.Item>
              <Menu.Item key="punto6:16">
                <Link to="/manual-de-administración-del-personal-del-fondo-fcpc-68">
                  Manual de administración del personal del fondo
                </Link>
              </Menu.Item>
              <Menu.Item key="punto6:17">
                <Link to="/manual-de-archivo-y-gestion-documental-fcpc-68">
                  Manual de archivo y gestión documental
                </Link>
              </Menu.Item>
              <Menu.Item key="punto6:18">
                <Link to="/politica-de-ejecucion-plan-estrategico-y-planificacion-operativa-anual-fcpc-68">
                  Política de ejecución plan estrategico y planificación operativa anual
                </Link>
              </Menu.Item>
              <Menu.Item key="punto6:19">
                <Link to="/manual-de-gestión-de-asambleas-fcpc-68">
                  Manual de gestión de asambleas
                </Link>
              </Menu.Item>
              <Menu.Item key="punto6:20">
                <Link to="/manual-de-tecnologias-incidencias-fcpc-681">
                  Manual de tecnologias de incidencias
                </Link>
              </Menu.Item>
              <Menu.Item key="punto6:21">
                <Link to="/manual-de-tecnologias-cambios-en-el-aplicativo-contable-fcpc-68">
                  Manual de tecnologias cambios en el aplicativo contable
                </Link>
              </Menu.Item>
              <Menu.Item key="punto6:22">
                <Link to="/manual-de-tecnologias-generacion-de-respaldos-fcpc-68">
                  Manual de tecnologias generación de respaldos
                </Link>
              </Menu.Item>
              <Menu.Item key="punto6:23">
                <Link to="/procedimiento-para-tratamiento-de-quejas-y-sugerencias-fcpc">
                  Procedimiento para tratamiento de quejas y sugerencias
                </Link>
              </Menu.Item>
            </Menu.SubMenu>

            <Menu.Item key="punto9:1">
              <Link to="/manual-circular">
                PUNTO 7 - Manual Circular Nro. BIESS-CFCO-2025-0004-C
              </Link>
            </Menu.Item>
          </Menu.SubMenu>
        </Menu.SubMenu>
      </Menu.SubMenu>
    </Menu>
  );
};
