import React from 'react';
import {createUseStyles} from 'react-jss';
import UI_COMPONENT_MEASUREMENTS from '../../config/measurements';
import LoggerSelect from '../logging/LoggerUI';
import StatusBar from '../status/Status';

const useStyles = createUseStyles({
  footerContainer: {
    height: UI_COMPONENT_MEASUREMENTS.footer,
    width: '100%',
  },
  loggerContainer: {
    float: 'right',
  },
  statusBarContainer: {
    float: 'right',
    padding: '4px 0 0 0',
  },
});

const Footer: React.FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.footerContainer}>
      <span className={classes.loggerContainer}>
        <LoggerSelect />
      </span>
      <span className={classes.statusBarContainer}>
        <StatusBar />
      </span>
    </div>
  );
};

export default Footer;
