import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import {ReactQuery} from './utils/ReactQuery';

const App = () => {
  return (
    <SafeAreaView>
      <ReactQuery>
        <Text>Hola Mundo</Text>
      </ReactQuery>
    </SafeAreaView>
  );
};

export default App;
