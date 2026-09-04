import Link from 'next/link';
import { GoArrowLeft } from 'react-icons/go';

export const BackToListButton = () => {
  return (
    <Link
      href={'/dashboard/posts'}
      className="mb-6 flex w-min items-center gap-2 text-blue-500
        hover:underline"
    >
      <GoArrowLeft size={15} /> Regresar
    </Link>
  );
};
