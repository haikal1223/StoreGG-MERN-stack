interface FooterListProps {
  title: string;
  children: React.ReactNode;
}
export default function FooterList(props: FooterListProps) {
  const { title, children } = props;
  return (
    <div className="col-md-4 col-6 mb-lg-0 mb-25">
      <p className="text-lg fw-semibold color-palette-1 mb-12">{title}</p>
      <ul className="list-unstyled">{children}</ul>
    </div>
  );
}
