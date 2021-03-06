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
    console.log('click ', e);
    setPaginaActive(e.key);
  };

  return (
    <Menu onClick={handleClick} theme="light" mode="horizontal" defaultSelectedKeys={[paginaActive]} className="menu">
      <Menu.Item key="1">
        <Link to="/">Inicio</Link>
      </Menu.Item>

      <Menu.SubMenu
        key="Submenu1"
        title="La Institución"
        // title={
        //   <LinkScroll key="2" activeclass="active" to="institucion" spy="true" smooth="true" offset={-70} duration={500}>
        //     La Institución
        //   </LinkScroll>
        // }
      >
        <Menu.Item key="insti:1">
          <Link to="/institucion">Filosofía Institucional</Link>
        </Menu.Item>
        <Menu.Item key="insti:2">
          <Link to="/planificacionEstrategica">Planificación Estratégica</Link>
        </Menu.Item>
      </Menu.SubMenu>

      <Menu.SubMenu key="Submenu2" title="Código de Ética">
        {subMenuCodigo.map((item, idx) => (
          <Menu.SubMenu key={`sub:${idx}`} title={item.name}>
            {item.more && item.more.map((opt, i) => (
              <Menu.Item key={opt.path}>
                <Link to={opt.path}>{opt.name}</Link>
              </Menu.Item>
            ))}
          </Menu.SubMenu>
        ))}
      </Menu.SubMenu>

      {/* <Menu.SubMenu
        key="Submenu2"
        title="Código de Ética"
        // title={
        //   <Link key="3" to="/codigoEtica">
        //     Código de Ética
        //   </Link>
        // }
        // title={
        //   paginaActive > 0 ? (
        //     <Link key="3" to="/codigoEtica">Código de Ética</Link>
        //   ) : (
        //     <LinkScroll key="3" activeclass="active" to="codigo" spy="true" smooth="true" offset={-70} duration={500}>
        //       Código de Ética
        //     </LinkScroll>
        //   )
        // }
      >
        {subMenuCodigo.map((item, idx) => (
          <Menu.Item key={`cod:${idx}`}>
            <Link to={item.path}>{item.name}</Link>
          </Menu.Item>
        ))}
      </Menu.SubMenu> */}

      <Menu.Item key="4">
        <Link to="/educacionFinanciera">Educación Financiera</Link>
        {/* {paginaActive > 0 ? (
          <Link to="/educacionFinanciera">Educación Financiera</Link>
        ) : (
          <LinkScroll activeclass="active" to="educacion" spy="true" smooth="true" offset={-70} duration={500}>
            Educación Financiera
          </LinkScroll>
        )} */}
      </Menu.Item>
      <Menu.Item key="5">
        {/* {paginaActive > 0 ? ( */}
        <Link to="/personal">Nuestro Personal</Link>
        {/* ) : (
          <LinkScroll activeclass="active" to="personal" spy="true" smooth="true" offset={-70} duration={500}>
            Nuestro Personal
          </LinkScroll>
        )} */}
      </Menu.Item>
      <Menu.Item key="6">
        <Link to="/contacto">Contacto</Link>
        {/* {paginaActive > 0 ? (
          <Link to="/contacto">Contacto</Link>
        ) : (
          <LinkScroll activeclass="active" to="contacto" spy="true" smooth="true" offset={-70} duration={500}>
            Contacto
          </LinkScroll>
        )} */}
      </Menu.Item>
    </Menu>
  );
};
