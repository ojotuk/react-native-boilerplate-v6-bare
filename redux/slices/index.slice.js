import {
    combineReducers,
  } from '@reduxjs/toolkit'

  import appReducer from "./app.slice"


  const rootReducer = combineReducers({
      app:appReducer
  })

  export default rootReducer