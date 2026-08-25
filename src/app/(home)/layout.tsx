import { Footer, TopMenu } from '@/components';

export default function HomeLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className="home flow-root bg-(--background) text-(--foreground-secondary)"
    >
      <div className="m-4 sm:mx-auto sm:mt-20 sm:mb-40 sm:w-138">
        <TopMenu />
        {children}
        <Footer />
      </div>
    </div>
  );
}
