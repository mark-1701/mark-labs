'use client';

import { usePostStore } from '@/stores/post-store';
import type { Editor } from '@tiptap/react';
import { useEffect } from 'react';
import { getTextEditorContent } from '../utils/get-text-editor-content';

export const useSyncEditorToDraft = (editor: Editor | null, postId: string) => {
  const updateDraftPost = usePostStore(state => state.updateDraftPost);

  // ? cualquier cambio que exista en el content se guarda en el draft del post
  useEffect(() => {
    if (!editor) return;

    const onUpdate = () => {
      updateDraftPost(postId, {
        content: getTextEditorContent(editor)
      });
    };

    editor.on('update', onUpdate);

    return () => {
      editor.off('update', onUpdate);
    };
  }, [editor, postId, updateDraftPost]);
};
