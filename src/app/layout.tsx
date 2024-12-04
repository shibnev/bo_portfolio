import type { Metadata } from "next";
import "./globals.css";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Blob from '@/components/Blob/index';

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className='h-full'>
      <body className='p-6 h-full'>
        <section className='border border-solid border-dark rounded-lg h-full bg-primary overflow-hidden relative'>
          <Blob />
          <Header />
          <main className='h-full relative'>
            <div className='relative z-10 h-full'>{children}</div>
          </main>
          <Footer />
        </section>
      </body>
    </html>
  );
}
