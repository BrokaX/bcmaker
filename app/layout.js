import { Work_Sans } from 'next/font/google';
import './globals.css';

import { AuthProvider } from '@/actions/AuthProvider';
import { ThemeProvider } from '@/actions/ThemeProvider';
import Header from '@/components/header/Header';

import { cn } from '@/lib/utils';

const workSans = Work_Sans({
  subsets: ['latin'],
  variable: '--font-work-sans',
  weight: ['400', '600', '700'],
});

export const metadata = {
  title: 'Business Card Maker',
  description: 'Create professional business cards for free.',
};

export default function RootLayout({ children }) {
  return (
    <html className='light' lang='en'>
      <AuthProvider>
        <body  className={cn(
          "min-h-screen bg-background font-sans antialiased", workSans.className)}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
          <Header/>
          {children}</ThemeProvider>
        </body>
      </AuthProvider>
    </html>
  );
}
