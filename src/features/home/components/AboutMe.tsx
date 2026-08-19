import { Caption, Paragraph, Stack } from '@/components';
import Image from 'next/image';

export const AboutMe = () => {
  return (
    <Stack>
      <div className="flex flex-col gap-8">
        <div className="flex items-center gap-3 sm:gap-6">
          <Image src={'/profile.jpg'} alt={''} width={70} height={70} />
          <div>
            <h1
              className="font-serif text-lg font-bold text-(--home-foreground)
                uppercase sm:text-2xl"
            >
              marco muralles
            </h1>
            <Caption className="mb-0">Desarrollador web fullstack</Caption>
          </div>
        </div>

        <Paragraph className="mb-0 sm:mb-0">
          Ingeniero de software orientado a la simplicidad y la eficiencia.
          Escribo código limpio, firme y sostenible, sin soluciones a medias ni
          consumo innecesario de recursos computacionales.
        </Paragraph>
      </div>
    </Stack>
  );
};
