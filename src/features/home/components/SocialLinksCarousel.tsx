import clsx from 'clsx';

const socialNetworks = [
  { title: 'Facebook', icon: 'facebook' },
  { title: 'Likedin', icon: 'linkedin' },
  { title: 'Twitter', icon: 'twitter' },
  { title: 'Github', icon: 'github' }
];

export const SocialLinksCarousel = () => {
  return (
    <div className="flex justify-center gap-4 sm:justify-start">
      {socialNetworks.map(({ icon: icon, title }) => (
        <div key={title} className="h-6 w-6">
          <i
            className={clsx(
              'text-base text-(--foreground)',
              `devicon-${icon}-plain`
            )}
          ></i>
        </div>
      ))}
    </div>
  );
};
