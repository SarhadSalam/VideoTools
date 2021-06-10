import React from 'react';
import {createUseStyles} from 'react-jss';
import {grey} from '@ant-design/colors';
import UI_COMPONENT_MEASUREMENTS from '../../config/measurements';

const useStyles = createUseStyles({
  primaryBodyContainer: {
    height: `calc(100vh - ${UI_COMPONENT_MEASUREMENTS.navbar} - ${UI_COMPONENT_MEASUREMENTS.footer})`,
    width: '100%',
    backgroundColor: grey[3],
  },
});

const ContentBody: React.FC = () => {
  const classes = useStyles();
  return <div className={classes.primaryBodyContainer}>Primary Body</div>;
};

export default ContentBody;
