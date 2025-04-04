import React from 'react';
import MainPageViewModel from './src/viewModel/MainPageViewModel';
import {SafeAreaView, StatusBar} from 'react-native';
import {colorConstant} from './src/constant/colorConstant';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={colorConstant.white}
        translucent={false}
      />
      <MainPageViewModel />
    </SafeAreaView>
  );
};

export default App;
