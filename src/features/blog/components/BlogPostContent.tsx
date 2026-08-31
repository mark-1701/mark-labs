'use client';

import { createHTML } from '@/features/post/utils';
import { JsonValue } from '@prisma/client/runtime/client';
import { useEffect, useState } from 'react';

type BlogPostContentProps = {
  content: JsonValue;
};

export const BlogPostContent = ({ content }: BlogPostContentProps) => {
  const [html, setHtml] = useState('');

  useEffect(() => setHtml(createHTML(content)), [content]);

  return (
    <div dangerouslySetInnerHTML={{ __html: html }} className="choco-article" />
  );
};
