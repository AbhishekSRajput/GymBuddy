import Navbar from './components/Navbar/index';
import Footer from './components/Footer/Footer';
import { Providers } from './store/provider';
import './globals.css';


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
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
