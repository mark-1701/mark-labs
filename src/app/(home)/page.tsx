import { Heading, Separator, Stack } from '@/components';
import {
  AboutMe,
  Contact,
  LongDescription,
  Projects,
  Skills
} from '@/features/home';
import 'devicon/devicon.min.css';
import HeadingSeparator from '@/components/ui/HeadingSeparator';
import Paragraph from '@/components/ui/Paragraph';

const HomePage = () => {
  return (
    <>
      <AboutMe />

      <HeadingSeparator>About</HeadingSeparator>
      <LongDescription />

      {/* <Separator />
      <Stack>
        <Heading as="h6">Lorem ipsum</Heading>
        <Paragraph>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
          quaerat totam incidunt quibusdam recusandae rem optio aliquam illum
          architecto excepturi. Fugiat nihil repellendus praesentium
          consequuntur, voluptates doloremque ipsa minima impedit?
        </Paragraph>

        <Heading as="h6">Lorem ipsum</Heading>
        <Paragraph>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
          quaerat totam incidunt quibusdam recusandae rem optio aliquam illum
          architecto excepturi. Fugiat nihil repellendus praesentium
          consequuntur, voluptates doloremque ipsa minima impedit?
        </Paragraph>

        <Heading as="h6">Lorem ipsum</Heading>
        <Paragraph>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
          quaerat totam incidunt quibusdam recusandae rem optio aliquam illum
          architecto excepturi. Fugiat nihil repellendus praesentium
          consequuntur, voluptates doloremque ipsa minima impedit?
        </Paragraph>
      </Stack> */}

      <HeadingSeparator>Proyectos</HeadingSeparator>
      <Projects />

      <HeadingSeparator>Skills</HeadingSeparator>
      <Skills />

      <HeadingSeparator>Contacto</HeadingSeparator>
      <Contact />
    </>
  );
};

export default HomePage;
