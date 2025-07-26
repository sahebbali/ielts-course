
import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '10 Minute School',
  description: 'Official website for 10 Minute School products',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
