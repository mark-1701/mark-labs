import { getPostById } from '@/actions';
import { Stack } from '@/components';
import { BlogPostContent } from '@/features/blog/components/BlogPostContent';
import { SocialLinksCarousel } from '@/features/home';
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
      <div className="flex-1">
        <BlogPostContent content={resp.data.content} />
      </div>

      <div
        className="mt-8 mb-20 border-t border-b border-dashed
          border-(--border-strong)"
      >
        <Stack>
          <p className="mb-5 text-(--foreground-600) italic">
            Comparte este artículo en:
          </p>

          <SocialLinksCarousel />
        </Stack>
      </div>
    </>
  );
};

export default BlogPageId;
