'use client';

import { usePostStore } from '@/stores/post-store';
import React from 'react';

type PostTitleProps = {
  postId: string;
};

export const PostTitle = ({ postId }: PostTitleProps) => {
  const draftPost = usePostStore(state =>
    state.draftPosts.find(item => item.draft.id === postId)
  );
  const updateDraftPost = usePostStore(state => state.updateDraftPost);

  return (
    <input
      type="text"
      placeholder="Escribe el título de tu artículo"
      value={draftPost?.draft.title ?? ''}
      className="mb-4 rounded-md border border-gray-300 p-2 text-3xl font-bold
        placeholder:font-medium placeholder:text-gray-400"
      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
        updateDraftPost(postId, { title: e.target.value });
      }}
    />
  );
};
