import '../styles/globals.css'
import type { AppProps } from 'next/app'
import '../styles/tailwind.css';
import '../styles/google-icons.css';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
