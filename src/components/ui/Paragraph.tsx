import { cn } from '@/utils/cn';

type ParagraphProps = {
  children: React.ReactNode;
  className?: string;
};

export const Paragraph = ({ children, className }: ParagraphProps) => (
  <p className={cn('mb-4 leading-6 sm:mb-5', className)}>{children}</p>
);
