import React from 'react';
import { Router, Scene } from 'react-native-router-flux';

import SampleContainer from '../containers/SampleContainer';

const AppRouter = () => (
  <Router>
    <Scene key="root">
      <Scene key="SampleContainer" component={SampleContainer} title="SampleContainer" hideNavBar={true} />
    </Scene>
  </Router>
);

export default AppRouter;
