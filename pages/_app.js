import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import { store, persistor } from '../store';
import Head from 'next/head';
import { useEffect } from 'react';
import Layout from '../components/layout';
import '../styles/globals.scss';

import { PersistGate } from 'redux-persist/integration/react';

export default function App({ Component, pageProps }) {
    useEffect(() => {
        require('bootstrap/dist/js/bootstrap.bundle.min.js');
    }, []);

    if (Component.getLayout) {
        return Component.getLayout(
            <>
                <Provider store={store}>
                    <PersistGate loading={null} persistor={persistor}>
                        <Head>
                            <title>Lucky Dodo</title>
                            <meta name="description" content="Lucky Dodo" />
                            <link rel="icon" href="images/fav.png" />
                        </Head>
                        <Component {...pageProps} />
                    </PersistGate>
                </Provider>
            </>,
        );
    }

    return (
        <>
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <Head>
                        <title>Lucky Dodo</title>
                        <meta name="description" content="Lucky Dodo" />
                        <link rel="icon" href="images/fav.png" />
                    </Head>
                    <Layout>
                        <Component {...pageProps} />
                    </Layout>
                </PersistGate>
            </Provider>
        </>
    );
}
