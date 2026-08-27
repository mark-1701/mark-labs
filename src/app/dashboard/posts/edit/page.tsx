import EditPostPage from '@/features/post/page/EditPostPage';
import { Suspense } from 'react';

const NewPostPage = () => {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <EditPostPage />
    </Suspense>
  );
};

export default NewPostPage;
