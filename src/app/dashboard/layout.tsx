import {
  NavMenuDesktop,
  NavMenuMobile,
} from '@/features/dashboard/components';

export default function DashboardLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
      <div className="h-dvh">
        <div className="flex h-full flex-col lg:flex-row">
          {/* Desktop */}
          <div className="hidden lg:block">
            <NavMenuDesktop />
          </div>

          {/* Mobile / tablet */}
          <div className="lg:hidden">
            <NavMenuMobile />
          </div>

          <div className="w-full overflow-auto p-2 lg:p-12 lg:pb-8">
            {children}
          </div>
        </div>
      </div>

  );
}
