import "./globals.css";
import { Inter } from 'next/font/google'
import { Toaster } from "@/components/ui/sonner"
import { ThemeWrapper } from "@/components/common/ThemeWrapper"
import NavBar from "@/components/common/NavBar"
import Footer from "@/components/common/Footer"

const inter = Inter({ subsets: ['latin'] })


export const metadata = {
  title: "Tailgating detection demo",
  description: "Tailgating detection demo",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeWrapper>
          <Toaster position="top-center" closeButton={true} duration={3000}/>
          <NavBar />
          {children}
          <Footer />
        </ThemeWrapper>
      </body>
    </html>
  );
}
