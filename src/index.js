import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '~/App';
import reportWebVitals from './reportWebVitals';
import GlobalStyles from './components/GlobalStyles';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { Provider } from 'react-redux';
import { persistor, store } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
const root = ReactDOM.createRoot(document.getElementById('root'));
const queryClient = new QueryClient();
root.render(
    // <React.StrictMode>
    <QueryClientProvider client={queryClient}>
        <GlobalStyles>
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <App />
                </PersistGate>
            </Provider>
        </GlobalStyles>
        <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>,

    // </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
