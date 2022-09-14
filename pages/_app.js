// pages/_app.js
import '../styles.css'
import { CookiesProvider } from "react-cookie"

export default function MyApp({ Component, pageProps }) {
  return (<CookiesProvider><Component {...pageProps} /></CookiesProvider>)
}
