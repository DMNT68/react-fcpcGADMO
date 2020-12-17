import React from 'react';
import PropTypes from 'prop-types';

import { AppBar, Toolbar, makeStyles, CssBaseline, useScrollTrigger, Slide, IconButton } from '@material-ui/core/';

import Logo from '../assets/images/logofav.png';
import { Link } from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';

export default function NavbarHiden(props) {
  const classes = useStyle();
  const {handleDrawerToggle} = props;

  return (
    <div>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar position="fixed" color="inherit">
          <Toolbar>
            {/* <div className={classes.left} /> */}
            <Link to={'/'}>
              <img src={Logo} alt="fcpc-GADM-OTAVALO" className={classes.logo} />
            </Link>
            <div className={classes.right} />
            <IconButton color="inherit" aria-label="open drawer" edge="start" onClick={handleDrawerToggle} className={classes.menuButton}>
              <MenuIcon color="primary"/>
            </IconButton>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <div className={classes.offset}></div>
    </div>
  );
}

function HideOnScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};

const useStyle = makeStyles((theme) => ({
  offset: theme.mixins.toolbar,
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  logo: {
    width: 30,
    height: 40,
    flexGrow: 1,
  },
  btn: {
    marginLeft: 15,
  },
  right: {
    flex: 1,
    display: 'flex',
    justifyContent: 'flex-end',
  },
  toolbar: {
    justifyContent: 'space-between',
  },
  left: {
    flex: 1,
  },
}));
