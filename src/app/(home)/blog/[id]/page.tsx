import { getPostById } from '@/actions';
import { PostContent } from '@/features/post/components';

type BlogIdPage = {
  params: {
    id: string;
  };
};

const BlogPageId = async ({ params }: BlogIdPage) => {
  const { id } = await params;

  const resp = await getPostById(id);

  if (!resp.ok) return <p>No existe ese artículo</p>;

  return <PostContent content={resp.data.content} />;
};

export default BlogPageId;
