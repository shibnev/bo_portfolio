import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { children } from '@/types';
import { NavModalProvider } from '@/context/nav-modal-provider';

export const metadata = {
  title: 'anton-shibnev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: children;
}>) {
  return (
    <html lang="en" className='h-full'>
      <link rel="icon" href="/fav.svg" sizes="any" />

      <body className='p-2 md:p-6 min-h-screen flex flex-col justify-center items-center'>
        <section className='flex flex-col border border-solid border-dark rounded-lg h-full bg-primary overflow-hidden relative flex-1 max-w-8xl w-full'>

          <NavModalProvider>
            <Header />
          </NavModalProvider>

          <main className='relative grow flex flex-col'>
            {children}
          </main>

          <Footer />
        </section>
      </body>
    </html>
  );
}
