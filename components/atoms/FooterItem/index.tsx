interface FooterItemProps {
  title: string;
  link: string;
}
export default function FooterItem(props: FooterItemProps) {
  const { title, link } = props;
  return (
    <li className="mb-6">
      <a href={link} className="text-lg color-palette-1 text-decoration-none">
        {title}
      </a>
    </li>
  );
}
