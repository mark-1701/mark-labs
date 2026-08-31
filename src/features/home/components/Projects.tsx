import { Caption, Heading, Stack } from '@/components';
import Image from 'next/image';

const projects = [
  {
    imageURL: '/proyecto.jpg',
    title: 'Uptask - Plataforma de gestión de proyectos',
    description:
      'Desarrollo de una aplicación web para la gestión y seguimiento de proyectos y tareas colaborativas, con funcionalidades de autenticación, gestión de equipos y control de actividades.'
  },
  {
    imageURL: '/proyecto.jpg',
    title: 'Mi Kiosquito - Sistema de pedidos para cafetería',
    description:
      'Desarrollo de una aplicación web para la gestión de pedidos en cafetería, que permite la toma de órdenes desde terminales digitales y la administración del proceso de preparación y entrega. '
  },
  {
    imageURL: '/proyecto.jpg',
    title: 'Tesloshop - Plataforma de comercio electrónico',
    description:
      'Desarrollo de una aplicación web de comercio electrónico con catálogo de productos, carrito de compras y panel administrativo, orientada a la gestión de ventas y la administración de inventario.'
  },
  {
    imageURL: '/proyecto.jpg',
    title: 'Tesloshop - Plataforma de comercio electrónico',
    description:
      'Desarrollo de una aplicación web de comercio electrónico con catálogo de productos, carrito de compras y panel administrativo, orientada a la gestión de ventas y la administración de inventario.'
  }
];

export const Projects = () => {
  return (
    <Stack>
      <div className="my-8 space-y-8 sm:space-y-12">
        {projects.map(({ imageURL, title, description }, index) => (
          <div key={index} className="flex items-center justify-between gap-3">
            <div>
              <Heading
                as="h6"
                className="text-sm font-normal text-(--foreground-600) italic
                  sm:text-sm sm:font-normal"
              >
                {title}
              </Heading>

              <Caption className="mb-1">{description}</Caption>

              <a href="" className="text-sm text-(--foreground-600) underline">
                ver más...
              </a>
            </div>

            <Image
              src={'/not-found.jpg'}
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
