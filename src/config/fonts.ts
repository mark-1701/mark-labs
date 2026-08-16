import { IBM_Plex_Sans, IBM_Plex_Serif, Roboto_Mono } from 'next/font/google';

export const fontSerif = IBM_Plex_Serif({
  variable: '--font-IBM-serif',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700']
});

export const fontSans = IBM_Plex_Sans({
  variable: '--font-IBM-sans',
  subsets: ['latin']
});

export const fontMono = Roboto_Mono({
  variable: '--font-IBM-mono',
  subsets: ['latin']
});
