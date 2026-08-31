'use client';

import { PostSummary, TextEditor } from '../components';
import { PostEditorContext } from '../context/PostEditorContext';
import { useCreatePostEditor } from '../hooks/useCreatePostEditor';

type EditPostContentProps = {
  postId: string;
};

const EditPostContent = ({ postId }: EditPostContentProps) => {
  const { editor, insertImage, isUploadingImage } = useCreatePostEditor(postId);

  if (!editor) return <p>Cargando editor...</p>;

  return (
    <PostEditorContext.Provider value={{ insertImage, isUploadingImage }}>
      <div className="flex h-full flex-col gap-8">
        {/* <h1 className="text-xl font-semibold text-gray-700">Editar post</h1> */}
        <div className="flex min-h-0 flex-1 gap-4">
          <div className="relative flex-1">
            {/* image loader */}
            {isUploadingImage && (
              <div
                className="absolute top-1/2 left-1/2 flex h-[60px] w-[60px]
                  -translate-1/2 items-center justify-center rounded-md border
                  border-gray-300 bg-white shadow"
              >
                <span className="loader"></span>
              </div>
            )}

            {/* editor de texto */}
            <TextEditor editor={editor} />
          </div>
          <div>
            <PostSummary editor={editor} postId={postId} />
          </div>
        </div>
      </div>
    </PostEditorContext.Provider>
  );
};

export default EditPostContent;
