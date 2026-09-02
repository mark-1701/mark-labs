'use client';

import { deletePost } from '@/actions';
import { usePostStore } from '@/stores/post-store';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { GoPencil, GoTrash } from 'react-icons/go';
import { toast } from 'react-toastify';

type PostCardProps = {
  id: string;
  title: string | null;
};

export const PostCard = ({ id, title }: PostCardProps) => {
  const router = useRouter();
  const [isDeleting, setIsDeleting] = useState(false);
  const deleteDraftPost = usePostStore(state => state.deleteDraftPost);

  const handleRedirection = (postId: string) => {
    router.push(`/dashboard/posts/${postId}/edit`);
  };

  const handleDelete = async (id: string) => {
    setIsDeleting(true);
    const resp = await deletePost(id);

    if (!resp.ok) {
      setIsDeleting(false);
      toast.error('Ocurrió un error tratando de eliminar el post');
      return;
    }

    deleteDraftPost(id);
    setIsDeleting(false);
    router.refresh();
  };

  return (
    <li key={id} className="group flex justify-between p-1">
      <Link
        href={`/dashboard/posts/${id}`}
        className="text-blue-500 hover:cursor-pointer hover:underline"
      >
        {title ?? 'Sin título'}
      </Link>

      <div className="invisible flex gap-3 group-hover:visible">
        <button
          className="hover:cursor-pointer"
          onClick={() => handleRedirection(id)}
        >
          <GoPencil size={18} className="text-yellow-600" />
        </button>

        <button
          className="hover:cursor-pointer disabled:opacity-50"
          disabled={isDeleting}
          onClick={() => handleDelete(id)}
        >
          <GoTrash size={18} className="text-red-500" />
        </button>
      </div>
    </li>
  );
};
