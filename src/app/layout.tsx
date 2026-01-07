import type { Metadata } from 'next';
import { Libre_Caslon_Text } from 'next/font/google';
import Script from 'next/script';
import './globals.css';

const libreCaslon = Libre_Caslon_Text({
  subsets: ['latin'],
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Quality Landscapes - Baystone',
  description: 'Transform your outdoor space with Baystone. Award-winning landscape design that elevates your property\'s beauty and value. Book your free consultation today.',
  icons: {
    icon: '/baystone-text-icon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-TEMSXC9FPY"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-TEMSXC9FPY');
          `}
        </Script>
      </head>
      <body className={libreCaslon.className}>
        {children}
      </body>
    </html>
  );
}
