'use client';

import { deletePost } from '@/actions';
import { usePostStore } from '@/stores/post-store';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { GoTrash } from 'react-icons/go';
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
    const params = new URLSearchParams({ postId });
    router.push(`/dashboard/post-management/edit?${params.toString()}`);
    router.push(`/dashboard/post-management/edit?${params.toString()}`);
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
      <p
        className="text-blue-500 hover:cursor-pointer"
        onClick={() => handleRedirection(id)}
      >
        {title ?? 'Sin título'}
      </p>
      <button
        className="invisible text-red-500 group-hover:visible
          hover:cursor-pointer disabled:opacity-50"
        disabled={isDeleting}
        onClick={() => handleDelete(id)}
      >
        <GoTrash size={18} className="" />
      </button>
    </li>
  );
};