import type { Metadata } from 'next' 
import '/styles/styles.scss'; 
import { Header } from './ui/Header';

export const metadata: Metadata = {
  title: 'Tab Roller',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Header /> 
        {children}
      </body>
    </html>
  )
}
