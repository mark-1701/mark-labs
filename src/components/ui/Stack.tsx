import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

type StackProps = {
  className?: string;
  children?: React.ReactNode;
};

function cn(...inputs: any[]) {
  return twMerge(clsx(inputs));
}

export const Stack = ({ className, children }: StackProps) => {
  return <div className={cn('my-12', className)}>{children}</div>;
};
