import {createRoot} from 'react-dom/client'
import App from './App.jsx'
import {GlobalStyle} from "./GlobalStyle.js";
import store from './store.js';
import {Provider} from "react-redux";

createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
        <GlobalStyle/>
        <App/>
    </Provider>
)
