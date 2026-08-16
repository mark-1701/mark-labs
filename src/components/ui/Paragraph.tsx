type ParagraphProps = {
  children: React.ReactNode;
};

const Paragraph = ({ children }: ParagraphProps) => (
  <p className="mb-4 leading-6 sm:mb-5 sm:leading-7">{children}</p>
);

export default Paragraph;
