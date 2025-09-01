import './globals.css';
import type { Metadata } from 'next';
import { Inter, Merriweather } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';

// Font setup
const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
});

const merriweather = Merriweather({ 
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '700', '900'],
  variable: '--font-serif',
});

export const metadata: Metadata = {
  title: {
    template: '%s | PulsePress',
    default: 'PulsePress - Modern News & Blog Platform',
  },
  description: 'A modern blog and news platform delivering the latest insights and stories.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://pulsepress.com',
    siteName: 'PulsePress',
    images: [
      {
        url: 'https://pulsepress.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'PulsePress',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PulsePress - Modern News & Blog Platform',
    description: 'A modern blog and news platform delivering the latest insights and stories.',
    creator: '@pulsepress',
    images: ['https://pulsepress.com/twitter-image.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${merriweather.variable} font-sans`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1 pt-20">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}