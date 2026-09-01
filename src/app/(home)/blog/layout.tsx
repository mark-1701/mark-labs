export default function BlogLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return <div className="mt-12 flex flex-1 flex-col">{children}</div>;
}
