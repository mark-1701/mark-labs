'use client';

import type { Post } from '@/app/generated/prisma/browser';
import { createHTML } from '@/features/post/utils';
import { useEffect, useState } from 'react';
import { BackToListButton } from './BackToListButton';

type PostContentProps = {
  post: Post;
};

export const PostContent = ({ post }: PostContentProps) => {
  const [html, setHtml] = useState('');

  useEffect(() => setHtml(createHTML(post.content)), [post.content]);

  return (
    <>
      <BackToListButton />
      <div className="prose prose-img:max-h-[600px] lg:max-w-2/3">
        {post.title && <h1>{post.title}</h1>}
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </>
  );
};
