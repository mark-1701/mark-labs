'use client';

import { createHTML } from '@/features/post/utils';
import { JsonValue } from '@prisma/client/runtime/client';
import { useEffect, useState } from 'react';

export const PostContent = ({ content }: { content: JsonValue }) => {
  const [html, setHtml] = useState('');

  useEffect(() => setHtml(createHTML(content)), [content]);

  return (
    <div
      dangerouslySetInnerHTML={{ __html: html }}
      className="prose prose-img:max-h-[600px] lg:max-w-1/2"
      // className="prose-sm lg:prose prose-img:max-h-[600px] max-w-none"
    />
  );
};
