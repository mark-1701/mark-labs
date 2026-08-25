import React from 'react';

type HeadingSeparatorProps = {
  children: React.ReactNode;
};

export const HeadingSeparator = ({ children }: HeadingSeparatorProps) => {
  return (
    <div className="flex items-center gap-1">
      {/* <hr className="flex-1 border-(--border)" /> */}
      <p className="font-serif font-bold text-(--foreground) ">{children}</p>
      <hr className="flex-1 border-(--border)" />
    </div>
  );
};
