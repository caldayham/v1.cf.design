import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog - cf.design Landscape Design',
  description: 'Landscape design tips, outdoor living trends, and expert advice from cf.design.',
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
