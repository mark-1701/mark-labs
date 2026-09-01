import clsx from 'clsx';
import { FaXTwitter } from 'react-icons/fa6';
import { IoLogoFacebook, IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5';

const socialNetworks2 = [
  {
    title: 'Facebook',
    icon: IoLogoFacebook
  },
  {
    title: 'X',
    icon: FaXTwitter
  },
  {
    title: 'Linkedin',
    icon: IoLogoLinkedin
  },
  {
    title: 'Github',
    icon: IoLogoGithub
  }
];

export const SocialLinks = () => {
  return (
    <div className="flex gap-4">
      {socialNetworks2.map(({ icon: Icon, title }) => (
        <Icon
          key={title}
          size={18}
          className="text-(--foreground-600) hover:cursor-pointer"
        />
      ))}
    </div>
  );
};
