import { cn } from '@/utils/cn';

type HeadingLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

type HeadingProps = {
  as?: HeadingLevel;
  children?: React.ReactNode;
  className?: string;
};

export const Heading = ({
  as: Tag = 'h1',
  className,
  children
}: HeadingProps) => {
  return (
    <Tag
      className={cn(
        'font-serif text-(--home-foreground) first:mt-0',
        {
          'mt-0 mb-6 text-3xl font-bold sm:mb-8 sm:text-4xl': Tag === 'h1',
          'mt-8 mb-4 text-2xl font-bold sm:mt-12 sm:mb-6 sm:text-3xl':
            Tag === 'h2',
          'mt-6 mb-2 text-xl font-semibold sm:mt-8 sm:mb-3 sm:text-2xl':
            Tag === 'h3',
          'mt-5 mb-1.5 text-lg font-semibold sm:mt-6 sm:mb-2 sm:text-xl':
            Tag === 'h4',
          'mt-4 mb-1 font-semibold sm:mt-5 sm:mb-1.5 sm:text-lg': Tag === 'h5',
          'mt-3 mb-1 font-medium sm:mt-4 sm:font-semibold': Tag == 'h6'
        },
        className
      )}
    >
      {children}
    </Tag>
  );
};

// 'mb-6 text-lg font-bold': Tag === 'h1',
//       'mb-4 font-semibold sm:text-lg': Tag === 'h2',
//       'mb-1 font-semibold sm:text-lg': Tag === 'h3',
//       'mb-0.5 font-semibold sm:text-lg': Tag === 'h4' || Tag == 'h5',
//       'mb-0 font-semibold sm:text-lg': Tag === 'h6'
