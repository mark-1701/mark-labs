import { generateHTML } from '@tiptap/core';
import Highlight from '@tiptap/extension-highlight';
import Image from '@tiptap/extension-image';
import StarterKit from '@tiptap/starter-kit';

export const createHTML = (content: any) => {
  return generateHTML(content, [StarterKit, Highlight, Image]);
};
