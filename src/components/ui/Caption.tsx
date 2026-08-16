import { cn } from '@/utils/cn';

type CaptionProps = {
  children: React.ReactNode;
  className?: string;
};

export const Caption = ({ children, className }: CaptionProps) => {
  return (
    <div className={cn('mb-4 text-sm leading-5 first:mt-0', className)}>
      {children}
    </div>
  );
};
