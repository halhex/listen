import '../styles/global.sass'
import Header from "../components/header";

export default function Layout({ Component, pageProps }) {
    return (
        <>
            <Header/>
            <main>
                <Component {...pageProps} />
            </main>
        </>
    )
}
