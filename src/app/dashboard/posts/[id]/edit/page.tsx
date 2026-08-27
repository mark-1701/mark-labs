import { UnsupportedScreen } from '@/features/dashboard/components';
import EditPostContent from '@/features/post/page/EditPostContent';

type NewPostIdPage = {
  params: {
    id: string;
  };
};

const NewPostPage = async ({ params }: NewPostIdPage) => {
  const { id } = await params;

  return (
    <>
      <div className="hidden h-full lg:block">
        <EditPostContent postId={id} />
      </div>

      {/* aviso: no se permiten las pantallas pequeñas en este interfaz */}
      <UnsupportedScreen />
    </>
  );
};

export default NewPostPage;
