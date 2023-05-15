import { createContext } from 'react';
import Sidebar from '@/components/Sidebar'
import '@/styles/globals.css'

//const AppContext = createContext(null);


export default function App({ Component, pageProps }) {
  return (
  
      <Sidebar>
        <Component {...pageProps} />
      </Sidebar>
  
  )
}
