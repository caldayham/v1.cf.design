import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog - Baystone Landscape Design',
  description: 'Landscape design tips, outdoor living trends, and expert advice from Baystone.',
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
