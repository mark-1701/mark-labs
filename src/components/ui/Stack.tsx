import { cn } from '@/utils/cn';

type StackProps = {
  className?: string;
  children?: React.ReactNode;
};

export const Stack = ({ className, children }: StackProps) => {
  return <div className={cn('my-8', className)}>{children}</div>;
};
