import React from 'react'
import { makeStyles } from '@material-ui/core'

export const Lines = ({ height }) => {
  const classes = useStyles();
  return (
    <div className={classes.lines}>
      <div className={classes.lineBlue} style={{ height: height }}></div>
      <div className={classes.lineRed} style={{ height: height }}></div>
      {/* <div className={classes.lineGreen} style={{height:height}}></div> */}
    </div>
  )
}

const useStyles = makeStyles(theme => ({
  lines: {
    display: 'flex',
    width: '100%',
  },
  // lineGreen: {
  //   backgroundColor: '#078930',
  //   width: '33.33%',
  // },
  lineBlue: {
    backgroundColor: '#0000A0',
    width: '50%',
  },
  lineRed: {
    backgroundColor: '#ED1C24',
    width: '50%',
  },
}));
