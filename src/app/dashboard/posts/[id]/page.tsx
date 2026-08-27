import { getPostById } from '@/actions';
import { PostContent } from '@/features/post/components';

type PostIdPage = {
  params: {
    id: string;
  };
};

const PostIdPage = async ({ params }: PostIdPage) => {
  const { id } = await params;

  const resp = await getPostById(id);

  if (!resp.ok) return <p>No existe ese artículo</p>;

  return <PostContent content={resp.data.content} />;
};

export default PostIdPage;
