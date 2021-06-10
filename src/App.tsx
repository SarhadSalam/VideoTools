import React from 'react';
import {createUseStyles} from 'react-jss';
import ContentBody from './features/content_body/ContentBody';
import Footer from './features/footer/footer';
import Navbar from './features/navbar/navbar';

const useStyles = createUseStyles({
  primaryBodyContainer: {
    width: '100vw',
  },
});

const App: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.primaryBodyContainer}>
      <Navbar />
      <ContentBody />
      <Footer />
    </div>
  );
};

export default App;
