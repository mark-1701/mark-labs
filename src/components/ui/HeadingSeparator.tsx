import React from 'react';

type HeadingSeparatorProps = {
  children: React.ReactNode;
};

const HeadingSeparator = ({ children }: HeadingSeparatorProps) => {
  return (
    <div className="my-12 flex items-center">
      {/* <hr className="flex-1 border-(--border)" /> */}
      <p className="font-serif font-medium text-(--home-foreground) mr-1">
        {children}
      </p>
      <hr className="flex-1 border-(--border)" />
    </div>
  );
};

export default HeadingSeparator;
