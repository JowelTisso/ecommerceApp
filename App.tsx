import React from 'react';
import Homestack from './src/routes/HomeStack';
import {MenuProvider} from 'react-native-popup-menu';

const App = () => {
  return (
    <MenuProvider>
      <Homestack />
    </MenuProvider>
  );
};

export default App;
