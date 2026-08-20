import {
  AboutMe,
  Contact,
  LongDescription,
  Projects,
  Technologies
} from '@/features/home';
// import 'devicon/devicon.min.css';
import { HeadingSeparator as HSeparator } from '@/components/ui';

const HomePage = () => {
  return (
    <>
      <AboutMe />
      <HSeparator>About</HSeparator>
      <LongDescription />
      <HSeparator>Proyectos</HSeparator>
      <Projects />
      <HSeparator>Stack</HSeparator>
      <Technologies />
      <HSeparator>Contacto</HSeparator>
      <Contact />
    </>
  );
};

export default HomePage;
