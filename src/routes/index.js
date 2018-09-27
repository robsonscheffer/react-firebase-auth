import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

import Dashboard from '../containers/Dashboard';
import NotFound from '../containers/NotFound';
import Auth from '../containers/Auth';
import About from '../containers/About';
import { auth } from '../firebase';

class Routes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
    };
  }

  componentDidMount() {
    auth.onAuthStateChanged((user) => {
      if (user) {
        // User is signed in.
        const userInfo = {
          displayName: user.displayName,
          email: user.email,
          emailVerified: user.emailVerified,
          photoURL: user.photoURL,
          isAnonymous: user.isAnonymous,
          uid: user.uid,
          providerData: user.providerData,
        };
        this.setState({ user: userInfo });
      } else {
        this.setState({ user: {} });
      }
    });
  }

  render() {
    const { state } = this;
    // if (state.user) {
    //   return (
    //     <div>
    //       User:
    //       { state.user.email }
    //     </div>
    //   );
    // }
    return (
      <Switch>
        <Route exact path="/" component={ Dashboard } />
        <Route exact path="/auth" component={ Auth } />
        <Route exact path="/about" component={ About } user={ state.user } />
        <Route component={ NotFound } />
      </Switch>
    );
  }
}

Routes.propTypes = {
  history: PropTypes.object,
};

export default Routes;
