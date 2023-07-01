/* import './globals.css'; */
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], weight: '200' });

export const metadata = {
  title: 'Todos',
  description: 'Todos - your personal helpers',
};

interface RootLayoutProps {
  children: React.ReactNode
};

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <body className={ inter.className }>{ children }</body>
    </html>
  )
};

export default RootLayout;