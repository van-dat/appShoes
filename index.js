import React from 'react';
import App from './App';
import { Provider } from "react-redux";
import { store, persistor } from "./src/store/store";
import { PersistGate } from 'redux-persist/integration/react';
function Root() {

    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <App />
            </PersistGate>
        </Provider>
    );
}

export default Root
