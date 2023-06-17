import App from 'next/app';
import Head from 'next/head';
// import { I18nextProvider } from 'react-i18next';
// import i18n from '../i18n';
import Layout from '@/app/layout';
import '../styles/fontGreyQo.css';
import '../styles/fontPoppin.css';

class MyApp extends App {
    render() {
        const { Component, pageProps } = this.props;

        return (
            <>
                <Head>
                    <title>Steelancer</title>
                    <link rel="icon" href="/images/logo.png" />
                </Head>
                {/* <I18nextProvider i18n={i18n}> */}
                    <Layout>
                        <Component {...pageProps} />
                    </Layout>
                {/* </I18nextProvider> */}
            </>
        );
    }
}

export default MyApp;
