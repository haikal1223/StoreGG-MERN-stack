import Footer from "./Footer";
import MenuItem from "./MenuItem";
import Profile from "./Profile";

export default function SideBar() {
  const staticData = [
    {
      title: "Overview",
      icon: "ic-menu-overview",
      active: true,
    },
    {
      title: "Transactions",
      icon: "ic-menu-transactions",
      active: false,
    },
    {
      title: "Messages",
      icon: "ic-menu-messages",
      active: false,
    },
    {
      title: "Card",
      icon: "ic-menu-card",
      active: false,
    },
    {
      title: "Rewards",
      icon: "ic-menu-rewards",
      active: false,
    },
    {
      title: "Settings",
      icon: "ic-menu-settings",
      active: false,
    },
    {
      title: "Log Out",
      icon: "ic-menu-logout",
      active: false,
    },
  ];

  return (
    <section className="sidebar">
      <div className="content pt-50 pb-30 ps-30">
        <Profile />
        <div className="menus">
          {staticData.map((val) => {
            return (
              <MenuItem title={val.title} icon={val.icon} active={val.active} />
            );
          })}
        </div>
        <Footer />
      </div>
    </section>
  );
}
