
import { Inter } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { TanstackProvider } from './Providers/tanstackprovider'
import { Raleway } from 'next/font/google'
import ReduxProvider from './Providers/reduxprovider'

const inter = Raleway({ subsets: ['latin'] });

export const metadata = {
  title: 'Event Hub',
  description: 'Generated by create next app',
};

export default function RootLayout({ children, }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReduxProvider>
          <TanstackProvider>
            <Header />
            {children}
            <Footer />
          </TanstackProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}