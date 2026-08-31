import { getPostById } from '@/actions';
import { BlogPostContent } from '@/features/blog/components/BlogPostContent';
import Link from 'next/link';
import { GoArrowLeft } from 'react-icons/go';

type BlogIdPage = {
  params: {
    id: string;
  };
};

const BlogPageId = async ({ params }: BlogIdPage) => {
  const { id } = await params;

  const resp = await getPostById(id);

  if (!resp.ok) return <p>No existe ese artículo</p>;

  return (
    <>
      <Link
        className="mb-8 flex items-center gap-1 text-(--foreground-600)
          hover:cursor-pointer hover:underline"
        href="/blog"
      >
        <GoArrowLeft size={15} /> regresar
      </Link>
      <BlogPostContent content={resp.data.content} />
    </>
  );
};

export default BlogPageId;
