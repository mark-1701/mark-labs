import { title } from 'process';

export const initialPostData = {
  title: 'Mi nuevo artículo',
  content: {
    type: 'doc',
    content: [
      {
        type: 'paragraph',
        attrs: {
          textAlign: 'left'
        },
        content: [
          {
            text: 'puedes empezar a escribir...',
            type: 'text'
          }
        ]
      }
    ]
  }
};
