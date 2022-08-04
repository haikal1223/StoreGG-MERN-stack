import cx from "classnames";
import Image from "next/image";
import Link from "next/link";

interface MenuItemProps {
  title: string;
  icon: string;
  active?: boolean;
  href: Url;
}
// Partial on interface MenuItemProps means one of properties is nullable (nb: active?: boolean)
export default function MenuItem(props: Partial<MenuItemProps>) {
  const { title, icon, active, href } = props;
  const classItem = cx({
    item: true,
    "mb-30": true,
    active: active,
  });
  return (
    <div className={classItem}>
      <div className="me-3">
        <Image
          src={`/icon/${icon}.svg`}
          width={25}
          height={25}
          alt="ic-menu-overview"
        />
      </div>
      <p className="item-title m-0">
        <Link href={href}>
          <a className="text-lg text-decoration-none">{title}</a>
        </Link>
      </p>
    </div>
  );
}
