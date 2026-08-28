import { Stack } from '@/components';

export default function BlogLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return <Stack className="my-12">{children}</Stack>;
}
