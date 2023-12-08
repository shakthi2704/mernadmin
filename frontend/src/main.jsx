import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.jsx"
import globalReducer from "./state"
import { configureStore } from "@reduxjs/toolkit"
import { Provider } from "react-redux"
import { api } from "./state/api"
import { setupListeners } from "@reduxjs/toolkit/query"
import "./index.css"

const store = configureStore({
  reducer: {
    global: globalReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefault) => getDefault().concat(api.middleware),
})
setupListeners(store.dispatch)

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)
