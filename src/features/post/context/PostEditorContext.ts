'use client';

import { createContext, useContext } from 'react';
import type { InsertImage } from '../components/text-editor/types';

type PostEditorContextValue = {
  insertImage: InsertImage;
  isUploadingImage: boolean;
};

export const PostEditorContext = createContext<PostEditorContextValue | null>(
  null
);

export const usePostEditor = () => {
  const context = useContext(PostEditorContext);

  if (!context) {
    throw new Error('usePostEditor debe usarse dentro de <PostEditorContent>');
  }

  return context;
};
