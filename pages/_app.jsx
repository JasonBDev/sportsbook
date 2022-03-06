import '../styles/globals.css'
import Header from '../components/header'
import Footer from '../components/footer'
import Head from 'next/head'
import {AnimatePresence, motion} from 'framer-motion';
import {useRouter} from 'next/router';

function MyApp({ Component, pageProps }) {

  const router = useRouter();

  return (
    <>
        <Head><title>Sportsbook - Bet with confidence!</title></Head>
        <Header />
        <AnimatePresence exitBeforeEnter>
          <motion.div key={router.route} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ delay: 0, duration: 0.1 }}>
            <Component {...pageProps} />
          </motion.div>
        </AnimatePresence>
        <Footer />
      </>
  )
}

export default MyApp
