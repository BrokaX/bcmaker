import { Work_Sans } from 'next/font/google';
import './globals.css';
import { AuthProvider } from '@/actions/AuthProvider';

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
    <html lang='en'>
      <AuthProvider>
        <body
          className={`bg-primary-grey-100 overflow-hidden ${workSans.className}`}
        >
          {children}
        </body>
      </AuthProvider>
    </html>
  );
}
