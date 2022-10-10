import React from 'react';
import {ReactQuery} from './utils/ReactQuery';
import {MainRoute} from './routes';

const App = () => {
  return (
    <ReactQuery>
      <MainRoute />
    </ReactQuery>
  );
};

export default App;
