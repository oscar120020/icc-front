interface Props {
  link: string;
  label: string;
}

export const InlineLink = ({ link, label }: Props) => {
  return (
    <a
      className="no-styles"
      href={link}
      target="_blank"
      rel="noopener noreferrer"
    >
      {label}
    </a>
  );
};
