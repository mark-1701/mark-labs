import clsx from 'clsx';
import { FaXTwitter } from 'react-icons/fa6';
import {
  IoLogoFacebook,
  IoLogoLinkedin,
  IoLogoWhatsapp
} from 'react-icons/io5';

const socialNetworks = [
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
    title: 'Whatsapp',
    icon: IoLogoWhatsapp
  }
];

export const SocialShareLinks = () => {
  return (
    <div className="flex gap-5">
      {socialNetworks.map(({ title, icon: Icon }) => (
        <Icon key={title} size={18} className="hover:cursor-pointer" />
      ))}
    </div>
  );
};
