import { Heading, Stack } from '@/components';
import clsx from 'clsx';

const skills: { title: string; icon: string }[] = [
  { title: 'HTML5', icon: 'html5' },
  { title: 'CSS3', icon: 'css3' },
  { title: 'JavaScript', icon: 'javascript' },
  { title: 'TypeScript', icon: 'typescript' },
  { title: 'Node.js', icon: 'nodejs' },
  { title: 'NEXT.js', icon: 'nextjs' },
  { title: 'C#/.NET', icon: 'dot-net' },
  { title: 'Java/Android', icon: 'androidstudio' },
  { title: 'SQL Server', icon: 'microsoftsqlserver' },
  { title: 'MySQL', icon: 'mysql' },
  { title: 'MongoDB', icon: 'mongodb' },
  { title: 'Docker', icon: 'docker' },
  { title: 'Git', icon: 'git' }
];

export const Technologies = () => {
  return (
    <Stack>
      <div className="my-16 grid grid-cols-5 gap-9 sm:grid-cols-6 sm:gap-12">
        {skills.map(({ title, icon }) => (
          <Technology key={title} title={title} icon={icon} />
        ))}
      </div>
    </Stack>
  );
};

const Technology = ({ title, icon }: { title: string; icon?: string }) => {
  return (
    <figure className="flex flex-col items-center">
      <div className="mb-3 h-10 w-10">
        <i
          className={clsx(
            'text-[36px] text-(--foreground) opacity-65',
            `devicon-${icon}-plain`
          )}
        ></i>
      </div>
      <figcaption className="text-center text-xs">{title}</figcaption>
    </figure>
  );
};
