"use client"
import './globals.css';
import Navbar from './components/Navbar/index';
import Footer from './components/Footer/Footer';
import { Provider } from 'react-redux';
import store from './store';


export const metadata = {
  title: 'Gym Buddy',
  description: 'An Gym Trainer',
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Provider store={store}>
          <Navbar />
          {children}
          <Footer />
        </Provider>
      </body>
    </html>
  )
}
