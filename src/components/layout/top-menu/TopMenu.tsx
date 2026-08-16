import { SocialLinksCarousel } from '@/features/home';
import clsx from 'clsx';

const menuOptions = [
  {
    title: 'Home',
    selected: true
  },
  {
    title: 'Blog',
    selected: false
  }
];

export const TopMenu = () => {
  return (
    <nav className="mb-14 flex items-center justify-between">
      <SocialLinksCarousel />

      <ul className="flex justify-end gap-3">
        {menuOptions.map(({ title, selected }) => (
          // <a href="" className="underline hover:underline">
          <a
            key={title}
            href=""
            className={clsx('hover:underline', {
              underline: selected
            })}
          >
            {title}
          </a>
        ))}
      </ul>
    </nav>
  );
};
