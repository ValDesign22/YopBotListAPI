import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import Head from "next/head";
import { inject } from "@vercel/analytics";
import Script from "next/script";

export default function App({ Component, pageProps }: AppProps) {
    inject({
        beforeSend: (event) => {
            if (event.type === "pageview") {
                event.url = window.location.href;
            }
            return event;
        }
    });

    return (
        <>
            <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-R7B513HDVR"/>
            <Script
                id="google-analytics"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', 'G-R7B513HDVR', {
                            page_path: window.location.pathname,
                        });
                    `,
                }}
            />
            <Head>
                <title>YopBot List</title>
                <link rel="icon" href="/yopbot.png" />
                <meta name="description" content="YopBot List est une liste de bots discord qui vous permet de trouver des bots discord de qualité." />
                <meta property="og:color" content="#f2ac34" />
            </Head>
            <div className="main">
                <Component {...pageProps} />
            </div>
            <footer>
                <div className="start">
                    <p>YopBot List - 2020</p>
                </div>
                <div className="end">
                    <p>Notre <a href="https://discord.gg/HgDKy7FcVJ" target="_blank">Discord</a></p>
                </div>
            </footer>
        </>
    )
}
