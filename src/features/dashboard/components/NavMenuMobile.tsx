'use client';

import clsx from 'clsx';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { PiSidebar } from 'react-icons/pi';

export const NavMenuMobile = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        className="flex h-10 items-center justify-end border-b border-gray-200
          bg-gray-100 p-2"
      >
        <button onClick={() => setIsOpen(state => !state)}>
          <PiSidebar size={22} className="cursor-pointer" />
        </button>
      </div>
      <aside
        className={clsx(
          isOpen ? 'translate-x-0' : 'translate-x-full',
          `fixed right-0 z-20 h-dvh w-[300px] border-r border-gray-200
          bg-gray-100 p-3 transition-all`
        )}
      >
        <div className="flex flex-col gap-4">
          <button
            className="cursor-pointer text-left"
            onClick={() => {
              setIsOpen(false);
              router.push('/dashboard');
            }}
          >
            Inicio
          </button>
          <button
            className="cursor-pointer text-left"
            onClick={() => {
              setIsOpen(false);
              router.push('/dashboard/posts');
            }}
          >
            Gestionar posts
          </button>
        </div>
      </aside>
    </>
  );
};