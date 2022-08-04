import Footer from "./Footer";
import MenuItem from "./MenuItem";
import Profile from "./Profile";

interface SideBarProps {
  activeMenu: "overview" | "transactions" | "settings";
}
export default function SideBar(props: SideBarProps) {
  const { activeMenu } = props;
  const staticData = [
    {
      title: "Overview",
      icon: "ic-menu-overview",
      slug: "overview",
      href: "/member",
    },
    {
      title: "Transactions",
      icon: "ic-menu-transactions",
      slug: "transactions",
      href: "/member/transactions",
    },
    {
      title: "Messages",
      icon: "ic-menu-messages",
      slug: false,
      href: "/member",
    },
    {
      title: "Card",
      icon: "ic-menu-card",
      slug: false,
      href: "/member",
    },
    {
      title: "Rewards",
      icon: "ic-menu-rewards",
      slug: false,
      href: "/member",
    },
    {
      title: "Settings",
      icon: "ic-menu-settings",
      slug: "settings",
      href: "/member/edit-profile",
    },
    {
      title: "Log Out",
      icon: "ic-menu-logout",
      slug: false,
      href: "/sign-in",
    },
  ];

  return (
    <section className="sidebar">
      <div className="content pt-50 pb-30 ps-30">
        <Profile />
        <div className="menus">
          {staticData.map((val) => {
            return (
              <MenuItem
                title={val.title}
                icon={val.icon}
                active={activeMenu === val.slug}
                href={val.href}
              />
            );
          })}
        </div>
        <Footer />
      </div>
    </section>
  );
}
