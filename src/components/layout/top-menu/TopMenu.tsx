'use client';

import { SocialLinksCarousel } from '@/features/home';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const TopMenu = () => {
  const pathname = usePathname();

  const getLinkClass = (path: string) => {
    if (path === '/') return pathname === '/' ? 'underline' : '';
    return pathname.startsWith(path) ? 'underline' : '';
  };

  return (
    <nav className="flex items-center justify-between">
      <SocialLinksCarousel />

      <ul className="flex justify-end gap-3">
        <li>
          <Link href="/" className={getLinkClass('/')}>
            Home
          </Link>
        </li>
        <li>
          <Link href="/blog" className={getLinkClass('/blog')}>
            Blog
          </Link>
        </li>
      </ul>
    </nav>
  );
};
