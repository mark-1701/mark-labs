'use client';

import { UnsupportedScreen } from '@/features/dashboard/components';
import { useSearchParams } from 'next/navigation';
import EditPostContent from './EditPostContent';

const EditPostPage = () => {
  const searchParams = useSearchParams();
  const postId = searchParams.get('postId');

  if (!postId) return <p>No se especificó un post.</p>;

  return (
    <>
      <div className="hidden h-full lg:block">
        <EditPostContent postId={postId} />
      </div>

      {/* aviso: no se permiten las pantallas pequeñas en este interfaz */}
      <UnsupportedScreen />
    </>
  );
};

export default EditPostPage;
