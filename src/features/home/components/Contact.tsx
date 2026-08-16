import { Heading, Stack } from '@/components';
import Paragraph from '@/components/ui/Paragraph';

export const Contact = () => {
  return (
    <Stack>
      <Paragraph>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat fugiat
        nobis ab ad minus rem omnis? Tenetur impedit est nobis.
      </Paragraph>

      <div className="flex flex-col gap-8">
        <input
          type="text"
          name=""
          id=""
          placeholder="nombre"
          className="rounded-xd h-9 bg-(--foreground) p-2 text-black
            placeholder:text-zinc-800"
        />
        <input
          type="text"
          name=""
          id=""
          placeholder="email"
          className="rounded-xd h-9 bg-(--foreground) p-2 text-black
            placeholder:text-zinc-800"
        />
        <textarea
          name=""
          id=""
          placeholder="descripción..."
          className="rounded-xd h-20 bg-(--foreground) p-2 text-black
            placeholder:text-zinc-800"
        ></textarea>

        <input
          type="submit"
          value="Envíar"
          className="w-20 cursor-pointer self-end bg-(--foreground) p-1
            text-black"
        />
      </div>
    </Stack>
  );
};
