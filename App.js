import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { PersistGate } from 'redux-persist/integration/react'
import reduxStrore from './redux/store';
import { Provider } from 'react-redux';
import DrawerNavigation from './navigation/drawer';


export default function App() {
  const {store,persistor}= reduxStrore();
  
  return (
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
    <NavigationContainer>
      <DrawerNavigation />
    </NavigationContainer>
    </PersistGate>
  </Provider>
   
  );
}
