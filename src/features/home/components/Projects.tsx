import { Caption, Heading, Stack } from '@/components';
import Image from 'next/image';
import Paragraph from '@/components/ui/Paragraph';

const projects = [
  {
    imageURL: '/proyecto.jpg',
    title: 'Quiosco café incasa',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Abrepellendus voluptatibus consectetur quae numquam nemo, distinctio veniam magni quia.'
  },
  {
    imageURL: '/proyecto.jpg',
    title: 'Quiosco café incasa',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Abrepellendus voluptatibus consectetur quae numquam nemo, distinctio veniam magni quia.'
  },
  {
    imageURL: '/proyecto.jpg',
    title: 'Quiosco café incasa',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Abrepellendus voluptatibus consectetur quae numquam nemo, distinctio veniam magni quiaLorem ipsum dolor sit amet consectetur, adipisicing elit. Abrepellendus voluptatibus consectetur quae numquam nemo, distinctio veniam magni quia.'
  }
];

export const Projects = () => {
  return (
    <Stack>
      <div className="space-y-9 sm:space-y-12">
        {projects.map(({ imageURL, title, description }, index) => (
          <div key={index} className="flex items-center justify-between gap-3">
            <div>
              <Heading as="h6" className="mt-0 font-normal">
                {title}
              </Heading>

              <Caption>{description}</Caption>

              <a href="" className="text-sm underline opacity-85">
                ver más...
              </a>
            </div>

            <Image
              src={'/proyecto.jpg'}
              alt={'loli-bahia'}
              width={120}
              height={80}
              className="hidden h-[80px] w-[120px] shrink-0 object-cover
                sm:block"
            />
          </div>
        ))}
      </div>
    </Stack>
  );
};
