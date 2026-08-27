'use client';

import { createPost } from '@/actions';
import { Dialog } from '@/components';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { checkDraftPost } from '@/actions/post/check-draft-post';
import { replaceDraftPost } from '@/actions/post/replace-draft-post';
import { initialPostData } from '../data/initialPostData';

export const CreatePostButton = () => {
  const router = useRouter();
  const [visible, setVisible] = useState(false);
  const [currentPostId, setCurrentPostId] = useState<string | null>(null);
  const [isCheakingDraftPost, setIsCheakingDraftPost] = useState(false);

  /**
   * No son necesarios los hooks 'isDiscardingDraft' y 'isCreatingPost porque
   * al momento de ejecutar alguna función se oculta el modal automáticamente.
   */

  // handler que busca algún post pendiente
  const handleCheckDraftPost = async () => {
    setIsCheakingDraftPost(true);
    const resp = await checkDraftPost();

    if (!resp.ok) {
      setIsCheakingDraftPost(false);
      toast.error('Ocurrió un error buscando el último post borrador');
      return;
    }

    if (resp.data) {
      setIsCheakingDraftPost(false);
      setCurrentPostId(resp.data);
      setVisible(true);
      return;
    }

    await createNewPost();

    setIsCheakingDraftPost(false);
  };

  // handlers para los botones footer del dialog

  const continueDraft = () => {
    if (!currentPostId) return;
    setVisible(false);
    openPost(currentPostId);
  };

  const discardDraft = async () => {
    if (!currentPostId) return;
    setVisible(false);

    const resp = await replaceDraftPost(
      currentPostId,
      initialPostData.title,
      initialPostData.content
    );

    if (!resp.ok) {
      toast.error('Ocurrió un error descartando el último borrador');
      return;
    }

    toast.success('Se creó el artículo con éxito');

    openPost(resp.data);
  };

  // otras funcionas

  const createNewPost = async () => {
    const resp = await createPost(
      initialPostData.title,
      initialPostData.content
    );

    if (!resp.ok) {
      toast.error('Ocurrió un error creando un nuevo artículo');
      return;
    }

    toast.success('Se creó el artículo con éxito');

    openPost(resp.data);
  };

  const openPost = (postId: string) => {
    router.push(`/dashboard/posts/${postId}/edit`);
  };

  const footerContent = (
    <div className="flex justify-end gap-3">
      <button
        className="rounded border border-gray-300 p-2 text-gray-500
          hover:cursor-pointer"
        onClick={discardDraft}
      >
        Descartar
      </button>
      <button
        className="rounded bg-blue-500 p-2 text-white hover:cursor-pointer"
        onClick={continueDraft}
      >
        Aceptar
      </button>
    </div>
  );

  return (
    <div>
      <button
        className="cursor-pointer rounded bg-blue-500 p-1 px-2 text-white
          disabled:opacity-50"
        onClick={handleCheckDraftPost}
        disabled={isCheakingDraftPost}
      >
        Crear nuevo post
      </button>

      <Dialog
        header="Continuar con el borrador"
        visible={visible}
        footer={footerContent}
        onHide={() => setVisible(false)}
      >
        Se encontró un artículo anterior no terminado, <br />
        ¿Deseas continuar editandolo?
      </Dialog>
    </div>
  );
};
