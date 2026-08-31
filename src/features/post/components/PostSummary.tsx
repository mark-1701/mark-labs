'use client';

import { savePost } from '@/actions';
import { usePostStore } from '@/stores/post-store';
import { type Editor } from '@tiptap/react';
import equal from 'fast-deep-equal';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { getTextEditorContent, getTextEditorMediaKeys } from '../utils';

type Inputs = {
  title: string;
};

type PostSummaryProps = {
  editor: Editor;
  postId: string;
};

export const PostSummary = ({ editor, postId }: PostSummaryProps) => {
  const router = useRouter();

  const draftPost = usePostStore(state =>
    state.draftPosts.find(item => item.draft.id === postId)
  );
  const undoDrafPostChanges = usePostStore(state => state.undoDraftPostChanges);
  const deleteDraftPost = usePostStore(state => state.deleteDraftPost);
  const isNewPost = draftPost?.draft.status === 'DRAFT';
  const isDirtyPost = !equal(draftPost?.draft, draftPost?.original);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset
  } = useForm<Inputs>();

  // ? cargar estado inicial al formulario
  useEffect(() => {
    if (!draftPost) return;
    reset({
      title: draftPost.draft.title ?? ''
    });
  }, [reset, draftPost]);

  const onSubmit: SubmitHandler<Inputs> = async data => {
    if (!draftPost) return;

    const resp = await savePost(
      postId,
      data.title,
      getTextEditorContent(editor),
      getTextEditorMediaKeys(editor)
    );

    if (!resp.ok) {
      toast.error('Ocurrió un error guardando el post');
      return;
    }

    deleteDraftPost(postId);
    toast.success('Artículo guardado con éxito');
    router.push('/dashboard/posts');
  };

  return (
    <div className="h-full w-90 rounded-md border border-gray-200 bg-gray-50">
      <form
        className="flex flex-col rounded-b-md border-b border-gray-200 bg-white
          p-4 pb-8"
        onSubmit={handleSubmit(onSubmit)}
      >
        {/* <h2 className="mb-2 text-center text-lg font-semibold">
          Crear un post
        </h2> */}

        <div>
          <div className="mb-4">
            <label htmlFor="title" className="mb-2 block font-medium">
              Título
            </label>
            <input
              value={draftPost?.draft.title ?? ''}
              disabled={true}
              className="mb-1 w-full rounded border border-gray-300 p-1
                opacity-50"
              {...register('title', { required: true })}
            />
            {errors.title && (
              <span className="ml-1 text-sm text-red-500">
                Inserta un título en el editor de texto
              </span>
            )}
          </div>
        </div>

        <div className="flex justify-end gap-2">
          <button
            className="w-full bg-gray-500 p-1 text-white hover:cursor-pointer
              disabled:invisible"
            disabled={!isDirtyPost || isSubmitting}
            onClick={() => {
              undoDrafPostChanges(postId);
              window.location.reload();
            }}
          >
            Descartar cambios
          </button>

          <input
            type="submit"
            className={`${
              isNewPost ? 'bg-blue-500 text-white' : 'bg-yellow-300 text-black'
              } w-full cursor-pointer p-1 disabled:bg-yellow-200
              disabled:opacity-50`}
            disabled={isSubmitting}
            value={
              isSubmitting
                ? 'Guardando...'
                : isNewPost
                  ? 'Guardar'
                  : 'Actualizar'
            }
          />
        </div>
      </form>
    </div>
  );
};

// ? sincronizar el input de title si ocurre algún cambio en el state de
// ? del borrador almacenado en zustand.
// useEffect(() => {
//   if (!draftPost) return;
//   setValue('title', draftPost.draft.title ?? '');
// }, [draftPost, setValue]);
