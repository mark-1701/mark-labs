import { Paragraph, Stack } from '@/components';

export const Contact = () => {
  return (
    <Stack>
      <Paragraph>
        Estoy abierto a nuevos proyectos y oportunidades. Si tienes una
        propuesta o quieres hablar sobre una idea, puedes escribirme a través de
        este formulario.
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
