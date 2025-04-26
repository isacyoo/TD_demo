import "./globals.css";
import { Inter } from 'next/font/google'
import Link from 'next/link'
import { Toaster } from "@/components/ui/sonner"

const inter = Inter({ subsets: ['latin'] })


export const metadata = {
  title: "Tailgating detection demo",
  description: "Tailgating detection demo",
};

function NavBar() {
  return (
      <div className='flex items-center w-auto h-12 p-4 shadow-md'>
          <Link href ='/' className='ml-7 text-sm transition-all'>
              Home
          </Link>
          <div className='h-7 w-0.5 border-l-2 border-l-primary-900 ml-7'></div>
          <div className='flex items-center ml-auto mr-2'>
              <div className='h-7 w-0.5 border-l-2 border-l-primary-900 ml-7'></div>
              <Link href='/api-reference' className='ml-7 border-'>API Reference</Link>
              <div className='h-7 w-0.5 border-l-2 border-l-primary-900 ml-7'></div>
              <Link href='/architecture' className='ml-7 border-'>Architecture</Link>
              <div className='h-7 w-0.5 border-l-2 border-l-primary-900 ml-7'></div>
              <Link href='/erd' className='ml-7 border-'>ERD</Link>
              <div className='h-7 w-0.5 border-l-2 border-l-primary-900 ml-7'></div>
              <Link href='/demo' className='ml-7 border-'>Start Demo</Link>                           
          </div>
      </div>
  )
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Toaster position="top-center" closeButton={true} duration={3000}/>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
