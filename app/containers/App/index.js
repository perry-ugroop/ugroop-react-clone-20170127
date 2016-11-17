/**
 *
 * App.react.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import Helmet from 'react-helmet';
// import Footer from 'components/Footer';
import UGFooter from 'components/UGFooter';
import UGHeader from 'components/UGHeader';

// Import the CSS reset, which HtmlWebpackPlugin transfers to the build folder
import 'sanitize.css/sanitize.css';
import styles from './styles.css';


function App(props) {
  return (
    <div className={styles.wrapper}>
      <Helmet
        titleTemplate="%s - React.js Boilerplate"
        defaultTitle="React.js Boilerplate"
        meta={[
          { name: 'description', content: 'A React.js Boilerplate application' },
        ]}
      />
      <UGHeader />
      {React.Children.toArray(props.children)}
      <UGFooter />
    </div>
  );
}

App.propTypes = {
  children: React.PropTypes.node,
};

export default App;
