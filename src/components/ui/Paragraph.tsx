type ParagraphProps = {
  children: React.ReactNode;
};

export const Paragraph = ({ children }: ParagraphProps) => (
  <p className="mb-4 leading-6 sm:mb-5">{children}</p>
);