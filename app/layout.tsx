import Header from "@/components/header";
import './globals.css'
import { Inter } from 'next/font/google'
// import { ThemeContextProvider } from '@/context/theme-context';
// import { ActiveSectionContextProvider } from '@/context/active-section-context';
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Chen Hongji\'s Portfolio',
  description: 'Chen Hongji\'s a software engineer with 2 years of experience',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
})
{
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-50 text-gray-950 relative`}>
        <div className = "bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[0rem] h-[31.25rem] w-[31.25rem] rounded-full sm:w-[68.75rem] blur-[10rem]"></div>
        <div className = "bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full sm:w-[55rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:-left-[-5rem] blur-[10rem]"></div>
        <Header />
        {children}
      </body>
    </html>
  )
}
