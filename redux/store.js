import {
    configureStore,
    combineReducers,
    getDefaultMiddleware,
    createStore,
  } from '@reduxjs/toolkit'
  import logger from 'redux-logger'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistStore, persistReducer } from 'redux-persist';
import rootReducer from './slices/index.slice';
// 
const persistConfig = {
    key: 'root',
    storage:AsyncStorage
  }

  const persistedReducer = persistReducer(persistConfig, rootReducer)

  const defaultMiddleware = getDefaultMiddleware({
    serializableCheck: false,
    immutableCheck: false,
  })


  export default () => {

let store = configureStore({
    reducer: persistedReducer,
    middleware: __DEV__ ? defaultMiddleware : defaultMiddleware,
    // middleware: __DEV__ ? defaultMiddleware.concat(logger) : defaultMiddleware,

  })
    let persistor = persistStore(store)
    return { store, persistor }
  }
 
  
  // TO USE LOGGER
  
  // const store = configureStore({
  //   reducer: rootReducer,
  //   // eslint-disable-next-line no-undef
  //   middleware: __DEV__ ? defaultMiddleware.concat(logger) : defaultMiddleware,
  // })